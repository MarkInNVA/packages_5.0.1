/**
* @class USGS.common.ToolbarController
* 
*/


Ext.define('USGS.common.ToolbarController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'USGS.common.Help',
        'USGS.common.HelpController',
        'USGS.common.HelpModel'
        // 'USGS.common.Filter',
        // 'USGS.common.FilterController'
        // 'OpAtlas.view.help.Help',
        // 'OpAtlas.view.legend.Legend',
        // 'OpAtlas.view.filter.Filter',
        // 'Ext.layout.container.Fit'
    ],

    alias: 'controller.toolbar',
    /** */
    config : {

        /** Pointer to the AGC */
        theAGC: null,

        /** Pointer to the Map */
        theMap: null,

        /** Pointer to the Help */
        theHelp: null,

        /** Pointer to the filter */
        theFilter: null,

        /** Pointer to the legend */
        theLegendWindow: null
    },
    
    /** */
    init: function() {
        // console.log('ToolbarController, init ');

        Ext.setGlyphFontFamily('FontAwesome');        
        this.setTheAGC(Ext.ComponentQuery.query('agc')[0]);

        //  console.log('ToolbarController, theAGC: ', this.getTheAGC());
        this.getTheAGC().on("mapLoaded", this.onMapLoaded, this);

        this.setTheHelp( Ext.widget('help') );
        //        console.log('ToolbarController, showHelp - helpHTML: ', this.getHelpHTML() );

        //        this.setTheFilter( Ext.widget('filter') );

        // this.setTheLegendWindow( Ext.widget('legend') );
        // this.getTheLegendWindow().hide();
    },
    
    /** */
    onMapLoaded: function() {
         console.log('ToolbarController, onMapLoaded')
        this.setTheMap(this.getTheAGC().getArcMap());
        // console.log('ToolbarController, init theMap: ', this.getTheMap());
    },
    
    /** */
    goInitialExtent: function() {
        // console.log('ie: AGC: ', this.lookupReference('agc'));  
    
        this.getTheMap().setExtent( this.getTheAGC().getInitialExtent(), this.getTheAGC().getFitExtent() );
        this.fireEvent('gotoinitialextent', this.getTheMap() );
    },
    
    /** */
    setBasemap: function (e) {
        // console.log('setBasemap e: ', e.text);

        switch(e.text) {
            case 'Streets'  : this.getTheMap().setBasemap('streets');               break;
            case 'Topo'     : this.getTheMap().setBasemap('topo');                  break;
            case 'Satellite': this.getTheMap().setBasemap('satellite');             break;
            case 'Hybrid'   : this.getTheMap().setBasemap('hybrid');                break;
            case 'Ocean'    : this.getTheMap().setBasemap('oceans');                break;
            case 'Nat Geo'  : this.getTheMap().setBasemap('national-geographic');   break;
        }        
    },
    
    /** */
    showHelp: function() {
        // console.log('showHelp');

        if ( this.getTheHelp().isVisible() ) {
            this.getTheHelp().hide();            
        } else {
            this.getTheHelp().show();
        }
    },
    
    /** */
    showLegend: function() {
        console.log('showLegend');
        // if ( this.getTheLegendWindow().isVisible() ) {
        //     this.getTheLegendWindow().hide();            
        // } else {
        //     this.getTheLegendWindow().show();
        // }
    },
    
    /** */
    showFilter: function() {
        console.log('showFilter');
        // //        this.fireEvent('showingfilter');
                
        //         if ( this.getTheFilter().isVisible() ) {
        //             this.getTheFilter().hide();            
        //         } else {
        //             this.getTheFilter().show();
        //         }
    }

});