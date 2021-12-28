require([
    "dojo/parser", 
    "dijit/form/ValidationTextBox"],function(parser, ValidationTextBox){

        //Note:: after5 gets hoisted to global scope and hence is available for the 
        //widgets in the html page

         after5 = function(constraints){
            var date = new Date();
            if(date.getHours() <= 17){
                return "\\d{5}";
            }else{
                return "\\D+";
            }
        }
    });