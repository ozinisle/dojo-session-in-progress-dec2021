require(["dojo/date", "dojo/dom", "dojo/on","dojo/domReady!"], function (date, dom, on) { // AMD allows us to use the color functions under the alias name "Color"


    var date1 = new Date(2000, 2, 1);
    console.log(`Date(2000, 2, 1) :: date1.toUTCString() >>> ${date1.toUTCString()}`);
     // note that even toUTCString output is implementation-dependent
    // output: "Wed, 01 Mar 2000 05:00:00 GMT"

    var date2 = date.add(date1, "month", -1);
    console.log(`date.add(date1, "month", -1) :: date2.toUTCString()}>>> ${date2.toUTCString()}`);
    // output: "Tue, 01 Feb 2000 05:00:00 GMT"

    console.log(`date.difference(date1, date2, "day") >>> ${date.difference(date1, date2, "day")}`);
    // output: -29
  
    var myDate = new Date(2000, 1, 1);
    console.log(`Date(2000, 1, 1) :: date.getDaysInMonth(myDate)}>>> ${date.getDaysInMonth(myDate)}`);
    
    var myDate = new Date(1900, 1, 1);
    console.log(`Date(1900, 1, 1) :: date.isLeapYear(myDate)>>> ${date.isLeapYear(myDate)}`);

    var myDate = (2000, 5, 16);
    console.log(`Date(1900, 1, 1) :: date.getTimezoneName(myDate)>>> ${date.getTimezoneName(myDate)}`);

    var myDate = new Date();
    console.log(`new Date() :: date.add(myDate, "day", 1)>>> ${date.add(myDate, "day", 1)}`);

    var date1 = new Date(2000, 0, 1);
    var date2 = new Date(2006, 11, 12);

    // Returns the difference from now in whole days
    console.log(`Date(2000, 0, 1) and Date(2006, 11, 12) :: date.difference(date1)>>> ${date.difference(date1)}`);

    // Returns the difference between two dates in whole days
    console.log(`Date(2000, 0, 1) and Date(2006, 11, 12) :: date.difference(date1, date2)>>> ${date.difference(date1, date2)}`);

    // Returns the difference in the specified interval
    console.log(`Date(2000, 0, 1) and Date(2006, 11, 12) :: date.difference(date1, date2, "week")>>> ${date.difference(date1, date2, "week")}`);
    

    var date1 = new Date();
    var date2 = new Date(2000, 0, 1);

    // Compares both the date and time portions
    console.log(`Date() and Date(2000, 0, 1) :: date.compare(date1, date2)>>> ${date.compare(date1, date2)}`);
    date.compare(date1, date2);

    // Compares just the date portion
    console.log(`Date() and Date(2000, 0, 1) :: date.compare(date1, date2, "date")>>> ${date.compare(date1, date2, "date")}`);
    
    // Compares just the time portion
    console.log(`Date() and Date(2000, 0, 1) :: date.compare(date1, date2, "time")>>> ${date.compare(date1, date2, "time")}`);
    
    // Same as omitting the third argument
    console.log(`Date() and Date(2000, 0, 1) :: date.compare(date1, date2, "datetime")>>> ${date.compare(date1, date2, "datetime")}`);
    

    on(dom.byId('button1'),'click',function(event) {
      var date1 = new Date(2000, 1, 1);
        var date2 = new Date(1973, 5, 16);
        var rainman = "February 2000 had " + date.getDaysInMonth(date1) + " days.<br/>";
        rainman += "June 1973 had " + date.getDaysInMonth(date2) + " days.";
        dom.byId("output1").innerHTML = rainman;
    }),
    
    on(dom.byId('button2'),'click',function(event) {
      var date1 = new Date(1900, 1, 1);
      var date2 = new Date(2000, 5, 16);
      if (date.isLeapYear(date1)) {
        var rainman = "1900 was a leap year.<br/>";
      } else {
        var rainman = "1900 was <strong>not</strong> a leap year.<br/>";
      }
      if (date.isLeapYear(date2)) {
        rainman += "2000 was a leap year.";
      } else {
        rainman += "2000 was <strong>not</strong> a leap year.";
      }
      dom.byId("output2").innerHTML = rainman;
    });
  
    on(dom.byId('button3'),'click',function(event) {
      var tz = date.getTimezoneName(new Date());
      var rainman = "You are supposedly in: " + tz + " timezone.";
      dom.byId("output3").innerHTML = rainman;
    });

    on(dom.byId('button4'),'click',function(event) {
      var date1 = new Date(1973, 5, 16);
      var date2 = new Date(2013, 5, 16);
      var rainman = date1.toUTCString() + " was " + date.difference(date1) + " days ago.<br/>";
      rainman += "The difference between " + date1.toUTCString() + " and " + date2.toUTCString() + " is " +
        date.difference(date1, date2, "year") + " years.";
      dom.byId("output4").innerHTML = rainman;
    });

    on(dom.byId('button5'),'click',function(event) {
      var date1 = new Date(2013, 5, 16, 0, 12, 27);
      var date2 = new Date(1973, 5, 16, 0, 12, 27);
      switch (date.compare(date1, date2)) {
        case 0:
          var rainman = date1.toUTCString() + " is the same as " + date2.toUTCString() + "</br>";
          break;
        case 1:
          var rainman = date1.toUTCString() + " is after " + date2.toUTCString() + "</br>";
          break;
        case -1:
          var rainman = date1.toUTCString() + " is before " + date2.toUTCString() + "</br>";
          break;
      }
      switch (date.compare(date1, date2, "time")) {
        case 0:
          rainman += date1.toUTCString() + " is the same time as " + date2.toUTCString() + "</br>";
          break;
        case 1:
          rainman += date1.toUTCString() + " time is after " + date2.toUTCString() + "</br>";
          break;
        case -1:
          rainman += date1.toUTCString() + " time is before " + date2.toUTCString() + "</br>";
          break;
      }
      dom.byId("output5").innerHTML = rainman;
    });


    on(dom.byId('button6'),'click',function(event) {
      var today = new Date();
      var rainman = "Tomorrow will be: " + date.add(today, "day", 1).toUTCString() + "<br/>";
      rainman += "Last week was: " + date.add(today, "week", -1).toUTCString();
      dom.byId("output6").innerHTML = rainman;
    });
  



});
