require([
    'dstore/RequestMemory',
    'dgrid/OnDemandGrid'
], function (RequestMemory, OnDemandGrid) {
    var grid = new OnDemandGrid({
        collection: new RequestMemory({ target: '../../data/hof-batting.json' }),
        subRows: [
            [
                { field: 'first', label: 'First', rowSpan: 2 },
                { field: 'last', label: 'Last', rowSpan: 2 },
                { field: 'bats', label: 'Bats', rowSpan: 2 },
                { field: 'throws', label: 'Throws', rowSpan: 2 },
                { field: 'totalG', label: 'G' },
                { field: 'totalAB', label: 'AB' },
                { field: 'totalR', label: 'R' },
                { field: 'totalRBI', label: 'RBI' },
                { field: 'totalBB', label: 'BB' },
                { field: 'totalK', label: 'K' }
            ],
            [
                { field: 'totalGAB', label: 'Games as Batter', colSpan: 2 },
                { field: 'totalH', label: 'H' },
                { field: 'total2B', label: '2B' },
                { field: 'total3B', label: '3B' },
                { field: 'totalHR', label: 'HR' }
            ]
        ]
    }, 'grid');
 
    grid.startup();
});