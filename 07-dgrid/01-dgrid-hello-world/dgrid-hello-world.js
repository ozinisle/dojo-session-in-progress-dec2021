require([
    'dojo/_base/declare',
    'dgrid/Grid',
    'dgrid/Keyboard',
    'dgrid/Selection',
    'dojo/domReady!'
], function (declare, Grid, Keyboard, Selection) {

        //Phase 1
        // Hello world

        var data = [
            { first: 'Bob', last: 'Barker', age: 89 },
            { first: 'Vanna', last: 'White', age: 55 },
            { first: 'Pat', last: 'Sajak', age: 65 }
        ];
 
        // Create a new constructor by mixing in the components
        var CustomGrid = declare([ Grid, Keyboard, Selection ]);
 
        // Now, create an instance of our custom grid which
        // have the features we added!
        var grid = new CustomGrid({
            columns: {
                first: 'First Name',
                last: 'Last Name',
                age: 'Age'
            },
            // for Selection; only select a single row at a time
            selectionMode: 'single',
            // for Keyboard; allow only row-level keyboard navigation
            cellNavigation: false
        }, 'grid');
        grid.renderArray(data);

        //Phase 2
        //Handling Events
        grid.on('dgrid-select', function (event) {
            // Report the item from the selected row to the console.
            console.log('Row selected: ', event.rows[0].data);
        });

        grid.on('dgrid-deselect', function (event) {
            console.log('Row de-selected: ', event.rows[0].data);
        });

        //Phase 3
        //Event Delegation
        grid.on('.dgrid-row:click', function (event) {
            var row = grid.row(event);
            console.log('Row clicked:', row.id);
        });

});

//You can also define column data in the following format
// As an array of objects with field and label values
var columns = [
    {
        field: 'first',
        label: 'First Name'
    },
    {
        field: 'last',
        label: 'Last Name'
    },
    {
        field: 'age',
        label: 'Age'
    }
];

//as an hashmap
var columns = {
    first: {
        label: 'First Name'
    },
    last: {
        label: 'Last Name'
    },
    age: {
        label: 'Age'
    }
};