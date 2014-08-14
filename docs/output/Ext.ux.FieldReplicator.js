Ext.data.JsonP.Ext_ux_FieldReplicator({"tagname":"class","name":"Ext.ux.FieldReplicator","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"FieldReplicator.js","href":"FieldReplicator.html#Ext-ux-FieldReplicator"}],"aliases":{"plugin":["fieldreplicator"]},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"init","tagname":"method","owner":"Ext.ux.FieldReplicator","id":"method-init","meta":{"private":true}},{"name":"onBlur","tagname":"method","owner":"Ext.ux.FieldReplicator","id":"method-onBlur","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.ux.FieldReplicator","short_doc":"A plugin for Field Components which creates clones of the Field for as\nlong as the user keeps filling them. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.ux.FieldReplicator</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/FieldReplicator.html#Ext-ux-FieldReplicator' target='_blank'>FieldReplicator.js</a></div></pre><div class='doc-contents'><p>A plugin for Field Components which creates clones of the Field for as\nlong as the user keeps filling them. Leaving the final one blank ends the repeating series.</p>\n\n\n<p>Usage:</p>\n\n\n<pre><code>    {\n        xtype: 'combo',\n        plugins: [ <a href=\"#!/api/Ext.ux.FieldReplicator\" rel=\"Ext.ux.FieldReplicator\" class=\"docClass\">Ext.ux.FieldReplicator</a> ],\n        triggerAction: 'all',\n        fieldLabel: 'Select recipient',\n        store: recipientStore\n    }\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-init' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.FieldReplicator'>Ext.ux.FieldReplicator</span><br/><a href='source/FieldReplicator.html#Ext-ux-FieldReplicator-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.FieldReplicator-method-init' class='name expandable'>init</a>( <span class='pre'>field</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onBlur' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.FieldReplicator'>Ext.ux.FieldReplicator</span><br/><a href='source/FieldReplicator.html#Ext-ux-FieldReplicator-method-onBlur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.FieldReplicator-method-onBlur' class='name expandable'>onBlur</a>( <span class='pre'>field</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});