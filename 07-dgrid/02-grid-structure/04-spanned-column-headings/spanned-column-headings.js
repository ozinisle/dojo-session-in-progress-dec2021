require([
    'dstore/RequestMemory',
    'dgrid/OnDemandGrid',
    'dojo/_base/declare',
    'dgrid/extensions/CompoundColumns'
], function (RequestMemory, OnDemandGrid, declare, CompoundColumns) {
    var CustomGrid = declare([ OnDemandGrid, CompoundColumns ]);
    var grid = new CustomGrid({
        collection: new RequestMemory({ target: '../../data/hof-batting.json' }),
        columns: [
            {
                label: 'Full Name',
                children: [
                    { field: 'first', label: 'First' },
                    { field: 'last', label: 'Last' }
                ]
            },
            { field: 'totalGAB', label: 'Games as Batter' }
        ]
    }, 'grid');
 
    grid.startup();
});