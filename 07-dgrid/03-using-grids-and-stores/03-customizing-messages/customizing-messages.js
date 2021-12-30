
		require([
			'dojo/_base/declare',
			'dojo/Deferred',
			'dstore/Memory',
			'dstore/RequestMemory',
			'dstore/QueryResults',
			'dgrid/Grid',
			'dgrid/OnDemandGrid',
			'dgrid/extensions/Pagination'
		], function (declare, Deferred, Memory, RequestMemory, QueryResults, Grid, OnDemandGrid, Pagination) {

			var store = new (declare(RequestMemory, {
				fetchRange: function () {
					// Override RequestMemory's fetchRange method with
					// one that introduces a delay.
					var dfd = new Deferred();
					var promise = this.inherited(arguments);
					promise.then(function (data) {
						// Add an artificial delay of 1 second
						setTimeout(function () {
							dfd.resolve(data);
						}, 1000);
					});
					return new QueryResults(dfd, {
						totalLength: promise.totalLength
					});
				}
			}))({
				target: '../../data/hof-batting.json'
			});
			// Once the response is received, build an in-memory store with the data
			var emptyStore = new Memory({ data: [] });
			var columns = {
					first: 'First Name',
					last: 'Last Name',
					totalG: 'Games Played'
				};

			// Create a Grid instance using Pagination, referencing the store
			var grid = new (declare([ Grid, Pagination ]))({
				collection: store,
				columns: columns,
				loadingMessage: 'Loading data...',
				noDataMessage: 'No results found.'
			}, 'grid');
			grid.startup();

			var emptyGrid = new OnDemandGrid({
				collection: emptyStore,
				columns: columns,
				loadingMessage: 'Loading data...',
				noDataMessage: 'No results found.'
			}, 'emptyGrid');
			emptyGrid.startup();
		});
	