Ext.data.JsonP.Ext_util_KeyMap({"tagname":"class","name":"Ext.util.KeyMap","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"KeyMap.js","href":"KeyMap.html#Ext-util-KeyMap"}],"aliases":{},"alternateClassNames":["Ext.KeyMap"],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"binding","tagname":"cfg","owner":"Ext.util.KeyMap","id":"cfg-binding","meta":{}},{"name":"eventName","tagname":"cfg","owner":"Ext.util.KeyMap","id":"cfg-eventName","meta":{}},{"name":"ignoreInputFields","tagname":"cfg","owner":"Ext.util.KeyMap","id":"cfg-ignoreInputFields","meta":{}},{"name":"processEvent","tagname":"cfg","owner":"Ext.util.KeyMap","id":"cfg-processEvent","meta":{}},{"name":"processEventScope","tagname":"cfg","owner":"Ext.util.KeyMap","id":"cfg-processEventScope","meta":{}},{"name":"target","tagname":"cfg","owner":"Ext.util.KeyMap","id":"cfg-target","meta":{}},{"name":"inputTagRe","tagname":"property","owner":"Ext.util.KeyMap","id":"property-inputTagRe","meta":{"private":true}},{"name":"lastKeyEvent","tagname":"property","owner":"Ext.util.KeyMap","id":"property-lastKeyEvent","meta":{}},{"name":"constructor","tagname":"method","owner":"Ext.util.KeyMap","id":"method-constructor","meta":{}},{"name":"addBinding","tagname":"method","owner":"Ext.util.KeyMap","id":"method-addBinding","meta":{}},{"name":"checkModifiers","tagname":"method","owner":"Ext.util.KeyMap","id":"method-checkModifiers","meta":{"private":true}},{"name":"destroy","tagname":"method","owner":"Ext.util.KeyMap","id":"method-destroy","meta":{}},{"name":"disable","tagname":"method","owner":"Ext.util.KeyMap","id":"method-disable","meta":{}},{"name":"enable","tagname":"method","owner":"Ext.util.KeyMap","id":"method-enable","meta":{}},{"name":"handleTargetEvent","tagname":"method","owner":"Ext.util.KeyMap","id":"method-handleTargetEvent","meta":{"private":true}},{"name":"isEnabled","tagname":"method","owner":"Ext.util.KeyMap","id":"method-isEnabled","meta":{}},{"name":"legacyConstructor","tagname":"method","owner":"Ext.util.KeyMap","id":"method-legacyConstructor","meta":{"private":true}},{"name":"on","tagname":"method","owner":"Ext.util.KeyMap","id":"method-on","meta":{}},{"name":"processBinding","tagname":"method","owner":"Ext.util.KeyMap","id":"method-processBinding","meta":{"private":true}},{"name":"processKeys","tagname":"method","owner":"Ext.util.KeyMap","id":"method-processKeys","meta":{"private":true}},{"name":"removeBinding","tagname":"method","owner":"Ext.util.KeyMap","id":"method-removeBinding","meta":{}},{"name":"setDisabled","tagname":"method","owner":"Ext.util.KeyMap","id":"method-setDisabled","meta":{}},{"name":"un","tagname":"method","owner":"Ext.util.KeyMap","id":"method-un","meta":{}}],"code_type":"ext_define","id":"class-Ext.util.KeyMap","short_doc":"Handles mapping key events to handling functions for an element or a Component. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.KeyMap</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.util.KeyMap</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/KeyMap.html#Ext-util-KeyMap' target='_blank'>KeyMap.js</a></div></pre><div class='doc-contents'><p>Handles mapping key events to handling functions for an element or a Component. One KeyMap can be used for multiple\nactions.</p>\n\n<p>A KeyMap must be configured with a <a href=\"#!/api/Ext.util.KeyMap-cfg-target\" rel=\"Ext.util.KeyMap-cfg-target\" class=\"docClass\">target</a> as an event source which may be an Element or a Component.</p>\n\n<p>If the target is an element, then the <code>keydown</code> event will trigger the invocation of <a href=\"#!/api/Ext.util.KeyMap-cfg-binding\" rel=\"Ext.util.KeyMap-cfg-binding\" class=\"docClass\">binding</a>s.</p>\n\n<p>It is possible to configure the KeyMap with a custom <a href=\"#!/api/Ext.util.KeyMap-cfg-eventName\" rel=\"Ext.util.KeyMap-cfg-eventName\" class=\"docClass\">eventName</a> to listen for. This may be useful when the\n<a href=\"#!/api/Ext.util.KeyMap-cfg-target\" rel=\"Ext.util.KeyMap-cfg-target\" class=\"docClass\">target</a> is a Component.</p>\n\n<p>The KeyMap's event handling requires that the first parameter passed is a key event. So if the Component's event\nsignature is different, specify a <a href=\"#!/api/Ext.util.KeyMap-cfg-processEvent\" rel=\"Ext.util.KeyMap-cfg-processEvent\" class=\"docClass\">processEvent</a> configuration which accepts the event's parameters and\nreturns a key event.</p>\n\n<p>Functions specified in <a href=\"#!/api/Ext.util.KeyMap-cfg-binding\" rel=\"Ext.util.KeyMap-cfg-binding\" class=\"docClass\">binding</a>s are called with this signature : <code>(String key, Ext.event.Event e)</code> (if the\nmatch is a multi-key combination the callback will still be called only once). A KeyMap can also handle a string\nrepresentation of keys. By default KeyMap starts enabled.</p>\n\n<p>Usage:</p>\n\n<pre><code>// map one key by key code\nvar map = new <a href=\"#!/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a>({\n    target: \"my-element\",\n    key: 13, // or Ext.event.Event.ENTER\n    fn: myHandler,\n    scope: myObject\n});\n\n// map multiple keys to one action by string\nvar map = new <a href=\"#!/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a>({\n    target: \"my-element\",\n    key: \"a\\r\\n\\t\",\n    fn: myHandler,\n    scope: myObject\n});\n\n// map multiple keys to multiple actions by strings and array of codes\nvar map = new <a href=\"#!/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a>({\n    target: \"my-element\",\n    binding: [{\n        key: [10,13],\n        fn: function(){ alert(\"Return was pressed\"); }\n    }, {\n        key: \"abc\",\n        fn: function(){ alert('a, b or c was pressed'); }\n    }, {\n        key: \"\\t\",\n        ctrl:true,\n        shift:true,\n        fn: function(){ alert('Control + shift + tab was pressed.'); }\n    }]\n});\n</code></pre>\n\n<p>Since 4.1.0, KeyMaps can bind to Components and process key-based events fired by Components.</p>\n\n<p>To bind to a Component, use the single parameter form of constructor and include the Component event name\nto listen for, and a <code>processEvent</code> implementation which returns the key event for further processing by\nthe KeyMap:</p>\n\n<pre><code>var map = new <a href=\"#!/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a>({\n    target: myGridView,\n    eventName: 'itemkeydown',\n    processEvent: function(view, record, node, index, event) {\n\n        // Load the event with the extra information needed by the mappings\n        event.view = view;\n        event.store = view.getStore();\n        event.record = record;\n        event.index = index;\n        return event;\n    },\n    binding: {\n        key: Ext.event.Event.DELETE,\n        fn: function(keyCode, e) {\n            e.store.remove(e.record);\n\n            // Attempt to select the record that's now in its place\n            e.view.getSelectionModel().select(e.index);\n            e.view.el.focus();\n        }\n    }\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-binding' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-cfg-binding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-cfg-binding' class='name expandable'>binding</a> : Object/Object[][]<span class=\"signature\"></span></div><div class='description'><div class='short'>Either a single object describing a handling function for s specified key (or set of keys), or\nan array of such objects. ...</div><div class='long'><p>Either a single object describing a handling function for s specified key (or set of keys), or\nan array of such objects.</p>\n<ul><li><span class='pre'>key</span> : String/String[]<div class='sub-desc'><p>A single keycode or an array of keycodes to handle</p>\n</div></li><li><span class='pre'>shift</span> : Boolean<div class='sub-desc'><p>True to handle key only when shift is pressed, False to handle the\n key only when shift is not pressed (defaults to undefined)</p>\n</div></li><li><span class='pre'>ctrl</span> : Boolean<div class='sub-desc'><p>True to handle key only when ctrl is pressed, False to handle the\n key only when ctrl is not pressed (defaults to undefined)</p>\n</div></li><li><span class='pre'>alt</span> : Boolean<div class='sub-desc'><p>True to handle key only when alt is pressed, False to handle the key\n only when alt is not pressed (defaults to undefined)</p>\n</div></li><li><span class='pre'>handler</span> : Function<div class='sub-desc'><p>The function to call when KeyMap finds the expected key combination</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>Alias of handler (for backwards-compatibility)</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope (<code>this</code> context) in which the handler function is executed.</p>\n</div></li><li><span class='pre'>defaultEventAction</span> : String<div class='sub-desc'><p>A default action to apply to the event <em>when the handler returns <code>true</code></em>. Possible values\n are: stopEvent, stopPropagation, preventDefault. If no value is set no action is performed.</p>\n</div></li></ul></div></div></div><div id='cfg-eventName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-cfg-eventName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-cfg-eventName' class='name expandable'>eventName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The event to listen for to pick up key events. ...</div><div class='long'><p>The event to listen for to pick up key events.</p>\n<p>Defaults to: <code>&#39;keydown&#39;</code></p></div></div></div><div id='cfg-ignoreInputFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-cfg-ignoreInputFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-cfg-ignoreInputFields' class='name expandable'>ignoreInputFields</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Configure this as true if there are any input fields within the target, and this KeyNav\nshould not process events fro...</div><div class='long'><p>Configure this as <code>true</code> if there are any input fields within the <a href=\"#!/api/Ext.util.KeyMap-cfg-target\" rel=\"Ext.util.KeyMap-cfg-target\" class=\"docClass\">target</a>, and this KeyNav\nshould not process events from input fields, (<code>&amp;lt;input&gt;, &amp;lt;textarea&gt; and elements with</code>contentEditable=\"true\"`)</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-processEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-cfg-processEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-cfg-processEvent' class='name expandable'>processEvent</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>An optional event processor function which accepts the argument list provided by the\nconfigured event of the target, ...</div><div class='long'><p>An optional event processor function which accepts the argument list provided by the\n<a href=\"#!/api/Ext.util.KeyMap-cfg-eventName\" rel=\"Ext.util.KeyMap-cfg-eventName\" class=\"docClass\">configured event</a> of the <a href=\"#!/api/Ext.util.KeyMap-cfg-target\" rel=\"Ext.util.KeyMap-cfg-target\" class=\"docClass\">target</a>, and returns a keyEvent for processing by the KeyMap.</p>\n\n<p>This may be useful when the <a href=\"#!/api/Ext.util.KeyMap-cfg-target\" rel=\"Ext.util.KeyMap-cfg-target\" class=\"docClass\">target</a> is a Component with a complex event signature, where the event is not\nthe first parameter. Extra information from the event arguments may be injected into the event for use by the handler\nfunctions before returning it.</p>\n</div></div></div><div id='cfg-processEventScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-cfg-processEventScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-cfg-processEventScope' class='name expandable'>processEventScope</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The scope (this context) in which the processEvent method is executed. ...</div><div class='long'><p>The scope (<code>this</code> context) in which the <a href=\"#!/api/Ext.util.KeyMap-cfg-processEvent\" rel=\"Ext.util.KeyMap-cfg-processEvent\" class=\"docClass\">processEvent</a> method is executed.</p>\n<p>Defaults to: <code>this</code></p></div></div></div><div id='cfg-target' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-cfg-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-cfg-target' class='name expandable'>target</a> : Ext.Component/Ext.dom.Element/HTMLElement/String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The object on which to listen for the event specified by the <a href=\"#!/api/Ext.util.KeyMap-cfg-eventName\" rel=\"Ext.util.KeyMap-cfg-eventName\" class=\"docClass\">eventName</a> config option.</p>\n</div><div class='long'><p>The object on which to listen for the event specified by the <a href=\"#!/api/Ext.util.KeyMap-cfg-eventName\" rel=\"Ext.util.KeyMap-cfg-eventName\" class=\"docClass\">eventName</a> config option.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-inputTagRe' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-property-inputTagRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-property-inputTagRe' class='name expandable'>inputTagRe</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/input|textarea/i</code></p></div></div></div><div id='property-lastKeyEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-property-lastKeyEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-property-lastKeyEvent' class='name expandable'>lastKeyEvent</a> : Ext.event.Event<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The last key event that this KeyMap handled.</p>\n</div><div class='long'><p>The last key event that this KeyMap handled.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.util.KeyMap-method-constructor' class='name expandable'>Ext.util.KeyMap</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addBinding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-addBinding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-addBinding' class='name expandable'>addBinding</a>( <span class='pre'>binding</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a new binding to this KeyMap. ...</div><div class='long'><p>Add a new binding to this KeyMap.</p>\n\n<p>Usage:</p>\n\n<pre><code>// Create a KeyMap\nvar map = new <a href=\"#!/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a>(document, {\n    key: Ext.event.Event.ENTER,\n    fn: handleKey,\n    scope: this\n});\n\n//Add a new binding to the existing KeyMap later\nmap.addBinding({\n    key: 'abc',\n    shift: true,\n    fn: handleKey,\n    scope: this\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>binding</span> : Object/Object[]<div class='sub-desc'><p>A single KeyMap config or an array of configs.\nThe following config object properties are supported:</p>\n<ul><li><span class='pre'>key</span> : String/Array<div class='sub-desc'><p>A single keycode or an array of keycodes to handle.</p>\n</div></li><li><span class='pre'>shift</span> : Boolean<div class='sub-desc'><p>True to handle key only when shift is pressed,\nFalse to handle the keyonly when shift is not pressed (defaults to undefined).</p>\n</div></li><li><span class='pre'>ctrl</span> : Boolean<div class='sub-desc'><p>True to handle key only when ctrl is pressed,\nFalse to handle the key only when ctrl is not pressed (defaults to undefined).</p>\n</div></li><li><span class='pre'>alt</span> : Boolean<div class='sub-desc'><p>True to handle key only when alt is pressed,\nFalse to handle the key only when alt is not pressed (defaults to undefined).</p>\n</div></li><li><span class='pre'>handler</span> : Function<div class='sub-desc'><p>The function to call when KeyMap finds the\nexpected key combination.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>Alias of handler (for backwards-compatibility).</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope (<code>this</code> context) in which the handler function is executed.</p>\n</div></li><li><span class='pre'>defaultEventAction</span> : String<div class='sub-desc'><p>A default action to apply to the event <em>when the handler returns <code>true</code></em>.\nPossible values are: stopEvent, stopPropagation, preventDefault. If no value is\nset no action is performed..</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-checkModifiers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-checkModifiers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-checkModifiers' class='name expandable'>checkModifiers</a>( <span class='pre'>binding, event</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Check if the modifiers on the event match those on the binding ...</div><div class='long'><p>Check if the modifiers on the event match those on the binding</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>binding</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : Ext.event.Event<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the event matches the binding</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-destroy' class='name expandable'>destroy</a>( <span class='pre'>removeTarget</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys the KeyMap instance and removes all handlers. ...</div><div class='long'><p>Destroys the KeyMap instance and removes all handlers.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>removeTarget</span> : Boolean<div class='sub-desc'><p>True to also remove the <a href=\"#!/api/Ext.util.KeyMap-cfg-target\" rel=\"Ext.util.KeyMap-cfg-target\" class=\"docClass\">target</a></p>\n</div></li></ul></div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disable this KeyMap ...</div><div class='long'><p>Disable this KeyMap</p>\n</div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Enables this KeyMap ...</div><div class='long'><p>Enables this KeyMap</p>\n</div></div></div><div id='method-handleTargetEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-handleTargetEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-handleTargetEvent' class='name expandable'>handleTargetEvent</a>( <span class='pre'>event</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Process the event from the target. ...</div><div class='long'><p>Process the <a href=\"#!/api/Ext.util.KeyMap-cfg-eventName\" rel=\"Ext.util.KeyMap-cfg-eventName\" class=\"docClass\">event</a> from the <a href=\"#!/api/Ext.util.KeyMap-cfg-target\" rel=\"Ext.util.KeyMap-cfg-target\" class=\"docClass\">target</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Ext.event.Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-isEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-isEnabled' class='name expandable'>isEnabled</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if this KeyMap is enabled ...</div><div class='long'><p>Returns true if this KeyMap is enabled</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-legacyConstructor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-legacyConstructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-legacyConstructor' class='name expandable'>legacyConstructor</a>( <span class='pre'>el, binding, [eventName]</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Old constructor signature ...</div><div class='long'><p>Old constructor signature</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : String/HTMLElement/Ext.dom.Element/Ext.Component<div class='sub-desc'><p>The element or its ID, or Component to bind to</p>\n</div></li><li><span class='pre'>binding</span> : Object<div class='sub-desc'><p>The binding (see <a href=\"#!/api/Ext.util.KeyMap-method-addBinding\" rel=\"Ext.util.KeyMap-method-addBinding\" class=\"docClass\">addBinding</a>)</p>\n</div></li><li><span class='pre'>eventName</span> : String (optional)<div class='sub-desc'><p>The event to bind to</p>\n<p>Defaults to: <code>&quot;keydown&quot;</code></p></div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-on' class='name expandable'>on</a>( <span class='pre'>key, fn, [scope]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shorthand for adding a single key listener. ...</div><div class='long'><p>Shorthand for adding a single key listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Number/Number[]/Object<div class='sub-desc'><p>Either the numeric key code, array of key codes or an object with the\nfollowing options: <code>{key: (number or array), shift: (true/false), ctrl: (true/false), alt: (true/false)}</code></p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The function to call</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the function is executed.\nDefaults to the browser window.</p>\n</div></li></ul></div></div></div><div id='method-processBinding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-processBinding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-processBinding' class='name expandable'>processBinding</a>( <span class='pre'>binding, event</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Process a particular binding and fire the handler if necessary. ...</div><div class='long'><p>Process a particular binding and fire the handler if necessary.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>binding</span> : Object<div class='sub-desc'><p>The binding information</p>\n</div></li><li><span class='pre'>event</span> : Ext.event.Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-processKeys' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-processKeys' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-processKeys' class='name expandable'>processKeys</a>( <span class='pre'>keyCode</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>keyCode</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-removeBinding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-removeBinding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-removeBinding' class='name expandable'>removeBinding</a>( <span class='pre'>binding</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove a binding from this KeyMap. ...</div><div class='long'><p>Remove a binding from this KeyMap.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>binding</span> : Object<div class='sub-desc'><p>See <a href=\"#!/api/Ext.util.KeyMap-method-addBinding\" rel=\"Ext.util.KeyMap-method-addBinding\" class=\"docClass\">for options</a></p>\n</div></li></ul></div></div></div><div id='method-setDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-setDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-setDisabled' class='name expandable'>setDisabled</a>( <span class='pre'>disabled</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Convenience function for setting disabled/enabled by boolean. ...</div><div class='long'><p>Convenience function for setting disabled/enabled by boolean.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>disabled</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-un' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.KeyMap'>Ext.util.KeyMap</span><br/><a href='source/KeyMap.html#Ext-util-KeyMap-method-un' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.KeyMap-method-un' class='name expandable'>un</a>( <span class='pre'>key, fn, [scope]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shorthand for removing a single key listener. ...</div><div class='long'><p>Shorthand for removing a single key listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Number/Number[]/Object<div class='sub-desc'><p>Either the numeric key code, array of key codes or an object with the\nfollowing options: <code>{key: (number or array), shift: (true/false), ctrl: (true/false), alt: (true/false)}</code></p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The function to call</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the function is executed.\nDefaults to the browser window.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});