require([
    'dstore/RequestMemory',
    'dgrid/OnDemandGrid'
], function (RequestMemory, OnDemandGrid) {
 
    var grid = new OnDemandGrid({
        collection: new RequestMemory({ target: '../../data/hof-batting.json' }),
        columns: [
            { field: 'first', label: 'First' },
            { field: 'last', label: 'Last' }
        ]
    }, 'grid');
 
    grid.startup();
});