/**
* @class USGS.common.HelpModel
* 
*/

Ext.define('USGS.common.HelpModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.help',
/** */
    data: {

/** */         name: 'Help!',
/** */     helpHTML: '<ul>' +
                       '<li>Use "+" and "-"  buttons to zoom in and out.</li>'  +
                       '<li>Place cursor on map and drag to change map position.</li>'  +
                       '<li>Click on Initial Extent button to go back to full map view.</li>'  +
                    '</ul>' 
    }
});
