Ext.data.JsonP.Ext_app_domain_Controller({"tagname":"class","name":"Ext.app.domain.Controller","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true,"singleton":true},"files":[{"filename":"Controller.js","href":"Controller2.html#Ext-app-domain-Controller"}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.app.EventDomain","mixins":[],"requires":["Ext.app.Controller"],"uses":[],"members":[{"name":"idProperty","tagname":"cfg","owner":"Ext.app.EventDomain","id":"cfg-idProperty","meta":{}},{"name":"idMatchRe","tagname":"property","owner":"Ext.app.domain.Controller","id":"property-idMatchRe","meta":{"private":true}},{"name":"isInstance","tagname":"property","owner":"Ext.app.EventDomain","id":"property-isInstance","meta":{"private":true}},{"name":"prefix","tagname":"property","owner":"Ext.app.domain.Controller","id":"property-prefix","meta":{"private":true}},{"name":"type","tagname":"property","owner":"Ext.app.domain.Controller","id":"property-type","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Ext.app.domain.Controller","id":"method-constructor","meta":{}},{"name":"destroy","tagname":"method","owner":"Ext.app.EventDomain","id":"method-destroy","meta":{"private":true}},{"name":"dispatch","tagname":"method","owner":"Ext.app.EventDomain","id":"method-dispatch","meta":{"private":true}},{"name":"listen","tagname":"method","owner":"Ext.app.EventDomain","id":"method-listen","meta":{"private":true}},{"name":"match","tagname":"method","owner":"Ext.app.domain.Controller","id":"method-match","meta":{"protected":true}},{"name":"monitor","tagname":"method","owner":"Ext.app.EventDomain","id":"method-monitor","meta":{"protected":true}},{"name":"unlisten","tagname":"method","owner":"Ext.app.EventDomain","id":"method-unlisten","meta":{"private":true}}],"code_type":"ext_define","singleton":true,"id":"class-Ext.app.domain.Controller","short_doc":"This class implements the controller event domain. ...","component":false,"superclasses":["Ext.Base","Ext.app.EventDomain"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.app.EventDomain' rel='Ext.app.EventDomain' class='docClass'>Ext.app.EventDomain</a><div class='subclass '><strong>Ext.app.domain.Controller</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.app.Controller' rel='Ext.app.Controller' class='docClass'>Ext.app.Controller</a></div><h4>Files</h4><div class='dependency'><a href='source/Controller2.html#Ext-app-domain-Controller' target='_blank'>Controller.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>This class implements the controller event domain. All classes extending from\n<a href=\"#!/api/Ext.app.Controller\" rel=\"Ext.app.Controller\" class=\"docClass\">Ext.app.Controller</a> are included in this domain. The selectors are simply id,\nalias, or the wildcard \"*\" to match any controller.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-idProperty' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.app.EventDomain' rel='Ext.app.EventDomain' class='defined-in docClass'>Ext.app.EventDomain</a><br/><a href='source/EventDomain.html#Ext-app-EventDomain-cfg-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.EventDomain-cfg-idProperty' class='name expandable'>idProperty</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Name of the identifier property for this event domain.</p>\n</div><div class='long'><p>Name of the identifier property for this event domain.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-idMatchRe' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.domain.Controller'>Ext.app.domain.Controller</span><br/><a href='source/Controller2.html#Ext-app-domain-Controller-property-idMatchRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.domain.Controller-property-idMatchRe' class='name expandable'>idMatchRe</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/^\\#/</code></p></div></div></div><div id='property-isInstance' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.app.EventDomain' rel='Ext.app.EventDomain' class='defined-in docClass'>Ext.app.EventDomain</a><br/><a href='source/EventDomain.html#Ext-app-EventDomain-property-isInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.EventDomain-property-isInstance' class='name expandable'>isInstance</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-prefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.domain.Controller'>Ext.app.domain.Controller</span><br/><a href='source/Controller2.html#Ext-app-domain-Controller-property-prefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.domain.Controller-property-prefix' class='name expandable'>prefix</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;controller.&#39;</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.domain.Controller'>Ext.app.domain.Controller</span><br/><a href='source/Controller2.html#Ext-app-domain-Controller-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.domain.Controller-property-type' class='name expandable'>type</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;controller&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.domain.Controller'>Ext.app.domain.Controller</span><br/><a href='source/Controller2.html#Ext-app-domain-Controller-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.app.domain.Controller-method-constructor' class='name expandable'>Ext.app.domain.Controller</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.app.domain.Controller\" rel=\"Ext.app.domain.Controller\" class=\"docClass\">Ext.app.domain.Controller</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.app.domain.Controller\" rel=\"Ext.app.domain.Controller\" class=\"docClass\">Ext.app.domain.Controller</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.app.EventDomain-method-constructor\" rel=\"Ext.app.EventDomain-method-constructor\" class=\"docClass\">Ext.app.EventDomain.constructor</a></p></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.app.EventDomain' rel='Ext.app.EventDomain' class='defined-in docClass'>Ext.app.EventDomain</a><br/><a href='source/EventDomain.html#Ext-app-EventDomain-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.EventDomain-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-dispatch' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.app.EventDomain' rel='Ext.app.EventDomain' class='defined-in docClass'>Ext.app.EventDomain</a><br/><a href='source/EventDomain.html#Ext-app-EventDomain-method-dispatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.EventDomain-method-dispatch' class='name expandable'>dispatch</a>( <span class='pre'>target, ev, args</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method dispatches an event fired by an object monitored by this domain. ...</div><div class='long'><p>This method dispatches an event fired by an object monitored by this domain. This\nis not called directly but is called by interceptors injected by the <code>monitor</code> method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'><p>The firer of the event.</p>\n</div></li><li><span class='pre'>ev</span> : String<div class='sub-desc'><p>The event being fired.</p>\n</div></li><li><span class='pre'>args</span> : Array<div class='sub-desc'><p>The arguments for the event. This array <strong>does not</strong> include the event name.\nThat has already been sliced off because this class intercepts the fireEventArgs\nmethod which takes an array as the event's argument list.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>false</code> if any listener returned <code>false</code>, otherwise <code>true</code>.</p>\n</div></li></ul></div></div></div><div id='method-listen' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.app.EventDomain' rel='Ext.app.EventDomain' class='defined-in docClass'>Ext.app.EventDomain</a><br/><a href='source/EventDomain.html#Ext-app-EventDomain-method-listen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.EventDomain-method-listen' class='name expandable'>listen</a>( <span class='pre'>selectors</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method adds listeners on behalf of a controller. ...</div><div class='long'><p>This method adds listeners on behalf of a controller. This method is passed an\nobject that is keyed by selectors. The value of these is also an object but now\nkeyed by event name. For example:</p>\n\n<pre><code> domain.listen({\n     'some[selector]': {\n         click: function() { ... }\n     },\n\n     'other selector': {\n         change: {\n             fn: function() { ... },\n             delay: 10\n         }\n     }\n\n }, controller);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selectors</span> : Object<div class='sub-desc'><p>Config object containing selectors and listeners.</p>\n</div></li></ul></div></div></div><div id='method-match' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.app.domain.Controller'>Ext.app.domain.Controller</span><br/><a href='source/Controller2.html#Ext-app-domain-Controller-method-match' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.domain.Controller-method-match' class='name expandable'>match</a>( <span class='pre'>target, selector</span> ) : Boolean<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>This method matches the firer of the event (the target) to the given selector. ...</div><div class='long'><p>This method matches the firer of the event (the <code>target</code>) to the given <code>selector</code>.\nDefault matching is very simple: a match is true when selector equals target's\n<a href=\"#!/api/Ext.app.domain.Controller-cfg-idProperty\" rel=\"Ext.app.domain.Controller-cfg-idProperty\" class=\"docClass\">idProperty</a>, or when selector is '*' wildcard to match any\ntarget.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>selector</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the <code>target</code> matches the <code>selector</code>.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.app.EventDomain-method-match\" rel=\"Ext.app.EventDomain-method-match\" class=\"docClass\">Ext.app.EventDomain.match</a></p></div></div></div><div id='method-monitor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.app.EventDomain' rel='Ext.app.EventDomain' class='defined-in docClass'>Ext.app.EventDomain</a><br/><a href='source/EventDomain.html#Ext-app-EventDomain-method-monitor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.EventDomain-method-monitor' class='name expandable'>monitor</a>( <span class='pre'>observable</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>This method is called by the derived class to monitor fireEvent calls. ...</div><div class='long'><p>This method is called by the derived class to monitor <code>fireEvent</code> calls. Any call\nto <code>fireEvent</code> on the target Observable will be intercepted and dispatched to any\nlistening Controllers. Assuming the original <code>fireEvent</code> method does not return\n<code>false</code>, the event is passed to the <code>dispatch</code> method of this object.</p>\n\n<p>This is typically called in the <code>constructor</code> of derived classes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>observable</span> : Ext.Class<div class='sub-desc'><p>The Observable to monitor for events.</p>\n</div></li></ul></div></div></div><div id='method-unlisten' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.app.EventDomain' rel='Ext.app.EventDomain' class='defined-in docClass'>Ext.app.EventDomain</a><br/><a href='source/EventDomain.html#Ext-app-EventDomain-method-unlisten' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.app.EventDomain-method-unlisten' class='name expandable'>unlisten</a>( <span class='pre'>controllerId</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Removes all of a controller's attached listeners. ...</div><div class='long'><p>Removes all of a controller's attached listeners.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>controllerId</span> : String<div class='sub-desc'><p>The id of the controller.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});