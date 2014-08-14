/**
* @class USGS.common.HelpController
* Help window, shows default help, override with HelpModel.data
* 
*/

Ext.define('USGS.common.HelpController', {
    extend: 'Ext.app.ViewController',
/** */
    requires: [
        'Ext.layout.container.Fit'
    ],

    alias: 'controller.help',

/** */
    config:{
        theHelp: null // 'https://sites.google.com/a/usgs.gov/erp-datamanagement/internal-data-resources/well-logs/well-log-web-browser?pli=1'
    },

/** */
    init: function() {
        if ( this.getTheHelp() ) {
            this.getViewModel().set('helpHTML', this.getTheHelp() );
        }
 //       this.setTheAGC( Ext.ComponentQuery.query('agc')[0] );

//        console.log('FilterController, init'); // - agc: ', this.getTheAGC() );
    },

/** */
    formClose: function() {
//        console.log('FilterController, formClose');
        // this.getTheAGC().getThePopup().hide();
        this.getView().close();
    }

});