Ext.data.JsonP.Ext_ux_desktop_App({"tagname":"class","name":"Ext.ux.desktop.App","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"App.js","href":"App.html#Ext-ux-desktop-App"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":["Ext.util.Observable"],"requires":["Ext.container.Viewport","Ext.ux.desktop.Desktop"],"uses":[],"members":[{"name":"isReady","tagname":"property","owner":"Ext.ux.desktop.App","id":"property-isReady","meta":{"private":true}},{"name":"modules","tagname":"property","owner":"Ext.ux.desktop.App","id":"property-modules","meta":{"private":true}},{"name":"useQuickTips","tagname":"property","owner":"Ext.ux.desktop.App","id":"property-useQuickTips","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-constructor","meta":{}},{"name":"createWindow","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-createWindow","meta":{"private":true}},{"name":"getDesktop","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-getDesktop","meta":{"private":true}},{"name":"getDesktopConfig","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-getDesktopConfig","meta":{}},{"name":"getModule","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-getModule","meta":{"private":true}},{"name":"getModules","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-getModules","meta":{"private":true}},{"name":"getStartConfig","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-getStartConfig","meta":{}},{"name":"getTaskbarConfig","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-getTaskbarConfig","meta":{}},{"name":"init","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-init","meta":{"private":true}},{"name":"initModules","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-initModules","meta":{"private":true}},{"name":"onReady","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-onReady","meta":{"private":true}},{"name":"onUnload","tagname":"method","owner":"Ext.ux.desktop.App","id":"method-onUnload","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.ux.desktop.App","short_doc":"Ext JS Library\nCopyright(c) 2006-2014 Sencha Inc. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.ux.desktop.App</strong></div></div><h4>Mixins</h4><div class='dependency'>Ext.util.Observable</div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.container.Viewport' rel='Ext.container.Viewport' class='docClass'>Ext.container.Viewport</a></div><div class='dependency'><a href='#!/api/Ext.ux.desktop.Desktop' rel='Ext.ux.desktop.Desktop' class='docClass'>Ext.ux.desktop.Desktop</a></div><h4>Files</h4><div class='dependency'><a href='source/App.html#Ext-ux-desktop-App' target='_blank'>App.js</a></div></pre><div class='doc-contents'><p>Ext JS Library\nCopyright(c) 2006-2014 Sencha Inc.\nlicensing@sencha.com\nhttp://www.sencha.com/license</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isReady' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-property-isReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-property-isReady' class='name expandable'>isReady</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-modules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-property-modules' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-property-modules' class='name expandable'>modules</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-useQuickTips' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-property-useQuickTips' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-property-useQuickTips' class='name expandable'>useQuickTips</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.ux.desktop.App-method-constructor' class='name expandable'>Ext.ux.desktop.App</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.ux.desktop.App\" rel=\"Ext.ux.desktop.App\" class=\"docClass\">Ext.ux.desktop.App</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.ux.desktop.App\" rel=\"Ext.ux.desktop.App\" class=\"docClass\">Ext.ux.desktop.App</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-createWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-createWindow' class='name expandable'>createWindow</a>( <span class='pre'>module</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>module</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getDesktop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-getDesktop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-getDesktop' class='name expandable'>getDesktop</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getDesktopConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-getDesktopConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-getDesktopConfig' class='name expandable'>getDesktopConfig</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method returns the configuration object for the Desktop object. ...</div><div class='long'><p>This method returns the configuration object for the Desktop object. A derived\nclass can override this method, call the base version to build the config and\nthen modify the returned object before returning it.</p>\n</div></div></div><div id='method-getModule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-getModule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-getModule' class='name expandable'>getModule</a>( <span class='pre'>name</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getModules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-getModules' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-getModules' class='name expandable'>getModules</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getStartConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-getStartConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-getStartConfig' class='name expandable'>getStartConfig</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method returns the configuration object for the Start Button. ...</div><div class='long'><p>This method returns the configuration object for the Start Button. A derived\nclass can override this method, call the base version to build the config and\nthen modify the returned object before returning it.</p>\n</div></div></div><div id='method-getTaskbarConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-getTaskbarConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-getTaskbarConfig' class='name expandable'>getTaskbarConfig</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method returns the configuration object for the TaskBar. ...</div><div class='long'><p>This method returns the configuration object for the TaskBar. A derived class\ncan override this method, call the base version to build the config and then\nmodify the returned object before returning it.</p>\n</div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul><li>ready</li></ul></div></div></div><div id='method-initModules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-initModules' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-initModules' class='name expandable'>initModules</a>( <span class='pre'>modules</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modules</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-onReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-onReady' class='name expandable'>onReady</a>( <span class='pre'>fn, scope</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onUnload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.desktop.App'>Ext.ux.desktop.App</span><br/><a href='source/App.html#Ext-ux-desktop-App-method-onUnload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.desktop.App-method-onUnload' class='name expandable'>onUnload</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li>beforeunload</li></ul></div></div></div></div></div></div></div>","meta":{}});