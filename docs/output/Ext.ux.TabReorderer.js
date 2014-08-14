Ext.data.JsonP.Ext_ux_TabReorderer({"tagname":"class","name":"Ext.ux.TabReorderer","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"TabReorderer.js","href":"TabReorderer.html#Ext-ux-TabReorderer"}],"aliases":{"plugin":["tabreorderer"]},"alternateClassNames":[],"extends":"Ext.ux.BoxReorderer","mixins":[],"requires":[],"uses":[],"members":[{"name":"animate","tagname":"cfg","owner":"Ext.ux.BoxReorderer","id":"cfg-animate","meta":{}},{"name":"itemSelector","tagname":"cfg","owner":"Ext.ux.TabReorderer","id":"cfg-itemSelector","meta":{}},{"name":"afterBoxReflow","tagname":"method","owner":"Ext.ux.TabReorderer","id":"method-afterBoxReflow","meta":{"private":true}},{"name":"clickValidator","tagname":"method","owner":"Ext.ux.BoxReorderer","id":"method-clickValidator","meta":{"private":true}},{"name":"doSwap","tagname":"method","owner":"Ext.ux.BoxReorderer","id":"method-doSwap","meta":{"private":true}},{"name":"endDrag","tagname":"method","owner":"Ext.ux.BoxReorderer","id":"method-endDrag","meta":{"private":true}},{"name":"findReorderable","tagname":"method","owner":"Ext.ux.BoxReorderer","id":"method-findReorderable","meta":{"private":true}},{"name":"getDragCmp","tagname":"method","owner":"Ext.ux.BoxReorderer","id":"method-getDragCmp","meta":{"private":true}},{"name":"getNewIndex","tagname":"method","owner":"Ext.ux.BoxReorderer","id":"method-getNewIndex","meta":{"private":true}},{"name":"init","tagname":"method","owner":"Ext.ux.TabReorderer","id":"method-init","meta":{"private":true}},{"name":"onAdd","tagname":"method","owner":"Ext.ux.TabReorderer","id":"method-onAdd","meta":{"private":true}},{"name":"onBoxReady","tagname":"method","owner":"Ext.ux.TabReorderer","id":"method-onBoxReady","meta":{"private":true}},{"name":"onContainerDestroy","tagname":"method","owner":"Ext.ux.BoxReorderer","id":"method-onContainerDestroy","meta":{"private":true}},{"name":"onDrag","tagname":"method","owner":"Ext.ux.BoxReorderer","id":"method-onDrag","meta":{"private":true}},{"name":"onMouseDown","tagname":"method","owner":"Ext.ux.BoxReorderer","id":"method-onMouseDown","meta":{"private":true}},{"name":"startDrag","tagname":"method","owner":"Ext.ux.BoxReorderer","id":"method-startDrag","meta":{"private":true}},{"name":"ChangeIndex","tagname":"event","owner":"Ext.ux.BoxReorderer","id":"event-ChangeIndex","meta":{}},{"name":"Drag","tagname":"event","owner":"Ext.ux.BoxReorderer","id":"event-Drag","meta":{}},{"name":"Drop","tagname":"event","owner":"Ext.ux.BoxReorderer","id":"event-Drop","meta":{}},{"name":"StartDrag","tagname":"event","owner":"Ext.ux.BoxReorderer","id":"event-StartDrag","meta":{}}],"code_type":"ext_define","id":"class-Ext.ux.TabReorderer","component":false,"superclasses":["Ext.Base","Ext.ux.BoxReorderer"],"subclasses":[],"mixedInto":[],"parentMixins":["Ext.util.Observable"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='docClass'>Ext.ux.BoxReorderer</a><div class='subclass '><strong>Ext.ux.TabReorderer</strong></div></div></div><h4>Inherited mixins</h4><div class='dependency'>Ext.util.Observable</div><h4>Files</h4><div class='dependency'><a href='source/TabReorderer.html#Ext-ux-TabReorderer' target='_blank'>TabReorderer.js</a></div></pre><div class='doc-contents'><p>This plugin allow you to reorder tabs of a TabPanel.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-animate' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-cfg-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-cfg-animate' class='name expandable'>animate</a> : Mixed<span class=\"signature\"></span></div><div class='description'><div class='short'>If truthy, child reordering is animated so that moved boxes slide smoothly into position. ...</div><div class='long'><p>If truthy, child reordering is animated so that moved boxes slide smoothly into position.\nIf this option is numeric, it is used as the animation duration in milliseconds.</p>\n<p>Defaults to: <code>100</code></p></div></div></div><div id='cfg-itemSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TabReorderer'>Ext.ux.TabReorderer</span><br/><a href='source/TabReorderer.html#Ext-ux-TabReorderer-cfg-itemSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TabReorderer-cfg-itemSelector' class='name expandable'>itemSelector</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A DomQuery selector which identifies the encapsulating elements of child\nComponents which participate in reordering. ...</div><div class='long'><p>A DomQuery selector which identifies the encapsulating elements of child\nComponents which participate in reordering.</p>\n<p>Defaults to: <code>&#39;.&#39; + Ext.baseCSSPrefix + &#39;tab&#39;</code></p><p>Overrides: <a href=\"#!/api/Ext.ux.BoxReorderer-cfg-itemSelector\" rel=\"Ext.ux.BoxReorderer-cfg-itemSelector\" class=\"docClass\">Ext.ux.BoxReorderer.itemSelector</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-afterBoxReflow' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TabReorderer'>Ext.ux.TabReorderer</span><br/><a href='source/TabReorderer.html#Ext-ux-TabReorderer-method-afterBoxReflow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TabReorderer-method-afterBoxReflow' class='name expandable'>afterBoxReflow</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called after the boxes have been reflowed after the drop. ...</div><div class='long'><p>Called after the boxes have been reflowed after the drop.\nRe-enabled the dragged Component.</p>\n<p>Overrides: <a href=\"#!/api/Ext.ux.BoxReorderer-method-afterBoxReflow\" rel=\"Ext.ux.BoxReorderer-method-afterBoxReflow\" class=\"docClass\">Ext.ux.BoxReorderer.afterBoxReflow</a></p></div></div></div><div id='method-clickValidator' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-method-clickValidator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-method-clickValidator' class='name expandable'>clickValidator</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>check if the clicked component is reorderable ...</div><div class='long'><p>check if the clicked component is reorderable</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-doSwap' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-method-doSwap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-method-doSwap' class='name expandable'>doSwap</a>( <span class='pre'>newIndex</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Swap 2 components. ...</div><div class='long'><p>Swap 2 components.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newIndex</span> : Number<div class='sub-desc'><p>The initial drop index.</p>\n</div></li></ul></div></div></div><div id='method-endDrag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-method-endDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-method-endDrag' class='name expandable'>endDrag</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-findReorderable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-method-findReorderable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-method-findReorderable' class='name expandable'>findReorderable</a>( <span class='pre'>newIndex</span> ) : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Find next or previous reorderable component index. ...</div><div class='long'><p>Find next or previous reorderable component index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newIndex</span> : Number<div class='sub-desc'><p>The initial drop index.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The index of the reorderable component.</p>\n</div></li></ul></div></div></div><div id='method-getDragCmp' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-method-getDragCmp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-method-getDragCmp' class='name expandable'>getDragCmp</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getNewIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-method-getNewIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-method-getNewIndex' class='name expandable'>getNewIndex</a>( <span class='pre'>pointerPos</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Calculate drop index based upon the dragEl's position. ...</div><div class='long'><p>Calculate drop index based upon the dragEl's position.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pointerPos</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TabReorderer'>Ext.ux.TabReorderer</span><br/><a href='source/TabReorderer.html#Ext-ux-TabReorderer-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TabReorderer-method-init' class='name expandable'>init</a>( <span class='pre'>tabPanel</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tabPanel</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.ux.BoxReorderer-method-init\" rel=\"Ext.ux.BoxReorderer-method-init\" class=\"docClass\">Ext.ux.BoxReorderer.init</a></p></div></div></div><div id='method-onAdd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TabReorderer'>Ext.ux.TabReorderer</span><br/><a href='source/TabReorderer.html#Ext-ux-TabReorderer-method-onAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TabReorderer-method-onAdd' class='name expandable'>onAdd</a>( <span class='pre'>card, index</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>card</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onBoxReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TabReorderer'>Ext.ux.TabReorderer</span><br/><a href='source/TabReorderer.html#Ext-ux-TabReorderer-method-onBoxReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TabReorderer-method-onBoxReady' class='name expandable'>onBoxReady</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/Ext.ux.BoxReorderer-method-onBoxReady\" rel=\"Ext.ux.BoxReorderer-method-onBoxReady\" class=\"docClass\">Ext.ux.BoxReorderer.onBoxReady</a></p></div></div></div><div id='method-onContainerDestroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-method-onContainerDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-method-onContainerDestroy' class='name expandable'>onContainerDestroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Clear up on Container destroy ...</div><div class='long'><p>Clear up on Container destroy</p>\n</div></div></div><div id='method-onDrag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-method-onDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-method-onDrag' class='name expandable'>onDrag</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onMouseDown' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-method-onMouseDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-method-onMouseDown' class='name expandable'>onMouseDown</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-startDrag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-method-startDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-method-startDrag' class='name expandable'>startDrag</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-ChangeIndex' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-event-ChangeIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-event-ChangeIndex' class='name expandable'>ChangeIndex</a>( <span class='pre'>this, container, dragCmp, startIdx, idx, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when dragging of a child Component causes its drop index to change. ...</div><div class='long'><p>Fires when dragging of a child Component causes its drop index to change.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.BoxReorderer\" rel=\"Ext.ux.BoxReorderer\" class=\"docClass\">Ext.ux.BoxReorderer</a><div class='sub-desc'>\n</div></li><li><span class='pre'>container</span> : <a href=\"#!/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a><div class='sub-desc'><p>The owning Container</p>\n</div></li><li><span class='pre'>dragCmp</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component being dragged</p>\n</div></li><li><span class='pre'>startIdx</span> : Number<div class='sub-desc'><p>The index position from which the Component was initially dragged.</p>\n</div></li><li><span class='pre'>idx</span> : Number<div class='sub-desc'><p>The current closest index to which the Component would drop.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-Drag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-event-Drag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-event-Drag' class='name expandable'>Drag</a>( <span class='pre'>this, container, dragCmp, startIdx, idx, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires during dragging of a child Component. ...</div><div class='long'><p>Fires during dragging of a child Component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.BoxReorderer\" rel=\"Ext.ux.BoxReorderer\" class=\"docClass\">Ext.ux.BoxReorderer</a><div class='sub-desc'>\n</div></li><li><span class='pre'>container</span> : <a href=\"#!/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a><div class='sub-desc'><p>The owning Container</p>\n</div></li><li><span class='pre'>dragCmp</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component being dragged</p>\n</div></li><li><span class='pre'>startIdx</span> : Number<div class='sub-desc'><p>The index position from which the Component was initially dragged.</p>\n</div></li><li><span class='pre'>idx</span> : Number<div class='sub-desc'><p>The current closest index to which the Component would drop.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-Drop' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-event-Drop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-event-Drop' class='name expandable'>Drop</a>( <span class='pre'>this, container, dragCmp, startIdx, idx, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when a child Component is dropped at a new index position. ...</div><div class='long'><p>Fires when a child Component is dropped at a new index position.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.BoxReorderer\" rel=\"Ext.ux.BoxReorderer\" class=\"docClass\">Ext.ux.BoxReorderer</a><div class='sub-desc'>\n</div></li><li><span class='pre'>container</span> : <a href=\"#!/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a><div class='sub-desc'><p>The owning Container</p>\n</div></li><li><span class='pre'>dragCmp</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component being dropped</p>\n</div></li><li><span class='pre'>startIdx</span> : Number<div class='sub-desc'><p>The index position from which the Component was initially dragged.</p>\n</div></li><li><span class='pre'>idx</span> : Number<div class='sub-desc'><p>The index at which the Component is being dropped.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-StartDrag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.BoxReorderer' rel='Ext.ux.BoxReorderer' class='defined-in docClass'>Ext.ux.BoxReorderer</a><br/><a href='source/BoxReorderer.html#Ext-ux-BoxReorderer-event-StartDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.BoxReorderer-event-StartDrag' class='name expandable'>StartDrag</a>( <span class='pre'>this, container, dragCmp, idx, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when dragging of a child Component begins. ...</div><div class='long'><p>Fires when dragging of a child Component begins.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.ux.BoxReorderer\" rel=\"Ext.ux.BoxReorderer\" class=\"docClass\">Ext.ux.BoxReorderer</a><div class='sub-desc'>\n</div></li><li><span class='pre'>container</span> : <a href=\"#!/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a><div class='sub-desc'><p>The owning Container</p>\n</div></li><li><span class='pre'>dragCmp</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component being dragged</p>\n</div></li><li><span class='pre'>idx</span> : Number<div class='sub-desc'><p>The start index of the Component being dragged.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});