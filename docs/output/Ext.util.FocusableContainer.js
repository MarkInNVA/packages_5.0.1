Ext.data.JsonP.Ext_util_FocusableContainer({"tagname":"class","name":"Ext.util.FocusableContainer","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"FocusableContainer.js","href":"FocusableContainer2.html#Ext-util-FocusableContainer"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Mixin","mixins":[],"requires":["Ext.util.KeyNav"],"uses":[],"members":[{"name":"activeChildTabIndex","tagname":"cfg","owner":"Ext.util.FocusableContainer","id":"cfg-activeChildTabIndex","meta":{}},{"name":"enableFocusableContainer","tagname":"cfg","owner":"Ext.util.FocusableContainer","id":"cfg-enableFocusableContainer","meta":{}},{"name":"inactiveChildTabIndex","tagname":"cfg","owner":"Ext.util.FocusableContainer","id":"cfg-inactiveChildTabIndex","meta":{}},{"name":"isFocusableContainer","tagname":"property","owner":"Ext.util.FocusableContainer","id":"property-isFocusableContainer","meta":{"private":true}},{"name":"mixinConfig","tagname":"property","owner":"Ext.util.FocusableContainer","id":"property-mixinConfig","meta":{"private":true}},{"name":"privates","tagname":"property","owner":"Ext.util.FocusableContainer","id":"property-privates","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.util.FocusableContainer","short_doc":"A mixin for groups of Focusable things (Components, Widgets, etc) that\nshould respond to arrow keys to navigate among...","component":false,"superclasses":["Ext.Mixin"],"subclasses":[],"mixedInto":["Ext.form.RadioGroup","Ext.grid.header.Container","Ext.tab.Bar","Ext.toolbar.Breadcrumb","Ext.toolbar.Toolbar"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Mixin<div class='subclass '><strong>Ext.util.FocusableContainer</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.util.KeyNav' rel='Ext.util.KeyNav' class='docClass'>Ext.util.KeyNav</a></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Ext.form.RadioGroup' rel='Ext.form.RadioGroup' class='docClass'>Ext.form.RadioGroup</a></div><div class='dependency'><a href='#!/api/Ext.grid.header.Container' rel='Ext.grid.header.Container' class='docClass'>Ext.grid.header.Container</a></div><div class='dependency'><a href='#!/api/Ext.tab.Bar' rel='Ext.tab.Bar' class='docClass'>Ext.tab.Bar</a></div><div class='dependency'><a href='#!/api/Ext.toolbar.Breadcrumb' rel='Ext.toolbar.Breadcrumb' class='docClass'>Ext.toolbar.Breadcrumb</a></div><div class='dependency'><a href='#!/api/Ext.toolbar.Toolbar' rel='Ext.toolbar.Toolbar' class='docClass'>Ext.toolbar.Toolbar</a></div><h4>Files</h4><div class='dependency'><a href='source/FocusableContainer2.html#Ext-util-FocusableContainer' target='_blank'>FocusableContainer.js</a></div></pre><div class='doc-contents'><p>A mixin for groups of Focusable things (Components, Widgets, etc) that\nshould respond to arrow keys to navigate among the peers, but keep only\none of the peers focusable by default (tabIndex=0)</p>\n\n<p>Some examples: Toolbars, Radio groups, Tab bars</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-activeChildTabIndex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.FocusableContainer'>Ext.util.FocusableContainer</span><br/><a href='source/FocusableContainer2.html#Ext-util-FocusableContainer-cfg-activeChildTabIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.FocusableContainer-cfg-activeChildTabIndex' class='name expandable'>activeChildTabIndex</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>DOM tabIndex attribute to set on the\nactive Focusable child of this container when using the \"Roaming tabindex\"\ntechn...</div><div class='long'><p>DOM tabIndex attribute to set on the\nactive Focusable child of this container when using the \"Roaming tabindex\"\ntechnique. Set this value to > 0 to precisely control the tabbing order\nof the components/containers on the page.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-enableFocusableContainer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.FocusableContainer'>Ext.util.FocusableContainer</span><br/><a href='source/FocusableContainer2.html#Ext-util-FocusableContainer-cfg-enableFocusableContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.FocusableContainer-cfg-enableFocusableContainer' class='name expandable'>enableFocusableContainer</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Enable or disable\nnavigation with arrow keys for this FocusableContainer. ...</div><div class='long'><p>Enable or disable\nnavigation with arrow keys for this FocusableContainer. This option may\nbe useful with nested FocusableContainers such as Grid column headers,\nwhen only the root container should handle keyboard events.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-inactiveChildTabIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.FocusableContainer'>Ext.util.FocusableContainer</span><br/><a href='source/FocusableContainer2.html#Ext-util-FocusableContainer-cfg-inactiveChildTabIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.FocusableContainer-cfg-inactiveChildTabIndex' class='name expandable'>inactiveChildTabIndex</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>DOM tabIndex attribute to set on\ninactive Focusable children of this container when using the \"Roaming tabindex\"\ntech...</div><div class='long'><p>DOM tabIndex attribute to set on\ninactive Focusable children of this container when using the \"Roaming tabindex\"\ntechnique. This value rarely needs to be changed from its default.</p>\n<p>Defaults to: <code>-1</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isFocusableContainer' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.FocusableContainer'>Ext.util.FocusableContainer</span><br/><a href='source/FocusableContainer2.html#Ext-util-FocusableContainer-property-isFocusableContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.FocusableContainer-property-isFocusableContainer' class='name expandable'>isFocusableContainer</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-mixinConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.FocusableContainer'>Ext.util.FocusableContainer</span><br/><a href='source/FocusableContainer2.html#Ext-util-FocusableContainer-property-mixinConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.FocusableContainer-property-mixinConfig' class='name expandable'>mixinConfig</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{id: &#39;focusablecontainer&#39;, before: {onAdd: &#39;onFocusableChildAdd&#39;, onRemove: &#39;onFocusableChildRemove&#39;, destroy: &#39;destroyFocusableContainer&#39;}, after: {afterRender: &#39;initFocusableContainer&#39;}}</code></p><p>Overrides: <a href=\"#!/api/Ext.form.FieldAncestor-property-mixinConfig\" rel=\"Ext.form.FieldAncestor-property-mixinConfig\" class=\"docClass\">Ext.form.FieldAncestor.mixinConfig</a></p></div></div></div><div id='property-privates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.FocusableContainer'>Ext.util.FocusableContainer</span><br/><a href='source/FocusableContainer2.html#Ext-util-FocusableContainer-property-privates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.FocusableContainer-property-privates' class='name expandable'>privates</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/Ext.container.Container-property-privates\" rel=\"Ext.container.Container-property-privates\" class=\"docClass\">Ext.container.Container.privates</a>, <a href=\"#!/api/Ext.form.FieldContainer-property-privates\" rel=\"Ext.form.FieldContainer-property-privates\" class=\"docClass\">Ext.form.FieldContainer.privates</a>, <a href=\"#!/api/Ext.panel.Bar-property-privates\" rel=\"Ext.panel.Bar-property-privates\" class=\"docClass\">Ext.panel.Bar.privates</a></p></div></div></div></div></div></div></div>","meta":{}});