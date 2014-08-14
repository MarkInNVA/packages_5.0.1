/* jshint ignore:start */
startTest(function(t) {
/* jshint ignore:end */    
	var sp5 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'; 

    t.diag("Do we have the basic's:");
	    t.ok(Ext,  sp5 + 'Ext JS is here');
	    t.ok(esri, sp5 + 'ESRI is here');

    t.diag("Do we have the USGS.common Package:");
	    t.ok(USGS.common, sp5 + 'Package USGS common is here');
	    t.ok(USGS.common.AGC, sp5 + sp5 + 'AGC is here');

    t.diag("What versions do we have: ");
	    t.ok(Ext,  sp5 + " ExtJS: " + Ext.versions.ext.version );
	    t.ok(Ext,  sp5 + " core: "  + Ext.versions.core.version );
	    t.ok(Ext,  sp5 + " USGS.common: " + Ext.versions.common.version );


    t.diag("Do we have AGCTest:");
    t.ok(AGCTest, sp5 + 'AGCTest');

    t.diag(sp5 + "Do we have application controller(s):");
//    t.ok(AGCTest.controller.Root, sp5 + 'Root');

    // t.diag(sp5 + "Do we have application model(s):");
    // t.ok(AGCTest.model.TableModel, sp5 + 'TableModel');

    // t.diag(sp5 + "Do we have application stores(s):");
    // t.ok(AGCTest.store.TableStore, sp5 + 'TableStore');

    t.diag(sp5 + "Do we have the view(s):");

    // t.ok(AGCTest.view.filter.FormView,	        sp5 + 'filter.FormView');
    // t.ok(AGCTest.view.filter.FormController, 	sp5 + sp5 + sp5 + 'Controller');
    // t.ok(AGCTest.view.filter.FormModel,     		sp5 + sp5 + sp5 + 'Model');

    t.ok(AGCTest.view.main.Main, 				sp5 + 'main.Main');
    t.ok(AGCTest.view.main.MainController, 		sp5 + sp5 + sp5 + 'Controller');
    t.ok(AGCTest.view.main.MainModel,      		sp5 + sp5 + sp5 + 'Model');

    // t.ok(AGCTest.view.map.MapView, 				sp5 + 'map.MapView');
    // t.ok(AGCTest.view.map.MapViewController, 	sp5 + sp5 + sp5 + 'Controller');
    // t.ok(AGCTest.view.map.MapViewModel,      	sp5 + sp5 + sp5 + 'Model');

    // t.ok(AGCTest.view.table.TableView, 			sp5 + 'table.TableView');
    // t.ok(AGCTest.view.table.TableController, 	sp5 + sp5 + sp5 + 'Controller');
    // t.ok(AGCTest.view.table.TableModel,          sp5 + sp5 + sp5 + 'Model');

    t.done();   // Optional, marks the correct exit point from the test
/* jshint ignore:start */
});
/* jshint ignore:end */
