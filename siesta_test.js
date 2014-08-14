var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title       : 'AGC Test Suite',
    
 //   waitForAppReady :true
    
});

Harness.start(
    {
        // group               : 'Sanity',
        // preload             : [],
        group       : 'Sencha Ext JS examples',
        
        testClass   : Siesta.Test.ExtJS,
        preload : [

        ],
        waitForAppReady :true,
        autoCheckGlobals : true,
        expectedGlobals  : 
        [
            'USGS', 'AGCTest', 
            'define', 'require', 'dojo', 'dijit', 'dojox', 'esri', 'esriConfig', 
            // 'Ext',   
              'dojo_request_script_callbacks', 'dojo_request_iframe_onload',
            'resize' // not to sure on resize???
        ],
//        'id',
            // 'OP3', 'key', 'controller', ,
            // , 'resize', 'path', 'baseUrl'],
        items               : [
            {
                hostPageUrl         : '../apps/agctest/index.html',
                url                 : 'tests/010_sanity.t.js'
            }
//'tests/010-basics/010_sanity.t.js',
//'tests/010-basics/030_controllers.t.js' 
            // 'tests/010-basics/015_agc.t.js',
            

        ]
    }
    // {
    //     group               : 'Controllers',
    //     autoCheckGlobals : false,
    //     preload             : [],
    //     items: 
    //     [
    //         {
    //             hostPageUrl         : 'index.html',
    //             url                 : 'tests/010-basics/030_controllers.t.js'               
    //         }
    //     ]
    // },

 //   ---------
       // {
    //     group               : 'Application',
        
    //     // need to set the `preload` to empty array - to avoid the double loading of dependencies
    //     preload             : [],
        
    //     items : [
    //         {
    //             hostPageUrl         : 'app.html',
    //             url                 : 'tests/014_app.t.js'
    //         }
    //     ]
    // }
//-------------
//     ,
//     {
//         group               : 'Stores',
// //        preload             : [],
//         autoCheckGlobals : false,
//         items               : [
//              'tests/010-basics/020_stores.t.js',
//        ]
//     },
//     {
//         group               : 'Controllers',
//         autoCheckGlobals : false,
// //        preload             : [],
//         items               : [
//             'tests/010-basics/030_controllers.t.js',
//         ]
//     },
//     {
//         group               : 'Models',
//         autoCheckGlobals : false,
// //        preload             : [],
//         items               : [
//             'tests/010-basics/040_models.t.js',
//         ]
//     },
//     {
//         group               : 'Views',
//         autoCheckGlobals : false,
// //        preload             : [],
//         items               : [
//             'tests/010-basics/060_views.main.t.js',
//             'tests/010-basics/070_views.map.t.js',
//             // 'tests/010-basics/080_views.table.t.js',
//             'tests/010-basics/090_views.filter.t.js',
//             // 'tests/010-basics/100_views.form.t.js',
//             'tests/010-basics/110_views.help.t.js',
//             'tests/010-basics/120_views.legend.t.js'
//         ]
//     }

);
