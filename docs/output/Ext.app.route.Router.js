Ext.data.JsonP.Ext_app_route_Router({"tagname":"class","name":"Ext.app.route.Router","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true,"singleton":true},"files":[{"filename":"Router.js","href":"Router.html#Ext-app-route-Router"}],"author":[{"tagname":"author","name":"Mitchell Simoens","email":null}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["Ext.app.route.Queue","Ext.app.route.Route","Ext.util.History"],"uses":[],"members":[{"name":"multipleToken","tagname":"property","owner":"Ext.app.route.Router","id":"property-multipleToken","meta":{}},{"name":"queueRoutes","tagname":"property","owner":"Ext.app.route.Router","id":"property-queueRoutes","meta":{}},{"name":"routes","tagname":"property","owner":"Ext.app.route.Router","id":"property-routes","meta":{}},{"name":"clear","tagname":"method","owner":"Ext.app.route.Router","id":"method-clear","meta":{}},{"name":"connect","tagname":"method","owner":"Ext.app.route.Router","id":"method-connect","meta":{}},{"name":"disconnectAll","tagname":"method","owner":"Ext.app.route.Router","id":"method-disconnectAll","meta":{}},{"name":"draw","tagname":"method","owner":"Ext.app.route.Router","id":"method-draw","meta":{}},{"name":"onStateChange","tagname":"method","owner":"Ext.app.route.Router","id":"method-onStateChange","meta":{"private":true}},{"name":"recognize","tagname":"method","owner":"Ext.app.route.Router","id":"method-recognize","meta":{}}],"code_type":"ext_define","singleton":true,"id":"class-Ext.app.route.Router","short_doc":"The Router is an ordered set of Ext.app.route.Route definitions that decode a\nurl into a controller function to execute. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.app.route.Router</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.app.route.Queue' rel='Ext.app.route.Queue' class='docClass'>Ext.app.route.Queue</a></div><div class='dependency'><a href='#!/api/Ext.app.route.Route' rel='Ext.app.route.Route' class='docClass'>Ext.app.route.Route</a></div><div class='dependency'><a href='#!/api/Ext.util.History' rel='Ext.util.History' class='docClass'>Ext.util.History</a></div><h4>Files</h4><div class='dependency'><a href='source/Router.html#Ext-app-route-Router' target='_blank'>Router.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>The Router is an ordered set of <a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a> definitions that decode a\nurl into a controller function to execute. Each <code>route</code> defines a type of url to match,\nalong with the controller function to call if it is matched. The Router uses the\n<a href=\"#!/api/Ext.util.History\" rel=\"Ext.util.History\" class=\"docClass\">Ext.util.History</a> singleton to find out when the browser's url has changed.</p>\n\n<p>Routes are almost always defined inside a <a href=\"#!/api/Ext.app.Controller\" rel=\"Ext.app.Controller\" class=\"docClass\">Controller</a>, as\nopposed to on the Router itself. End-developers should not usually need to interact\ndirectly with the Router as the Controllers manage everything automatically. See the\n<a href=\"#!/api/Ext.app.Controller\" rel=\"Ext.app.Controller\" class=\"docClass\">Controller documentation</a> for more information on specifying\nroutes.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-multipleToken' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Router'>Ext.app.route.Router</span><br/><a href='source/Router.html#Ext-app-route-Router-property-multipleToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Router-property-multipleToken' class='name expandable'>multipleToken</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The token to split the routes to support multiple routes. ...</div><div class='long'><p>The token to split the routes to support multiple routes.</p>\n<p>Defaults to: <code>|</code></p></div></div></div><div id='property-queueRoutes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Router'>Ext.app.route.Router</span><br/><a href='source/Router.html#Ext-app-route-Router-property-queueRoutes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Router-property-queueRoutes' class='name expandable'>queueRoutes</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True to queue routes to be executed one after the\nother, false to execute routes immediately. ...</div><div class='long'><p>True to queue routes to be executed one after the\nother, false to execute routes immediately.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-routes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Router'>Ext.app.route.Router</span><br/><a href='source/Router.html#Ext-app-route-Router-property-routes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Router-property-routes' class='name expandable'>routes</a> : <a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The connected <a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a>\ninstances.</p>\n</div><div class='long'><p>The connected <a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a>\ninstances.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Router'>Ext.app.route.Router</span><br/><a href='source/Router.html#Ext-app-route-Router-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Router-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clear all the recognized routes. ...</div><div class='long'><p>Clear all the recognized routes.</p>\n</div></div></div><div id='method-connect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Router'>Ext.app.route.Router</span><br/><a href='source/Router.html#Ext-app-route-Router-method-connect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Router-method-connect' class='name expandable'>connect</a>( <span class='pre'>url, action, controller</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Create the Ext.app.route.Route instance and connect to the\nExt.app.route.Router singleton. ...</div><div class='long'><p>Create the <a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a> instance and connect to the\n<a href=\"#!/api/Ext.app.route.Router\" rel=\"Ext.app.route.Router\" class=\"docClass\">Ext.app.route.Router</a> singleton.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The url to recognize.</p>\n</div></li><li><span class='pre'>action</span> : String<div class='sub-desc'><p>The action on the controller to execute when the url is\nmatched.</p>\n</div></li><li><span class='pre'>controller</span> : <a href=\"#!/api/Ext.app.Controller\" rel=\"Ext.app.Controller\" class=\"docClass\">Ext.app.Controller</a><div class='sub-desc'><p>The controller associated with the\n<a href=\"#!/api/Ext.app.route.Route\" rel=\"Ext.app.route.Route\" class=\"docClass\">Ext.app.route.Route</a></p>\n</div></li></ul></div></div></div><div id='method-disconnectAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Router'>Ext.app.route.Router</span><br/><a href='source/Router.html#Ext-app-route-Router-method-disconnectAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Router-method-disconnectAll' class='name expandable'>disconnectAll</a>( <span class='pre'>controller</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disconnects all routes for a controller. ...</div><div class='long'><p>Disconnects all routes for a controller.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>controller</span> : <a href=\"#!/api/Ext.app.Controller\" rel=\"Ext.app.Controller\" class=\"docClass\">Ext.app.Controller</a><div class='sub-desc'><p>The controller to disconnect routes from.</p>\n</div></li></ul></div></div></div><div id='method-draw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Router'>Ext.app.route.Router</span><br/><a href='source/Router.html#Ext-app-route-Router-method-draw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Router-method-draw' class='name expandable'>draw</a>( <span class='pre'>fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Convenience method which just calls the supplied function with the\nExt.app.route.Router singleton. ...</div><div class='long'><p>Convenience method which just calls the supplied function with the\n<a href=\"#!/api/Ext.app.route.Router\" rel=\"Ext.app.route.Router\" class=\"docClass\">Ext.app.route.Router</a> singleton. Example usage:</p>\n\n<pre><code><a href=\"#!/api/Ext.app.route.Router-method-draw\" rel=\"Ext.app.route.Router-method-draw\" class=\"docClass\">Ext.app.route.Router.draw</a>(function(map) {\n    map.connect('activate/:token', {controller: 'users', action: 'activate'});\n    map.connect('home',            {controller: 'index', action: 'home'});\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The function to call</p>\n</div></li></ul></div></div></div><div id='method-onStateChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Router'>Ext.app.route.Router</span><br/><a href='source/Router.html#Ext-app-route-Router-method-onStateChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Router-method-onStateChange' class='name expandable'>onStateChange</a>( <span class='pre'>token</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>React to a token ...</div><div class='long'><p>React to a token</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>token</span> : String<div class='sub-desc'><p>The token to react to.</p>\n</div></li></ul></div></div></div><div id='method-recognize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.route.Router'>Ext.app.route.Router</span><br/><a href='source/Router.html#Ext-app-route-Router-method-recognize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.route.Router-method-recognize' class='name expandable'>recognize</a>( <span class='pre'>url</span> ) : Object/Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Recognizes a url string connected to the Router, return the controller/action pair\nplus any additional config associa...</div><div class='long'><p>Recognizes a url string connected to the Router, return the controller/action pair\nplus any additional config associated with it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The url to recognize.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object/Boolean</span><div class='sub-desc'><p>If the url was recognized, the controller and action to\ncall, else <code>false</code>.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});