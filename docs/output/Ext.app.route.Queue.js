Ext.data.JsonP.Ext_app_route_Queue({"tagname":"class","name":"Ext.app.route.Queue","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Queue.js","href":"Queue.html#Ext-app-route-Queue"}],"author":[{"tagname":"author","name":"Mitchell Simoens","email":null}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"queue","tagname":"property","owner":"Ext.app.route.Queue","id":"property-queue","meta":{"private":true}},{"name":"token","tagname":"property","owner":"Ext.app.route.Queue","id":"property-token","meta":{}},{"name":"constructor","tagname":"method","owner":"Ext.app.route.Queue","id":"method-constructor","meta":{}},{"name":"clearQueue","tagname":"method","owner":"Ext.app.route.Queue","id":"method-clearQueue","meta":{}},{"name":"onActionExecute","tagname":"method","owner":"Ext.app.route.Queue","id":"method-onActionExecute","meta":{}},{"name":"queueAction","tagname":"method","owner":"Ext.app.route.Queue","id":"method-queueAction","meta":{}},{"name":"runQueue","tagname":"method","owner":"Ext.app.route.Queue","id":"method-runQueue","meta":{}}],"code_type":"ext_define","id":"class-Ext.app.route.Queue","short_doc":"A Queue is a queue of Ext.app.route.Route instances managed by the\nExt.app.route.Router singleton if queueActions is ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.app.route.Queue</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Queue.html#Ext-app-route-Queue' target='_blank'>Queue.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>A Queue is a queue of <a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a> instances managed by the\n<a href=\"#!/api/Ext.app.route.Router\" rel=\"Ext.app.route.Router\" class=\"docClass\">Ext.app.route.Router</a> singleton if queueActions is set to <code>true</code>.</p>\n\n<p>A developer shouldn't need to use this class as <a href=\"#!/api/Ext.app.route.Router\" rel=\"Ext.app.route.Router\" class=\"docClass\">Ext.app.route.Router</a> should\nmanage this class. When a <a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a> is executed,it will automatically\nkeep running the queue until the queue is empty.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-queue' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Queue'>Ext.app.route.Queue</span><br/><a href='source/Queue.html#Ext-app-route-Queue-property-queue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Queue-property-queue' class='name expandable'>queue</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>The Ext.util.MixedCollection that will hold the queued\n<a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a> and recognized arguments.</p>\n</div><div class='long'><p>The Ext.util.MixedCollection that will hold the queued\n<a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a> and recognized arguments.</p>\n</div></div></div><div id='property-token' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Queue'>Ext.app.route.Queue</span><br/><a href='source/Queue.html#Ext-app-route-Queue-property-token' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Queue-property-token' class='name expandable'>token</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The token from the <a href=\"#!/api/Ext.app.route.Router\" rel=\"Ext.app.route.Router\" class=\"docClass\">Ext.app.route.Router</a> that is being enacted on.</p>\n</div><div class='long'><p>The token from the <a href=\"#!/api/Ext.app.route.Router\" rel=\"Ext.app.route.Router\" class=\"docClass\">Ext.app.route.Router</a> that is being enacted on.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Queue'>Ext.app.route.Queue</span><br/><a href='source/Queue.html#Ext-app-route-Queue-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.app.route.Queue-method-constructor' class='name expandable'>Ext.app.route.Queue</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.app.route.Queue\" rel=\"Ext.app.route.Queue\" class=\"docClass\">Ext.app.route.Queue</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.app.route.Queue\" rel=\"Ext.app.route.Queue\" class=\"docClass\">Ext.app.route.Queue</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clearQueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Queue'>Ext.app.route.Queue</span><br/><a href='source/Queue.html#Ext-app-route-Queue-method-clearQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Queue-method-clearQueue' class='name expandable'>clearQueue</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clear all queued actions. ...</div><div class='long'><p>Clear all queued actions.</p>\n</div></div></div><div id='method-onActionExecute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Queue'>Ext.app.route.Queue</span><br/><a href='source/Queue.html#Ext-app-route-Queue-method-onActionExecute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Queue-method-onActionExecute' class='name expandable'>onActionExecute</a>( <span class='pre'>clearQueue</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handle the execution of a queued action and optionally clear all queued actions. ...</div><div class='long'><p>Handle the execution of a queued action and optionally clear all queued actions.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clearQueue</span> : Boolean<div class='sub-desc'><p>If <code>true</code> was returned, will clear all queued actions.</p>\n</div></li></ul></div></div></div><div id='method-queueAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Queue'>Ext.app.route.Queue</span><br/><a href='source/Queue.html#Ext-app-route-Queue-method-queueAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Queue-method-queueAction' class='name expandable'>queueAction</a>( <span class='pre'>route, args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a Ext.app.route.Route to the queue. ...</div><div class='long'><p>Add a <a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a> to the queue.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>route</span> : <a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a><div class='sub-desc'><p>The route to add to the queue.</p>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>The arguments recognized by the {<a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a>}.</p>\n</div></li></ul></div></div></div><div id='method-runQueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Queue'>Ext.app.route.Queue</span><br/><a href='source/Queue.html#Ext-app-route-Queue-method-runQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Queue-method-runQueue' class='name expandable'>runQueue</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Run the queue one by one. ...</div><div class='long'><p>Run the queue one by one.</p>\n</div></div></div></div></div></div></div>","meta":{"private":true}});