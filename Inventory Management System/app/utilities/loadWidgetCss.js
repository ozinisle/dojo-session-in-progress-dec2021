function addWidgetCssToPage(cssLinkId,widgetCssPath) {
    const authorWidgetCss = dom.byId(cssLinkId);
			if (!authorWidgetCss) {
				const currentWidgetLocation = dojoConfig.packages
					.filter(package => package.name === "app-widgets")[0].location;
				const widgetCssFilePath = `${currentWidgetLocation}${widgetCssPath}`;

				const firstLink = query('link')[0];
				if (firstLink) {
					domConstruct.create('link', {
						rel: 'stylesheet',
						href: widgetCssFilePath,
						id: cssLinkId
					}, firstLink, 'after');
				} else {
					domConstruct.create('link', {
						rel: 'stylesheet',
						href: widgetCssFilePath,
						id: cssLinkId
					}, win.get(document).document.head);
				}


			}
}