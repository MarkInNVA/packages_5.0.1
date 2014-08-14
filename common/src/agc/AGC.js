/**
* @class USGS.common.AGC
* AGC, kind of a wrapper for ESRI's ArcGIS Javascript API.
* @extends Component
* It uses the DOJO loader 'require', to add some Dojo & ESRI modules, then starts up an ESRI ArcGIS 'map' on Dojo 'Ready'.
* It fires a 'maploaded' event on map.on('load') 
* It fills the container it is placed in, by default
*/
Ext.define('USGS.common.AGC', {

  /** */
	extend: 'Ext.Component',

  /** */
	alias: 'widget.agc',

  /** */
  reference: 'AGC',


  /** 
   * @property style
   * @property style.height default '100%'
   * @property style.width  default '100%'
   * @property style.z-index should be 100
   *
   */
  style: {
    height:'100%',
    width: '100%',
    'z-index': 100
  },

  /** 
   * @property layout
   * @property layout.border should be 'border'
   */
  layout: { type: 'border' },

	config:{ // 
 
    /** 
     * @cfg {a reference to a map} arcMap 
     * <p>A pointer to 'the map'.</p>
     * getters & setters: getArcMap(), setArcMap(map)
     *
    */
		arcMap: null,

    /** 
     * @cfg {map extent} initialExtent
     * <p>Initial extent of the map</p>
     * { xmin : -19000000, ymin : 1300000, xmax : -3300000, ymax : 7900000 } <br>
     * getters & setters: getInitialExtent(), setInitialExtent(extent).
    */
		initialExtent: null,

    /** 
     * @cfg {boolean} fitExtent
     * <p>Forces extent to fit in Viewport</p> 
     */
    fitExtent: false,

    /** 
     * @cfg {boolean} showExtent
     * <p>Shows current extent in console.log</p> 
     * helper function shows map extent on map extent-change.
     */
    showExtent: false,

    /** 
     * @cfg {screenLocation} scaleBar
     * <p>Shows scaleBar at screenLocation</p> 
     * Specify the scalebar position on the map. Valid options are 
     * "top-right","bottom-right","top-center",
     * "bottom-center","bottom-left","top-left". 
     */
    scaleBar: null,

    /** 
     * @cfg {screenLocation} overViewMap
     * <p>Shows OverViewMap at screenLocation</p> 
     * Specifies which corner of the map to attach the OverviewMap dijit. 
     * Valid values are: "top-right","bottom-right","bottom-left" and "top-left"
     */
    overViewMap: null,

    /** 
     * @cfg {} legend
     * <p>Shows map legend</p> 
     */
    legend: null,

    /** 
     * @cfg {[0,1,..,16,17]} theLods
     * <p>Limit map zoom levels to certain levels of detail</p>
     * An ArcGISTiledMapServiceLayer has a number of LODs (Levels of Detail). 
     * Each LOD corresponds to a map at a given scale or resolution. LOD has no constructor.
     */
    theLods: null,   // set in view

    tempLods: null,  // local working copy
    
    thePopup: null,
    esriPopup: true,

    /** 
     * @cfg {boolean} showMask
     * <p>Shows a loader mask untill shut off, see theMask</p>
     */
    showMask: false,

    theMask: null,

    theHelpHTML: null,

    /** 
     * @cfg {task} theTask
     * <p>Internal config used to control an error message</p>
     * 
     */
    theTask: null,

    /** 
     * @cfg {boolean} wrap180
     * <p>Wrap map at 180 degrees?</p>
     * 
     */
    wrap180: false,

    /** 
     * @cfg {boolean} myGL
     * <p>Create/add graphicsLayer to map with an id of 'myGL'?</p>
     * 
     */
    myGL: false
	},

  /** 
   * A property with auto-detected type and name.
   */
  initComponent: function() { // sets up task runner & a bunch of dojo.requires
    var me = this;
    var task;
    var runner = new Ext.util.TaskRunner();
 
    this.callParent(); 

    task = runner.newTask({
      run: me.taskDone,
      interval: 10000,
      scope: me
    });

    this.setTheTask(task);
    this.getTheTask().start();

    dojo.require("esri.map");

    dojo.require("esri.layers.FeatureLayer");
    dojo.require("esri.layers.agstiled");
    dojo.require("esri.layers.agsdynamic");

    dojo.require("esri.tasks.query");
    dojo.require("esri/tasks/IdentifyParameters");

    dojo.require("esri.graphic");
    dojo.require("esri.Color");

    // dojo.require("dojo.topic");  
    // already seems to be a publish/subscribe is available in dojo
    // dojo.publish('event', parameter);

    if (this.getEsriPopup()) {
      //    console.log('Esri Popup: ');
      dojo.require("esri.dijit.PopupTemplate");
      dojo.require("esri.dijit.Popup");

      dojo.require("dojo.parser");
    }

    if (this.getLegend() ) {
      dojo.require("esri.dijit.Legend");
    }

    if (this.getScaleBar() ) {
      dojo.require("esri.dijit.Scalebar");
    }

    if (this.getOverViewMap() ) {
      dojo.require("esri.dijit.OverviewMap");
    }

    if ( this.getMyGL() ) {
      dojo.require("esri.layers.graphics");
    }

  },


  /**     */
  taskDone: function() {  // should not get here - map did not load!!!
    //  console.log('taskDone! this: ', this);
      var task = this.getTheTask();
 //     console.log('taskDone! task: ', task);
      task.stop();
      Ext.Msg.alert('Something is wrong', 'Having trouble getting the map, please try again later');
  },


  /**     */
	onBoxReady: function(t, eOpts){
		var map,  me = this, local_id = this.getId() ;

		function myInit() {
      me.doSetLODS();

      me.doSetInitExtent();


      if (me.getEsriPopup()) {  //setup popup, parse, map w/infoWindow
      //  console.log('Esri Popup: onBoxReady, with popup');
        me.doSetPopup();
 
        dojo.parser.parse();  // needed for popup placement, make sure dom is ready for map 
        // http://forums.arcgis.com/threads/94986-Popups-and-Zoom-are-Not-in-Correct-Spot?highlight=popups+zoom
 
        map = new esri.Map(local_id, { // map with infoWindow 
          basemap: "topo", 
          extent: me.getInitialExtent(),
          fitExtent: me.getFitExtent(),
          logo: false,
          showAttribution:false,
          lods: me.getTempLods(),
          wrapAround180: me.getWrap180(),
          infoWindow: me.getThePopup()
        });

      } else {  // no popup or parse
        //        console.log('Esri Popup: onBoxReady no popup');
        map = new esri.Map(local_id, {  // map without infoWindow 
          basemap: "topo", 
          extent: me.getInitialExtent(),
          fitExtent: me.getFitExtent(),
          logo: false,
          showAttribution:false,
          lods: me.getTempLods(),
          wrapAround180: me.getWrap180()
        });

      }

      map.on("load", function() { // setArcMap, stop task, {scalebar, Overview, Legend, MyGL}, fire 'maploaded' event 
        //console.log('AGC, map - on load');
        me.setArcMap(map);

        if (me.getScaleBar() ) {
          me.showScalebar();
        }

        if (me.getOverViewMap() ) {
          me.showOverViewMap();
        }

        if (me.getLegend() ) {
          me.showLegend();
        }

        if ( me.getMyGL() ) {
          me.setupMyGL(map);
        }

        me.getTheTask().stop();

        // seems like only lowercase events are being passed to root controller
        //        me.fireEvent('mapLoaded', map); 

        /**
         * @event maploaded
         * Triggered after map is loaded.
         * @param {Ext.Component} map a reference to the map
         * @return {Object} map:

         */          
        me.fireEvent('maploaded', map);
      });

      // --------------------------------------------------

      if (me.getShowExtent()) {
        map.on("extent-change", function(e){
          var geo = map.extent;
          console.log( 'xmin :', geo.xmin.toFixed(3),', ymin :', geo.ymin.toFixed(3), ', xmax :', geo.xmax.toFixed(3), ', ymax :',geo.ymax.toFixed(3));
        });
      }

      if (me.getTheHelpHTML() ) {
        var help = Ext.ComponentQuery.query('help')[0];
        help.getViewModel().set('helpHTML', me.getTheHelpHTML() );

      }

		}  // init

    // console.log('AGC init');
    if (me.getShowMask()) {
      this.setTheMask( new Ext.LoadMask({
            msg: 'Please wait',
            target: this
          }) 
      );

      this.getTheMask().show();

    }

    dojo.ready(myInit);

	},  // onBoxReady

/**     */
//	onResize: function( t, height, width, oldWidth, oldHeight, eOpts ) {    // keeps map & screen coordinated
  onResize: function( width, height, oldWidth, oldHeight) {    // keeps map & screen coordinated, fires 'mapresized' event 
    //        resize( this, width, height, oldWidth, oldHeight, eOpts )
    // if ( this.getShowExtent() ) {
    // console.log('AGC , resize - width:', width, ', height: ', height, ', oldWidth: ', oldWidth, ', oldHeight: ', oldHeight);
    // }

    var m = this.getArcMap();
    var size = {height:height, width:width, oldHeight:oldHeight, oldWidth:oldWidth};
    
		if (m) {
      m.resize(); 
      // console.log('AGC, onResize, height: ', height, ', oldHeight: ', oldHeight);
      // console.log('AGC, onResize, width: ' , width , ', oldWidth: ' , oldWidth);

    /**
     * @event mapresized
     * Triggered after map is resized.
     * @return {Object} Object with properties:
     * @return {Number} return.width map width.
     * @return {Number} return.height map height.
     * @return {Number} return.oldWidth The old map width.
     * @return {Number} return.oldHeight The old map height.
     */                	
      this.fireEvent('mapresized', size);
		}
  },

/**     */
  doSetLODS: function() {  // set level of detail 
    var lods = [
      { "level":  0, "resolution": 156543.033928000,  "scale": 591657527.591555 },
      { "level":  1, "resolution": 78271.5169639999,  "scale": 295828763.795777 },
      { "level":  2, "resolution": 39135.7584820001,  "scale": 147914381.897889 },
      { "level":  3, "resolution": 19567.8792409999,  "scale": 73957190.948944  },
      { "level":  4, "resolution": 9783.93962049996,  "scale": 36978595.474472  },
      { "level":  5, "resolution": 4891.96981024998,  "scale": 18489297.737236  },
      { "level":  6, "resolution": 2445.98490512499,  "scale": 9244648.868618   },
      { "level":  7, "resolution": 1222.99245256249,  "scale": 4622324.434309   },
      { "level":  8, "resolution": 611.496226281380,  "scale": 2311162.217155   },
      { "level":  9, "resolution": 305.748113140558,  "scale": 1155581.108577   },
      { "level": 10, "resolution": 152.874056570411,  "scale": 577790.554289    },
      { "level": 11, "resolution": 76.43702828507324, "scale": 288895.277144    },
      { "level": 12, "resolution": 38.21851414253662, "scale": 144447.638572    },
      { "level": 13, "resolution": 19.1092570712683,  "scale": 72223.819286     },
      { "level": 14, "resolution": 9.55462853563415,  "scale": 36111.909643     },
      { "level": 15, "resolution": 4.77731426794937,  "scale": 18055.954822     },
      { "level": 16, "resolution": 2.38865713397468,  "scale": 9027.977411      },
      { "level": 17, "resolution": 1.19432856685505,  "scale": 4513.988705      }
    ];

    var lll = [];
    
    if ( this.getTheLods() ) {
      Ext.Array.forEach(this.getTheLods(), function(item, index, theArray) {
        lll.push(lods[item]);
      });

      this.setTempLods(lll);

    } else {
      this.setTempLods(lods);
    }
  },

/**     */
  doSetPopup: function() {  // popup with resize, has default size
    //    console.log( 'popup: ', this.getThePopup() );

    var a = this.getThePopup();

    var popup = esri.dijit.Popup({
      titleInBody: false,
        highlight: true
    }, Ext.Element(document.createElement('div')) );
    
    if (a) {
    // console.log('popup w: ', a.width, ', h: ', a.height);      
      popup.resize( a.width, a.height); // w,h
    } else {
      popup.resize( 200, 150); // w,h
    }

    this.setThePopup(popup);
  },

  // "top-right","bottom-right","top-center","bottom-center","bottom-left","top-left"

/**     */  
  doSetInitExtent: function() {  // set initial map extend or a default 
    if ( this.getInitialExtent() ) {
      // new Extent(xmin,ymin,xmax,ymax,spatialReference)
      var a = this.getInitialExtent();
      this.setInitialExtent( new esri.geometry.Extent(a.xmin, a.ymin, a.xmax , a.ymax, new esri.SpatialReference({ wkid: 102100})) );
    } else {
//      console.log('no ie ');
      this.setInitialExtent( new esri.geometry.Extent(-24000000,2100000,-3200000,11000000, new esri.SpatialReference({ wkid: 102100})) );
    }
  },

/**     */
  showScalebar: function() {  // add 'dual' scalebar to map 
    var scalebar = new esri.dijit.Scalebar({

        map: this.getArcMap(),
        attachTo: this.getScaleBar(),
        scalebarUnit: "dual"
    });          
  },

/**     */
  showOverViewMap: function() {  // attach OverviewMap to map 
    var overviewMapDijit = new esri.dijit.OverviewMap({
        map:this.getArcMap(),
        visible: false,
        attachTo: this.getOverViewMap()
     //     color: '#CECECE'
    });
    overviewMapDijit.startup();
  },

/**     */
  showLegend: function() { // add legend to 'legendDiv' 
    //   console.log('showLegend lw.id: ', lw.getId())
    var legend = new esri.dijit.Legend({
        map:this.getArcMap()
    }, 'legendDiv');

    legend.startup();
    this.setLegend(legend);
  },

/**     */
  setupMyGL: function(map) {  // add a graphics layer to show extent poly 
    var myGL = new esri.layers.GraphicsLayer({
      id: 'myGL',
      opacity: 0.75
    });
    map.addLayer(myGL);
  }

});