/**
* @class USGS.common.Toolbar
* Toolbar with Initial Extent, Basemap, Legend, Help.
* 
*/

Ext.define('USGS.common.Toolbar', {

  extend: 'Ext.toolbar.Toolbar',

  alias: 'widget.maptoolbar',

  controller:  'toolbar' ,

  /** */
  items: 
  [
      {   
        xtype: 'tbspacer', width: 20  
      },
      {
          text: 'Initial Extent',
          glyph:'xf015@FontAwesome', 
          handler: 'goInitialExtent'
      },
      {
          xtype: 'splitbutton',
          text : 'Basemap',
          glyph:'xf0ac@FontAwesome',
          menu:{ //new Ext.menu.Menu({
              items: 
              [
                  // these will render as dropdown menu items when the arrow is clicked:
                  {xtype: 'menuseparator'},
                  {text: 'Topo',      icon: 'resources/common/images/topo.jpg', handler: 'setBasemap' },
                  {xtype: 'menuseparator'},
                  {text: 'Streets',   icon: 'resources/common/images/streets.jpg', handler: 'setBasemap' },
                  {xtype: 'menuseparator'},
                  {text: 'Satellite', icon: 'resources/common/images/satellite.jpg', handler: 'setBasemap' },
                  {xtype: 'menuseparator'},
                  {text: 'Hybrid',    icon: 'resources/common/images/hybrid.jpg', handler: 'setBasemap' },
                  {xtype: 'menuseparator'},
                  {text: 'Ocean',     icon: 'resources/common/images/oceans.jpg', handler: 'setBasemap' },
                  {xtype: 'menuseparator'},
                  {text: 'Nat Geo',   icon: 'resources/common/images/nat-geo.jpg', handler: 'setBasemap' }
              ]
          }
      },
      // {
      //   xtype: 'button',
      //   text: 'Filter',
      //   glyph:'xf0b0@FontAwesome',
      //   handler: 'showFilter'
      // },      
      {
        xtype: 'button',  
        text: 'Legend',
        glyph:'xf03a@FontAwesome',
        handler: 'showLegend'
      },      
      { 
        xtype: 'tbfill' 
      },
      {
        xtype: 'button',
        text: 'Help',
        glyph:'xf129@FontAwesome',
        handler: 'showHelp'
      },
      {   
        xtype: 'tbspacer', width: 20  
      }           
  ]
});
