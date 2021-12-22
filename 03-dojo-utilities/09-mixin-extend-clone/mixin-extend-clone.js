/*
Method:	                                lang.mixin	        declare.safeMixin	    lang.extend

Operates on             	                object	            object	            object.prototype

Mixes in constructor property	            yes	                no	                    yes

Mixes in multiple objects at once	        yes	                no	                    yes

Annotates functions to support 	            no	                yes	                    no
this.inherited

Speed	                                    fast	            slow	                fast

Use primarily with	                    A plain object	A declare instance	A constructor
*/


require(["dojo/_base/lang", "dojo/json", "dojo/dom", "dojo/on", "dojo/domReady!"], 
    function(lang, JSON, dom, on){

        var defaultSettings = {
            useTheForce: true,
            isEvil: false,
            length: 75,
            color: 'blue'
        };

        function Lightsaber(settings){
            // `defaultSettings` is first mixed into the blank object,
            // then `settings` is mixed into the blank object, overriding
            // any properties from `defaultSettings` without altering
            // the `defaultSettings` object
            this.settings = lang.mixin({}, defaultSettings, settings);
        }

        on(dom.byId('simpleMixin'),'click', function(event) {

            // lang.mixin
            // The lang.mixin method is a simple utility function that, given any number of objects as arguments, 
            // adds the properties of subsequent objects to the first object and returns it. 
            console.log("Simple Mixin");

            var currentUser = {}
            currentUser.name = "name";
            currentUser.phone = "3457869933"
            currentUser.address = "1, bose street"
            currentUser.city = "Kolkatta"
            currentUser.province = "Bengal"
            currentUser.country = "India"
            currentUser.postalCode="400111"

            var formData = {};
            formData.name = currentUser.name;
            formData.phone = currentUser.phone;
            formData.address = currentUser.address;
            formData.city = currentUser.city;
            formData.province = currentUser.province;
            formData.country = currentUser.country;
            formData.postalCode = currentUser.postalCode;

            console.log("formData:\n", JSON.stringify(formData, null, '\t'));
            
            //the above code is equivalent to
            var newFormData = {};
            lang.mixin(newFormData, currentUser);
        
            
            console.log("newFormData:\n", JSON.stringify(newFormData, null, '\t'));
            console.log("-------------------------------------------------------");

        });
        on(dom.byId('multipleMixin'),'click', function(event) {

            console.log("Multiple Mixin");

            
            console.log("defaultSettings:\n", JSON.stringify(defaultSettings, null, '\t'));

            

            var customSettings = {
                isEvil: true,
                color: 'red'
            };
            console.log("customSettings:\n", JSON.stringify(customSettings, null, '\t'));

            var darthsaber = new Lightsaber(customSettings);
        
            // { useTheForce: true, isEvil: true, length: 75, color: "red" }
            console.log("darthsaber:\n", JSON.stringify(darthsaber.settings, null, '\t'));
            console.log("-------------------------------------------------------");
        });
    
        // declare.safeMixin
        // declare.safeMixin primarily accomplishes the same task as lang.mixin, with three important differences:

        // It can only mix in one object at a time
        // It will not mix in the constructor property
        // It will add annotations to functions to make them function properly with declare's this.inherited function
        // Despite what the name implies, there is nothing “unsafe” about the original lang.mixin, unless:

        // You are adding functions to an instance of an object created with declare, and:
        // you rely on calls to this.inherited within those new functions, or
        // one or more of the mixins contains a constructor property

        // lang.extend
        // Assume Lightsaber is defined as in the previous example

        on(dom.byId('lang_extend'),'click', function(event) {
            // lang.extend
            // -------------
            // lang.extend is very similar to lang.mixin, except that it adds properties to the first 
            // object's prototype instead of directly on the object itself. Directly augmenting an object's 
            // prototype is useful if you want to make changes that immediately affect all inheriting instances:
            console.log("lang.extend");
            var darthsaber = new Lightsaber({
                isEvil: true,
                color: "red"
            });

            var weaponMixin = {
                hp: 5,
                maxHp: 10,
                repair: function() {
                    if(this.hp >= this.maxHp) {
                        console.log("Can't repair!");
                        return;
                    }

                    this.hp++;
                },
                swing: function() {
                    if(!this.hp) {
                        console.log("Weapon is broken!");
                        return;
                    }

                    this.hp--;
                    console.log(Math.random() >= 0.5 ? "hit!" : "miss!");
                }
            };

            lang.extend(Lightsaber, weaponMixin);

            // Now we can call swing() on our Lightsaber instance,
            // even though we augmented the prototype after creating the instance.
            darthsaber.swing(); // "hit!" (or "miss!" if you are unlucky)

            console.log("-------------------------------------------------------");
        });

        on(dom.byId('shallowCopy'),'click', function(event) {
            console.log("Shallow Copy");
            var a = {
                name: "a",
                subObject: {
                    foo: "bar"
                }
            };
            var b = lang.mixin({}, a);
            
            b.name = "b";
            b.subObject.foo = "baz";
            
            console.log("a b, as expected:",
                a.name, b.name);
            console.log("true - both subObjects reference the exact same object:",
                a.subObject === b.subObject);
            console.log("baz baz - a change to one subObject affects both:",
                a.subObject.foo, b.subObject.foo);
            console.log("-------------------------------------------------------");
        });

        on(dom.byId('deepCopy'),'click', function(event) {
            console.log("Deep Copy");
            var a = {
                name: "a",
                subObject: {
                    foo: "bar"
                }
            };
            var b = lang.clone(a);
            
            b.name = "b";
            b.subObject.foo = "baz";
            
            console.log("a b, same as before:",
                a.name, b.name);
            console.log("false - the subObjects are different now:",
                a.subObject === b.subObject);
            console.log("bar baz - a change to one subObject no longer affects all:",
                a.subObject.foo, b.subObject.foo);
            console.log("-------------------------------------------------------");
        });
    });

