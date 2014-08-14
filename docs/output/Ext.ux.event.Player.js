Ext.data.JsonP.Ext_ux_event_Player({"tagname":"class","name":"Ext.ux.event.Player","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Player.js","href":"Player.html#Ext-ux-event-Player"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"eventQueue","tagname":"cfg","owner":"Ext.ux.event.Player","id":"cfg-eventQueue","meta":{}},{"name":"keyFrameEvents","tagname":"cfg","owner":"Ext.ux.event.Player","id":"cfg-keyFrameEvents","meta":{}},{"name":"pauseForAnimations","tagname":"cfg","owner":"Ext.ux.event.Player","id":"cfg-pauseForAnimations","meta":{}},{"name":"speed","tagname":"cfg","owner":"Ext.ux.event.Player","id":"cfg-speed","meta":{}},{"name":"getElementFromXPath","tagname":"method","owner":"Ext.ux.event.Player","id":"method-getElementFromXPath","meta":{}},{"name":"injectEvent","tagname":"method","owner":"Ext.ux.event.Player","id":"method-injectEvent","meta":{}},{"name":"nextEvent","tagname":"method","owner":"Ext.ux.event.Player","id":"method-nextEvent","meta":{}},{"name":"peekEvent","tagname":"method","owner":"Ext.ux.event.Player","id":"method-peekEvent","meta":{}},{"name":"processEvents","tagname":"method","owner":"Ext.ux.event.Player","id":"method-processEvents","meta":{}},{"name":"processKeyFrame","tagname":"method","owner":"Ext.ux.event.Player","id":"method-processKeyFrame","meta":{}},{"name":"replaceEvent","tagname":"method","owner":"Ext.ux.event.Player","id":"method-replaceEvent","meta":{}},{"name":"beforeplay","tagname":"event","owner":"Ext.ux.event.Player","id":"event-beforeplay","meta":{}},{"name":"keyframe","tagname":"event","owner":"Ext.ux.event.Player","id":"event-keyframe","meta":{}}],"code_type":"ext_define","id":"class-Ext.ux.event.Player","short_doc":"This class manages the playback of an array of \"event descriptors\". ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.ux.event.Player</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Player.html#Ext-ux-event-Player' target='_blank'>Player.js</a></div></pre><div class='doc-contents'><p>This class manages the playback of an array of \"event descriptors\". For details on the\ncontents of an \"event descriptor\", see <a href=\"#!/api/Ext.ux.event.Recorder\" rel=\"Ext.ux.event.Recorder\" class=\"docClass\">Ext.ux.event.Recorder</a>. The events recorded by the\n<a href=\"#!/api/Ext.ux.event.Recorder\" rel=\"Ext.ux.event.Recorder\" class=\"docClass\">Ext.ux.event.Recorder</a> class are designed to serve as input for this class.</p>\n\n<p>The simplest use of this class is to instantiate it with an <a href=\"#!/api/Ext.ux.event.Player-cfg-eventQueue\" rel=\"Ext.ux.event.Player-cfg-eventQueue\" class=\"docClass\">eventQueue</a> and call\nstart. Like so:</p>\n\n<pre><code> var player = Ext.create('<a href=\"#!/api/Ext.ux.event.Player\" rel=\"Ext.ux.event.Player\" class=\"docClass\">Ext.ux.event.Player</a>', {\n     eventQueue: [ ... ],\n     speed: 2,  // play at 2x speed\n     listeners: {\n         stop: function () {\n             player = null; // all done\n         }\n     }\n });\n\n player.start();\n</code></pre>\n\n<p>A more complex use would be to incorporate keyframe generation after playing certain\nevents.</p>\n\n<pre><code> var player = Ext.create('<a href=\"#!/api/Ext.ux.event.Player\" rel=\"Ext.ux.event.Player\" class=\"docClass\">Ext.ux.event.Player</a>', {\n     eventQueue: [ ... ],\n     keyFrameEvents: {\n         click: true\n     },\n     listeners: {\n         stop: function () {\n             // play has completed... probably time for another keyframe...\n             player = null;\n         },\n         keyframe: onKeyFrame\n     }\n });\n\n player.start();\n</code></pre>\n\n<p>If a keyframe can be handled immediately (synchronously), the listener would be:</p>\n\n<pre><code> function onKeyFrame () {\n     handleKeyFrame();\n }\n</code></pre>\n\n<p> If the keyframe event is always handled asynchronously, then the event listener is only\n a bit more:</p>\n\n<pre><code> function onKeyFrame (p, eventDescriptor) {\n     eventDescriptor.defer(); // pause event playback...\n\n     handleKeyFrame(function () {\n         eventDescriptor.finish(); // ...resume event playback\n     });\n }\n</code></pre>\n\n<p>Finally, if the keyframe could be either handled synchronously or asynchronously (perhaps\ndifferently by browser), a slightly more complex listener is required.</p>\n\n<pre><code> function onKeyFrame (p, eventDescriptor) {\n     var async;\n\n     handleKeyFrame(function () {\n         // either this callback is being called immediately by handleKeyFrame (in\n         // which case async is undefined) or it is being called later (in which case\n         // async will be true).\n\n         if (async) {\n             eventDescriptor.finish();\n         } else {\n             async = false;\n         }\n     });\n\n     // either the callback was called (and async is now false) or it was not\n     // called (and async remains undefined).\n\n     if (async !== false) {\n         eventDescriptor.defer();\n         async = true; // let the callback know that we have gone async\n     }\n }\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-eventQueue' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-cfg-eventQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-cfg-eventQueue' class='name expandable'>eventQueue</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>The event queue to playback. ...</div><div class='long'><p>The event queue to playback. This must be provided before\nthe start method is called.</p>\n</div></div></div><div id='cfg-keyFrameEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-cfg-keyFrameEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-cfg-keyFrameEvents' class='name expandable'>keyFrameEvents</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>An object that describes the events that should generate\nkeyframe events. ...</div><div class='long'><p>An object that describes the events that should generate\nkeyframe events. For example, <code>{ click: true }</code> would generate keyframe events after\neach <code>click</code> event.</p>\n<p>Defaults to: <code>{click: true}</code></p></div></div></div><div id='cfg-pauseForAnimations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-cfg-pauseForAnimations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-cfg-pauseForAnimations' class='name expandable'>pauseForAnimations</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True to pause event playback during animations, false\nto ignore animations. ...</div><div class='long'><p>True to pause event playback during animations, false\nto ignore animations. Default is true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-speed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-cfg-speed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-cfg-speed' class='name expandable'>speed</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The playback speed multiplier. ...</div><div class='long'><p>The playback speed multiplier. Default is 1.0 (to playback at the\nrecorded speed). A value of 2 would playback at 2x speed.</p>\n<p>Defaults to: <code>1.0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getElementFromXPath' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-method-getElementFromXPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-method-getElementFromXPath' class='name expandable'>getElementFromXPath</a>( <span class='pre'>xpath</span> ) : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the element given is XPath-like description. ...</div><div class='long'><p>Returns the element given is XPath-like description.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xpath</span> : String<div class='sub-desc'><p>The XPath-like description of the element.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-injectEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-method-injectEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-method-injectEvent' class='name expandable'>injectEvent</a>( <span class='pre'>target, event</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called to inject the given event on the specified target. ...</div><div class='long'><p>Called to inject the given event on the specified target.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : HTMLElement<div class='sub-desc'><p>The target of the event.</p>\n</div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>The event to inject. The properties of this object should be\nthose of standard DOM events but vary based on the <code>type</code> property. For details on\nevent types and their properties, see the class documentation.</p>\n</div></li></ul></div></div></div><div id='method-nextEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-method-nextEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-method-nextEvent' class='name expandable'>nextEvent</a>( <span class='pre'>eventDescriptor</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is called after an event has been played to prepare for the next event. ...</div><div class='long'><p>This method is called after an event has been played to prepare for the next event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventDescriptor</span> : Object<div class='sub-desc'><p>The descriptor of the event just played.</p>\n</div></li></ul></div></div></div><div id='method-peekEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-method-peekEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-method-peekEvent' class='name expandable'>peekEvent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method returns the event descriptor at the front of the queue. ...</div><div class='long'><p>This method returns the event descriptor at the front of the queue. This does not\ndequeue the event. Repeated calls return the same object (until <a href=\"#!/api/Ext.ux.event.Player-method-nextEvent\" rel=\"Ext.ux.event.Player-method-nextEvent\" class=\"docClass\">nextEvent</a>\nis called).</p>\n</div></div></div><div id='method-processEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-method-processEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-method-processEvents' class='name expandable'>processEvents</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>This method dequeues and injects events until it has arrived at the time index. ...</div><div class='long'><p>This method dequeues and injects events until it has arrived at the time index. If\nno events are ready (based on the time index), this method does nothing.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if there is more to do; false if not (at least for now).</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ext.ux.event.Player-event-beforeplay\" rel=\"Ext.ux.event.Player-event-beforeplay\" class=\"docClass\">beforeplay</a></li><li><a href=\"#!/api/Ext.ux.event.Player-event-keyframe\" rel=\"Ext.ux.event.Player-event-keyframe\" class=\"docClass\">keyframe</a></li></ul></div></div></div><div id='method-processKeyFrame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-method-processKeyFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-method-processKeyFrame' class='name expandable'>processKeyFrame</a>( <span class='pre'>eventDescriptor</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is called when a keyframe is reached. ...</div><div class='long'><p>This method is called when a keyframe is reached. This will fire the keyframe event.\nIf the keyframe has been handled, true is returned. Otherwise, false is returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventDescriptor</span> : Object<div class='sub-desc'><p>The event descriptor of the keyframe.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the keyframe was handled, false if not.</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Ext.ux.event.Player-event-keyframe\" rel=\"Ext.ux.event.Player-event-keyframe\" class=\"docClass\">keyframe</a></li></ul></div></div></div><div id='method-replaceEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-method-replaceEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-method-replaceEvent' class='name expandable'>replaceEvent</a>( <span class='pre'>index, events</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Replaces an event in the queue with an array of events. ...</div><div class='long'><p>Replaces an event in the queue with an array of events. This is often used to roll\nup a multi-step pseudo-event and expand it just-in-time to be played. The process\nfor doing this in a derived class would be this:</p>\n\n<pre><code> Ext.define('My.Player', {\n     extend: '<a href=\"#!/api/Ext.ux.event.Player\" rel=\"Ext.ux.event.Player\" class=\"docClass\">Ext.ux.event.Player</a>',\n\n     peekEvent: function () {\n         var event = this.callParent();\n\n         if (event.multiStepSpecial) {\n             this.replaceEvent(null, [\n                 ... expand to actual events\n             ]);\n\n             event = this.callParent(); // get the new next event\n         }\n\n         return event;\n     }\n });\n</code></pre>\n\n<p>This method ensures that the <code>beforeplay</code> hook (if any) from the replaced event is\nplaced on the first new event and the <code>afterplay</code> hook (if any) is placed on the\nlast new event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The queue index to replace. Pass <code>null</code> to replace the event\nat the current <code>queueIndex</code>.</p>\n</div></li><li><span class='pre'>events</span> : Event[]<div class='sub-desc'><p>The array of events with which to replace the specified\nevent.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-beforeplay' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-event-beforeplay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-event-beforeplay' class='name expandable'>beforeplay</a>( <span class='pre'>this, eventDescriptor, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires before an event is played. ...</div><div class='long'><p>Fires before an event is played.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.event.Player\" rel=\"Ext.ux.event.Player\" class=\"docClass\">Ext.ux.event.Player</a><div class='sub-desc'>\n</div></li><li><span class='pre'>eventDescriptor</span> : Object<div class='sub-desc'><p>The event descriptor about to be played.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-keyframe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.event.Player'>Ext.ux.event.Player</span><br/><a href='source/Player.html#Ext-ux-event-Player-event-keyframe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.event.Player-event-keyframe' class='name expandable'>keyframe</a>( <span class='pre'>this, eventDescriptor, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when this player reaches a keyframe. ...</div><div class='long'><p>Fires when this player reaches a keyframe. Typically, this is after events\nlike <code>click</code> are injected and any resulting animations have been completed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.event.Player\" rel=\"Ext.ux.event.Player\" class=\"docClass\">Ext.ux.event.Player</a><div class='sub-desc'>\n</div></li><li><span class='pre'>eventDescriptor</span> : Object<div class='sub-desc'><p>The keyframe event descriptor.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});