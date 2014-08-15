/**
* @class USGS.common.Help
* Help window, shows default help, override with HTML markup
* 
*/

Ext.define('USGS.common.Help', {
    extend: 'Ext.window.Window',
    alias: 'widget.help',
/** */
    controller: 'help',

/** */
    viewModel: {
        type: 'help'
    },

/** */
    bind: {
        title: '{name}'
    },

/** */
    itemId : 'help',

/** */
    reference: 'help',
/** */
    title : 'Help',
/** */ 
    glyph : 0xf129,
/** */
    height: 225,
/** */
    width : 390,
//    bodyPadding: 5,
/** */
    layout: 'fit',
/** */
    closeAction: 'hide',

/** */
    items: 
    {
        xtype: 'component',
        autoScroll: true,
  //      bodyPadding: 5,
        //  autoEl : {
        //     tag : "iframe",
        //     src : "https://sites.google.com/a/usgs.gov/erp-datamanagement/internal-data-resources/well-logs/well-log-web-browser?pli=1"
        // }
        bind: {
            html: '{helpHTML}'
        }
    }
});
