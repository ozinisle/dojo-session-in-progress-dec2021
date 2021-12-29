require([
    "dojo/aspect",
    "dojo/_base/declare"
],function(aspect,declare) {


    // Part 1

    const Person = declare(null,{
        name:'',
        height:0, //in meters
        weight:0,   // in kilograms

        getBMI: function(height,weight) {
            height = height || this.height;
            weight = weight || this.weight;
            const bmi = weight/(height * height);
            console.log("getBMI function is being executed >>> Calculated BMI is >>> " + bmi);
            return bmi;
        }
    });

    const person = new Person();

    person.height = 1.8;

    person.weight = 98;


    //const bmiValue = person.getBMI();

    //console.log("BMI of the person is >>> ", bmiValue);


    //Part 2

    //before(target, methodName, advisingFunction);
    aspect.before(person, "getBMI", function(){
        console.log(" aspect.before >>> Executed before the getBMI function is called ")
        
    });

    //after(target, methodName, advisingFunction, receiveArguments)
    aspect.after(person,"getBMI",function(response) {
        
        console.log(" aspect.after >>> response is >>> "+ response);
    });

    aspect.around(person,"getBMI",function() {
        
        console.log(" aspect.around >>> Executed  >>> ")

    });

    const modifiedBmiValue = person.getBMI();
    
    console.log('modifiedBmiValue >>> ' + modifiedBmiValue);


    

})