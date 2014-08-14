StartTest(function(t) {  // from siesta-2.0.8 examples 020-extjs-general 020_ext-custom-combo.t.js 

    function setup() {
        t.diag("Sanity");

        t.ok(Ext, 'ExtJS is here');
        t.ok(Ext.Window, '.. indeed');
        t.ok(USGS, 'USGS is here');
        t.ok(USGS.common, 'USGS.common is here');
        t.ok(USGS.common.AGC, 'USGS.common.AGC is here');
        t.ok(esri.dijit.Scalebar,'Have a scalebar');
        t.ok(esri.dijit.OverviewMap,'Have an OverviewMap');

        t.diag("Deeper");

        var clbck = function(a){
            console.log('call back: ', a);
        };

        // var agc = Ext.getCmp('agc');
        var map = Ext.ComponentQuery.query('agc#agc')[0];
        var m = map.getArcMap();
        // console.log('agc: ', agc);
        console.log('map: ', map);
        console.log('m: ', m);            
 //       t.waitForCompositeQuery( '#agc =>  esriScalebar',  clbck, this, 6000 )
    // t.describe("My AGC", function (t) {
        // t.it("Should allow user to log in", function (t) {
        //     t.expect(MyApp.LoginManager.isLoggedIn()).toBe(false)

        //     MyApp.LoginManager.login()

        //     t.expect(MyApp.LoginManager.isLoggedIn()).toBe(true)
        // })

        // t.describe("Report engine of my system", function (t) {
        //     t.it("Should allow generate reports in PDF", function (t) {
        //         ...
        //     })
        // })
    // })


        // esriScalebar
//        t.waitForEvent(map, 'maploaded', clbck);


        // t.waitForEvent(USGS.common.AGC, 'maploaded', function () {
        //     t.ok(true, 'Map loaded!');
        //     t.done();
        // });
//{ waitFor: 'Event', args: [Ext.Ajax, 'requestcomplete'], timeout: 60000 },
//    t.waitForEvent(USGS.common.AGC, 'maploaded');

          // me.fireEvent('maploaded', map);


        // t.requireOk(
        // [
        //  'USGS.common.AGC', 
        //  ])
 //       , 
        
        // var panel = Ext.create('Ext.panel.Panel', {
        //     renderTo: Ext.getBody(),
        //     title: 'AGC Test',
        //     width: 600,
        //     bodyPadding: 10,
        //     layout: 'anchor',

        //     items: [{
        //         xtype: 'agc',
        //         showMask: false,            

        //     }]
        // });
    }

    setup();

   //  t.diag("Testing AGC.");

   //  t.chain(
   //      {
   //          waitFor : 'xType',
   //          args : 'agc'
   //      },
   //      {
   //          waitFor : 'ComponentVisible',
   //          args : 'agc'
   //      }
        
   //      // { waitFor : 'selector', args : ['.some_class'] },   // calls waitForSelector which waits until 
   //                                                      // the some_class CSS class exists in the DOM

   // );

});