/* jce - 2.6.19 | 2017-08-10 | http://www.joomlacontenteditor.net | Copyright (C) 2006 - 2017 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){tinymce.create("tinymce.plugins.Browser",{init:function(ed,url){var self=this;self.ed=ed,ed.addCommand("mceFileBrowser",function(ui,args,win){self.open(args,win)})},open:function(args,win){args=args||{};var ed=this.ed;return ed.windowManager.open({file:ed.getParam("site_url")+"index.php?option=com_jce&view=editor&plugin=browser"+(args.caller?"."+args.caller:"")+(args.filter?"&filter="+args.filter:""),inline:"yes",close_previous:"no",size:"mce-modal-square-xlarge",width:896,height:707},args),!1}}),tinymce.PluginManager.add("browser",tinymce.plugins.Browser)}();