require([
    'dojo/_base/declare',
    'dojo/Deferred',
    'dstore/RequestMemory',
    'dstore/QueryResults',
    'dgrid/OnDemandGrid'
], function (declare, Deferred, RequestMemory, QueryResults, OnDemandGrid) {
    function getColumns() {
        return {
            first: 'First Name',
            last: 'Last Name',
            totalG: 'Games Played'
        };
    }

    var store = new (declare(RequestMemory, {
        fetchRange: function () {
            // Override RequestMemory's fetchRange method with
            // one that introduces a delay.
            var dfd = new Deferred();
            var promise = this.inherited(arguments);
            promise.then(function (data) {
                // Add an artificial delay of 500ms
                setTimeout(function () {
                    dfd.resolve(data);
                }, 500);
            });
            return new QueryResults(dfd, {
                totalLength: promise.totalLength
            });
        }
    }))({
        target: '../../data/hof-batting.json'
    });

    // Create an instance of OnDemandGrid referencing the store
    var grid1 = new OnDemandGrid({
        collection: store,
        columns: getColumns(),
        farOffRemoval: 500
    }, 'grid1');
    grid1.startup();

    var grid2 = new OnDemandGrid({
        collection: store,
        columns: getColumns(),
        farOffRemoval: 10000, // larger than total height of data; never remove rows
        minRowsPerPage: 50 // request more data at a time
    }, 'grid2');
    grid2.startup();
});