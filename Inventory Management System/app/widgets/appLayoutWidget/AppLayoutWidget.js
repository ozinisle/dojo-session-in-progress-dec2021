define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/dom",
	"dojo/text!./AppLayoutWidget.html",
	"dijit/layout/BorderContainer",
	"dijit/layout/TabContainer",
	"dijit/layout/ContentPane"
], function (declare, _WidgetBase, _TemplatedMixin, dom, template, BorderContainer, TabContainer, ContentPane) {
	//debugger;
	return declare([_WidgetBase, _TemplatedMixin], {

		// Our template - important!
		templateString: template,

		// A class to be applied to the root node in our template
		baseClass: "app-layout-widget",

		targetNode: null,


		appLayout:null,

		constructor:function(targetContainer) {
			if(typeof targetContainer === "String") {
				this.targetNode = dom.byId(targetContainer);
			} else {
				this.targetNode = targetContainer
			}
			this.inherited(arguments)
		},


		buildRendering: function() {

			this.inherited(arguments);

			// create the BorderContainer and attach it to our appLayout div
			var appLayout = new BorderContainer({
				design: "headline",
				
			}, this.targetNode);

			// create and add the BorderContainer edge regions
			appLayout.addChild(
				new ContentPane({
					region: "top",
					id: "app-layout-header-panel", 
					"class": "app-layout-header-panel",
					//content: "Header content (top)"
					href: "app/templates/header-template.html",
				})
			);
			appLayout.addChild(
				new ContentPane({
					region: "left",
					id: "app-layout-side-nav-panel", 
					"class": "app-layout-side-nav-panel",
					//content: "Sidebar content (left)",
					href: "app/templates/side-nav-template.html",
					//splitter: true
				})
			);

			appLayout.addChild(
				new ContentPane({
					region: "center",
					id: "app-layout-content-panel", 
					"class": "app-layout-content-panel",
					//content: "Content Panel (center)",
					href: "app/templates/content-template.html",
					//splitter: true
				})
			);
			appLayout.addChild(
				new ContentPane({
					region: "bottom",
					id: "app-layout-footer-panel", 
					//"class": "app-layout-footer-panel",
					href: "app/templates/footer-template.html",
					//content: "Footer content (bottom)"
				})
			);

			this.appLayout = appLayout;
		},

		postCreate: function () {

			this.inherited(arguments);

			//add widget css to the page header
			// const authorWidgetCss = dom.byId('authorWidgetCsslink');
			// if (!authorWidgetCss) {
			// 	const currentWidgetLocation = dojoConfig.packages
			// 		.filter(package => package.name === "app-widgets")[0].location;
			// 	const widgetCssFilePath = `${currentWidgetLocation}/appLayoutWidget/AppLayoutWidget.css`;

			// 	const firstLink = query('link')[0];
			// 	if (firstLink) {
			// 		domConstruct.create('link', {
			// 			rel: 'stylesheet',
			// 			href: widgetCssFilePath,
			// 			id: 'app-layout-widget-css'
			// 		}, firstLink, 'after');
			// 	} else {
			// 		domConstruct.create('link', {
			// 			rel: 'stylesheet',
			// 			href: widgetCssFilePath,
			// 			id: 'app-layout-widget-css'
			// 		}, win.get(document).document.head);
			// 	}


			// }
		},

		getLayout: function() {
			return this.appLayout;
		}
	});
});