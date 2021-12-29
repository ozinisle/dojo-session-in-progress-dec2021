
// Bring in our custom widget
require(["dojo/request", "dojo/dom", "dojo/_base/array", "app/authorWidget/AuthorWidget", "dojo/domReady!"],
	function(request, dom, arrayUtil, AuthorWidget){
		// Load up our authors
		request("./data/authors.json", {
			handleAs: "json"
		}).then(function(authors){
			// Get a reference to our container div
			var authorContainer = dom.byId("authorContainer");

			arrayUtil.forEach(authors, function(author){
				// Create our widget and place it
				console.log(author);
				var widget = new AuthorWidget(author).placeAt(authorContainer);
			});
		});
	});