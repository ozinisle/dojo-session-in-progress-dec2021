//dojo/_base/array

require([
    "dojo/_base/array",
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/domReady!"
], function(arrayUtil,dom,domConstruct,on) {
    var arr1 = [1,2,3,4,3,2,1,2,3,4,3,2,1];
    
    log = console.log;

    //indexOf(arrayToSearch,ObjectToSearch,optional StartIndex)
    log('[1,2,3,4,3,2,1,2,3,4,3,2,1] indexOf 2 is >>> ' + arrayUtil.indexOf(arr1, 2)); // returns 1
    log('[1,2,3,4,3,2,1,2,3,4,3,2,1] indexOf 2 starting from position 2 is >>> ' + arrayUtil.indexOf(arr1, 2, 2)); // returns 5

    //indexOf(arrayToSearch,ObjectToSearch,optional StartIndex)
    log('[1,2,3,4,3,2,1,2,3,4,3,2,1] lastIndexOf 2 is >>> ' + arrayUtil.lastIndexOf(arr1, 2)); // returns 11


    var obj1 = { id: 1 },
    arr2 = [{ id: 0 }, obj1, { id: 2 }, { id: 3 }];

    // This search returns 1, as obj1 is the second item
    // in the array.
    log('arrayUtil.indexOf(arr2, obj1) is >>> ' + arrayUtil.indexOf(arr2, obj1));

    // This search returns 1, as obj1 is the second item
    // in the array.
    log('arrayUtil.indexOf(arr2, obj1) is >>> ' + arrayUtil.indexOf(arr2, obj1));

    // This search returns -1. While the objects may look similar,
    // they are entirely different objects, and so this object
    // isn't found in the array.
    log('arrayUtil.indexOf(arr2, { id: 1 }) is >>> ' + arrayUtil.indexOf(arr2, { id: 1 }));

    arr3 = [{ id: 0 }, {id:1}, { id: 2 }, { id: 3 }];
    // This search returns -1. While the objects may look similar,
    // they are entirely different objects, and so this object
    // isn't found in the array.
    log('arrayUtil.indexOf(arr3, { id: 1 }) is >>> ' + arrayUtil.indexOf(arr3, { id: 1 }));

    var obj2 = { id: 1 , nest: { prop1:[1,2],prop2:null,prop3:{nest:{}}}},
    arr4 = [{ id: 0 }, obj2, { id: 2 }, { id: 3 }];
    // This search returns 1, as obj2 is the second item
    // in the array.
    // Proof that this works with nested objects as well
    log('arrayUtil.indexOf(arr4, obj2) is >>> ' + arrayUtil.indexOf(arr4, obj2));


    on(dom.byId('createList'),'click',function(event) {
        var arr = ["one", "two", "three", "four"],
            // dom is from dojo/dom
            list1 = dom.byId("list1");

        //validation example    
        domConstruct.empty(list1);

        // Skip over index 4, leaving it undefined
        arr[5] = "six";

        //foreach method
        // param 1 - array to iterate over
        // param 2 - a call back funciton to call for each item of the array
        // param 3 - an optional object to use as the scope in which to call the callback
        arrayUtil.forEach(arr, function(item, index){
            // This function is called for every item in the array
            if(index == 3){
                // this changes the original array,
                // which changes the item passed to
                // the sixth invocation of this function
                arr[5] = "seven";
            }

            // domConstruct is available at dojo/dom-construct
            domConstruct.create("li", {
                innerHTML: item + " (" + index + ")"
            }, list1);
        });
    });

    on(dom.byId('createSecondList'),'click',function(event) {
        var arr = ["five", "six", "seven", "eight"];
        var list2 = dom.byId("list2"),
        myObject = {
            prefix: "ITEM: ",
            formatItem: function(item, index){
                return this.prefix + item + " (" + index + ")";
            },
            outputItems: function(arr, node){
                //foreach method
                // param 1 - array to iterate over
                // param 2 - a call back funciton to call for each item of the array
                // param 3 - an optional object to use as the scope in which to call the callback
                arrayUtil.forEach(arr, function(item, index){
                    domConstruct.create("li", {
                        innerHTML: this.formatItem(item, index)
                    }, node);
                }, this);
            }
        };

        myObject.outputItems(arr, list2);
    });

    on(dom.byId('transformArrays'),'click',function(event) {
        var original = ["one", "two", "three", "four", "five"],
        transformed = [];

        arrayUtil.forEach(original, function(item, index){
            transformed.push({
                id: index * 100,
                text: item
            });
        }); // [ { id: 0, text: "one" }, { id: 100, text: "two" }, ... ]

        var mapped = arrayUtil.map(original, function(item, index){
            return {
                id: index * 100,
                text: item
            };
        });

        var filtered = arrayUtil.filter(mapped, function(item, index){
            return item.id > 50 && item.id < 350;
        });

        log("original >>> ");
        log(original);

        log("transfored >>> ");
        log(transformed);

        log("mapped >>> ");
        log(mapped);

        log("filtered >>> ");
        log(filtered);

        dom.byId('transformArraysResult').innerHTML = "Please check console log for output statements";
    });

    on(dom.byId('everyAndSomeTest'),'click',function(event){
        var arr1 = [1,2,3,4,5],
        arr2 = [1,1,1,1,1];

        log('Test if every item is 1 in arr1 >>>' + arrayUtil.every(arr1, function(item){ return item == 1; })); // returns false
        log('Test if some item is 1 in arr1 >>>' + arrayUtil.some(arr1, function(item){ return item == 1; }));  // returns true

        log('Test if every item is 2 in arr1 >>>' + arrayUtil.every(arr2, function(item){ return item == 1; })); // returns true
        log('Test if some item is 2 in arr1 >>>' + arrayUtil.some(arr2, function(item){ return item == 1; }));  // returns true

        log('Test if every item is 2 in arr2 >>>' + arrayUtil.every(arr2, function(item){ return item == 2; })); // returns false
        log('Test if some item is 2 in arr2 >>>' + arrayUtil.some(arr2, function(item){ return item == 2; }));  // returns false
    
        dom.byId('everyAndSomeTestResult').innerHTML = "Please check console for output logs";
    });

});