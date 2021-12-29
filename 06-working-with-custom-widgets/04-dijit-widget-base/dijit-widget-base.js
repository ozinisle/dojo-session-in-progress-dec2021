

require([
    "dojo/_base/declare", 
    "dojo/dom-construct", 
    "dojo/parser", 
    "dojo/ready",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/dom-style",
    "dojo/_base/window",
    "dojo/dom"
], function(declare, domConstruct, parser, ready, 
        _WidgetBase, _TemplatedMixin, 
        domStyle, win,dom){

    //Phase 1
    declare("MyFirstBehavioralWidget", [_WidgetBase], {
        
        buildRendering: function(){
            // create the DOM for this widget
            this.domNode = domConstruct.create("button", {innerHTML: "push me"});
        }
    });

    //Phase 2
    declare("Counter", [_WidgetBase], {
        // counter
        _i: 0,

        buildRendering: function(){
            // create the DOM for this widget
            this.domNode = domConstruct.create("button", {innerHTML: "Counter Value >> " + this._i});
        },

        postCreate: function(){
            // every time the user clicks the button, increment the counter
            this.connect(this.domNode, "onclick", "increment");
        },

        increment: function(){
            this.domNode.innerHTML = "Counter Value >> " + ++this._i;
        }
    });

    //Phase 3
    //Declaring attributes
    declare("FancyCounter", [_WidgetBase, _TemplatedMixin], {
        // counter
        _i: 0,

        templateString: "<div>" +
            "<button data-dojo-attach-event='onclick: increment'>press me</button>" +
            "&nbsp; count: <span data-dojo-attach-point='counter'>0</span>" +
            "</div>",

        increment: function(){
            this.counter.innerHTML = ++this._i;
        }
    });

    //Phase 4
    //Mapping widget attributes to DOMNode attributes
    require([
        "dojo/_base/declare", "dojo/parser", "dojo/ready",
        "dijit/_WidgetBase", "dijit/_TemplatedMixin"
    ], function(declare, parser, ready, _WidgetBase, _TemplatedMixin){
   
        declare("BusinessCard", [_WidgetBase, _TemplatedMixin], {
            templateString:
                "<div class='businessCard'>" +
                    "<div>Name: <span data-dojo-attach-point='nameNode'></span></div>" +
                    "<div>Phone #: <span data-dojo-attach-point='phoneNode'></span></div>" +
                "</div>",
   
            // Attributes
            name: "unknown",
            _setNameAttr: { node: "nameNode", type: "innerHTML" },
   
            nameClass: "employeeName",
            _setNameClassAttr: { node: "nameNode", type: "class" },
   
            phone: "unknown",
            _setPhoneAttr: { node: "phoneNode", type: "innerHTML" }
        });
        
        //CAUTION: Calling parser.parse() multiple times wont work
        //CAUTION: IT WILL ACTUALLY ERROR OUT AS IT TRIES TO REGISTER WIDGETS EVERY TIME ITS CALLED 
        //CAUTION: AND ENDS UP REGISTERING DUPLICATE WIDGETS


        // ready(function(){
        //     // Call the parser manually so it runs after our widget is defined, and page has finished loading
        //     parser.parse();
        // });
    });

    //Phase 5
    //Custom Getters and Setters
    declare("HidePane", [_WidgetBase], {
         // parameters
         open: true,

         _setOpenAttr: function(/*Boolean*/ open){
             this._set("open", open);
             domStyle.set(this.domNode, "display", open ? "block" : "none");
         }
    });


     //Phase 6
     //Life cycle - buildRendering() happens  before postCreate(). 
     //CAUTION:: NO CODE IN buidRendering() SHOULD DEPEND ON postCreate()

    dojo.declare("my.Thinger", _WidgetBase, {

        value:9,
   
        buildRendering: function(){
             this.inherited(arguments);
             this.multiplier = 3;
        },
   
        //THIS IS NOT A GETTER/SETTER
        //GETS CALLED AT THE TIME OF OBJECT INSTANTIATION
        //TRIGGERED AFTER buildRendering() METHOD, BUT BEFORE postCreate()
        _setValueAttr: function(value){
            this.value = value * this.multiplier;  //NOTE :: this.multipler is defined in buildRendering
            console.log("value set to my.Thinger >>>", this.value)
        }
   
    });

    //Phase 7
    //Extending existing widgets
    declare("MyButton", [_WidgetBase, _TemplatedMixin], {
        templateString:
        "<button data-dojo-attach-point='containerNode'></button>"
    });

    //Phase 8
    //Life Cycle
    declare("LifeCycleWidget", [_WidgetBase, _TemplatedMixin], {

        lastAccessed: (new Date()).getTime(),

        title:'', // ITS just a convention to name variables to be considered as private 
                    // with underscore in the beginning
                    //This will stiff be accessible  outside the method

        templateString:
            `<div>
                Content of LifeCycleWidget
            </div>`,

        constructor: function(args){
            declare.safeMixin(this,args);

            console.log("LifeCycleWidget >>>", "Constructor triggered");
        },

        postMixInProperties: function() {
            this.inherited(arguments);

            console.log("LifeCycleWidget >>>", "postMixInProperties triggered");
        },

        buildRendering: function() {
            this.inherited(arguments);

            console.log("LifeCycleWidget >>>", "buildRendering triggered");
        },

        _setLastAccessedAttr: function() {
            this.lastAccessed = (new Date()).getTime();

            console.log("LifeCycleWidget >>>", "setters triggered");
        },

        _getLastAccessedAttr: function() {
            //this.lastAccessed = (new Date()).getTime();

            console.log("LifeCycleWidget >>>", "getter >>> _getLastAccessedAttr triggered");
            return this.lastAccessed;
        },

        _setTitleAttr: function() {
            console.log("LifeCycleWidget >>>", "_title is a private variable. Set >>> Access Denied");
            return false;
        },

        _getTitleAttr: function() {
            console.log("LifeCycleWidget >>>", "_title is a private variable. Get >>> Access Denied");
            return false;
        },

        postCreate: function() {
            this.inherited(arguments);

            console.log("LifeCycleWidget >>>", "postCreate triggered");
        },

        resize: function() {
            this.inherited(arguments);

            console.log("LifeCycleWidget >>>", "resize triggered");
        },

        startup: function() {
            //All widgets that do JS sizing should have a method called resize(), 
            //that lays out the widget. Resize() should be called from startup() and will also be called by parent widgets like dijit.layout.ContentPane.
            this. resize();

            console.log("LifeCycleWidget >>>", "startup triggered");
        },

        destroy: function() {
            this.inherited(arguments);

            console.log("LifeCycleWidget >>>", "destroy triggered");
        },

    });

    
     

    //Phase 9
    //Enforcing private scope
    // declare("PrivateScopedVariables", [_WidgetBase, _TemplatedMixin], {

    //     _encryptionMethod:'SHA256/SHA512',

    //     secrectKey:'secrect token', // ITS just a convention to name variables to be considered as private 
    //                 // with underscore in the beginning
    //                 //This will stiff be accessible  outside the method

    //     templateString:
    //         `<div>
    //             Enforcing private scope on variables
    //         </div>`,

    //     getSecretValues:function() {
    //         this.internalProcessFlag = true;
    //         const securityValues = {
    //             encryptionKey: this._encryptionMethod, 
    //             secrectKey: this.secrectKey
    //         };
    //         console.log("secrect values are >>> ", securityValues);
    //         this.internalProcessFlag = false;
    //         return securityValues;
    //     },
    

    //     constructor: function(args){
    //         declare.safeMixin(this,args);

    //         console.log("LifeCycleWidget >>>", "Constructor triggered");
    //     },

    //     buildRendering: function(){
    //         this.inherited(arguments);
    //    },

    //     _getSecrectKeyAttr: function() {
    //         console.log("PrivateScopedVariables","get secrectKey >>> ", "Access Denied");
    //         return false;
    //     },

    //     _setSecrectKeyAttr: function() {
    //             console.log("PrivateScopedVariables","set secrectKey >>> ", "Access Denied");
    //             return false;
    //     },

    //     _get_encryptionMethodAttr: function() {
    //             console.log("PrivateScopedVariables","get _encryptionMethod >>> ", "Access Denied");
    //             return false;
    //     },

    //     _set_encryptionMethodAttr: function() {
    //             console.log("PrivateScopedVariables","set _encryptionMethod >>> ", "Access Denied");
    //             return false;
    //     },

        
    //     postCreate: function() {
    //         this.internalProcessFlag = false;
    //     },

     

    // });

    ready(function(){
        // Call the parser manually so it runs after our widget is defined, and page has finished loading
        parser.parse();

        //Phase 1

        // Create the widget programmatically and place in DOM
        //(new MyFirstBehavioralWidget()).placeAt(win.body());

        //Phase 6
        const myThinger = new my.Thinger();
        myThinger.value = 10;
        
        const processedValue = myThinger.value;

        //Phase 8
        const lifeCycleWidget = new LifeCycleWidget();
        lifeCycleWidget.get('lastAccessed');
        lifeCycleWidget.placeAt(dom.byId('LifeCycleWidget_container'));

        window.lifeCycleWidget = lifeCycleWidget;

        //Phase 9
        //Watch method

        lifeCycleWidget.watch("lastAccessed", function(attr, oldVal, newVal){
            console.log(`old value was >>> ${oldVal} , and the new value is >>> ${newVal}`);
        });

        lifeCycleWidget._set('lastAccessed','modified value');
        //watch the console for output

        //Phase 10
        // const privateScopedVariables = new PrivateScopedVariables();
        // privateScopedVariables.set("_encryptionMethod","MD5");
        // privateScopedVariables.set("secrectKey", "Modified Secrect token");

        // privateScopedVariables.get("_encryptionMethod");
        // privateScopedVariables.get("secrectKey");

        // privateScopedVariables.placeAt(dom.byId('PrivateScopedVariables_container'));
        // window.privateScopedVariables = privateScopedVariables;

        // privateScopedVariables.getSecretValues();
    });
});