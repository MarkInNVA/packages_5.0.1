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
        expectedGlobals  :  [
            'USGS', 'AGCTest', 
            'define', 'require', 'dojo', 'dijit', 'dojox', 'esri', 'esriConfig', 
            // 'Ext',   
              'dojo_request_script_callbacks', 'dojo_request_iframe_onload',
            'resize' // not to sure on resize???
        ],

        items  : [  {
                hostPageUrl         : '../apps/agctest/index.html',
                url                 : 'tests/010_sanity.t.js'
            }]
    }

);
