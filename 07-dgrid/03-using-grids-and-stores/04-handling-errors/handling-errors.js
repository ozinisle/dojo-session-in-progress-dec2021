
		require([
			'dojo/Deferred',
			'dojo/dom',
			'dojo/on',
			'dstore/Memory',
			'dstore/RequestMemory',
			'dgrid/OnDemandGrid'
		], function (Deferred, dom, on, Memory, RequestMemory, OnDemandGrid) {
			function causeError() {
				var dfd = new Deferred();
				dfd.reject('An error occurred while retrieving data.');
				return dfd.promise;
			}
			var store = new RequestMemory({ target: '../../data/hof-batting.json' });
			var errorStore = new Memory({
					fetch: causeError,
					fetchRange: causeError
				});

			// Create an instance of OnDemandGrid referencing the store
			var grid = new OnDemandGrid({
				collection: store,
				columns: {
					first: 'First Name',
					last: 'Last Name',
					totalG: 'Games Played'
				}
			}, 'grid');

			var messageNode = dom.byId('message'),
				button = dom.byId('switchStore');

			grid.on('dgrid-error', function(event) {
				// Display an error message above the grid when an error occurs.
				messageNode.innerHTML = event.error.message;
				messageNode.className = 'errorMessage';
			});

			grid.on('dgrid-refresh-complete', function(event) {
				// Hide any previous error message when a refresh completes successfully.
				messageNode.className = 'errorMessage hidden';
				messageNode.innerHTML = '';
			});

			on(button, 'click', function() {
				grid.set('collection', grid.get('collection') === store ? errorStore : store);
			});

			grid.startup();
		});
	