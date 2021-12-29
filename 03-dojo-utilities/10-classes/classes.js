
require([
        "dojo/_base/lang",
        "dojo/_base/declare"
    ],function (lang,declare){
        var Person = declare(null, {

            // the constructor
            constructor: function(args){
                declare.safeMixin(this,args);
            },

            className: 'Person',
        
            name: '',
        
            gender: '',
        
            age: 0,

            jobStatus: 'unknown',
        
            getClassName: function() {
                return this.className;
            },
        
            getName: function() {
                return this.name;
            },
            getGender: function() {
                return this.gender;
            },
            getAge: function() {
                return this.age;
            },
            getJobStatus: function() {
                return this.jobStatus;
            },

        });

        var Employee = declare(Person,{

            className: 'Employee',

            organization:'Cognizant',

            jobStatus:'employed',

            specialist: false,
        
            getOrganization: function() {
                return this.organization;
            },

            isSpecialist: function() {
                return this.specialist;
            }
        });

        var Specialist = declare([
            Person,
            Employee
        ],{

            className: 'Specialist',

            organization:'Freelancer',
        
            speciality: '',

            specialist: true,

            getSpeciality: function() {
                return this.speciality;
            },

            listCapability: function() {
                console.log('Person','Employee','Specialist');
            }
        });

        var SuperSpecialist = declare([
            Person,
            Employee,
            Specialist
        ],{
            className: 'SuperSpecialist',
        
            superSpeciality: '',

            superSpecialist: true,

            getSuperSpeciality: function() {
                return this.superSpeciality;
            },

            isSuperSpecialist: function() {
                return this.superSpecialist;
            },

            listCapability: function() {
                this.inherited(arguments); //executes parent class' listCapability method as well
                console.log('Super Specialist');
            }
        });

        const employee = new Employee();

        console.log('employee.getOrganization() >>> ', employee.getOrganization()); //prints Cognizant
        console.log('employee.getClassName() >>> ', employee.getClassName());   //prints Employee

        const superSpecialist = new SuperSpecialist( { name:"Ravi Chandran" } );
        superSpecialist.speciality = "Networking";

        console.log('superSpecialist.getName() >>> ', superSpecialist.getName());   //prints Employee
        console.log('superSpecialist.isSpecialist() >>> ', superSpecialist.isSpecialist()); //prints true
        console.log('superSpecialist.getOrganization() >>> ', superSpecialist.getOrganization());   //prints Employee
    
        superSpecialist.listCapability();
    }
);








