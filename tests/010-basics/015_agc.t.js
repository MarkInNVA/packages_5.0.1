StartTest(function(t) {
    t.diag("Do we have the basic's of op3");
//--
    t.it('Where is the AGC', function(t) {
   	console.log('here I am: ',this);
	    t.chain(
			{ waitForCQ : 'agc', desc: 'looking for agc' },

			{ waitForCQNotFound : 'agc', desc: 'agc not found' }
	    );

    });

        // t.chain(
        //     { waitForCQ : 'window[title=Login - Ticket App]' },

        //     { click : '>> textfield[inputType=password]' },

        //     { type : 'foo', target : '>> textfield[inputType=password]' },

        //     { click : '>> button[text=Login]' },

        //     { waitForCQNotFound : 'window[title=Login - Ticket App]', desc: 'Login window should be destroyed after login' }
        // )
   

// Ext.Loader.setConfig({
// 	enabled: true,
// 	paths: {
// 		'Ext.ux' : 'app/ux'  
// 	}
// });

//     requires: ['Ext.ux.AGC' ] ,

    // t.requireOk('OP3.model.User', function() {
    //     var mod = Ext.create('AM.model.User', {
    //         firstname : 'Slack', 
    //         lastname : 'Jocum', 
    //         email : 'some@email.net' 
    //     });
        
    //     t.is(mod.getFullName(), 'Slack Jocum', 'getFullName works ok');
    //     t.is(mod.get('email'), 'some@email.net', 'Could read email');
    // });

//	t.done();   // Optional, marks the correct exit point from the test

});

//----
// StartTest(function(t) {

//     t.requireOk('AM.model.User', function() {
//         var mod = Ext.create('AM.model.User', {
//             firstname : 'Slack', 
//             lastname : 'Jocum', 
//             email : 'some@email.net' 
//         });
        
//         t.is(mod.getFullName(), 'Slack Jocum', 'getFullName works ok');
//         t.is(mod.get('email'), 'some@email.net', 'Could read email');
//     });
// });

//     t.ok(Ext.ux.AGC, sp5 + 'AGC is here');


//        this.setTheAGC( Ext.ComponentQuery.query('agc')[0] );
//        this.setTheMap(this.getTheAGC().getArcMap() );

// ----
