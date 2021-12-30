require([
    'dojo/_base/declare',
    'dstore/RequestMemory',
    'dgrid/Grid',
    'dgrid/extensions/Pagination'
], function (declare, RequestMemory, Grid, Pagination) {
    // Create a Grid instance using Pagination, referencing the store
    var grid = new (declare([ Grid, Pagination ]))({
        collection: new RequestMemory({ target: '../../data/hof-batting.json' }),
        className: 'dgrid-autoheight',
        columns: {
            first: 'First Name',
            last: 'Last Name',
            totalG: 'Games Played'
        }
    }, 'grid');
 
    grid.startup();
});