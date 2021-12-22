require(["dojo/_base/Color","dojo/dom-style", "dojo/domReady!"], function(Color,style){ // AMD allows us to use the color functions under the alias name "Color"
  
    var myColor = Color.fromString("red");
    style.set("target", "backgroundColor", myColor);

    // Creates an empty color object for later use
    var emptyColor = new Color();
  
    // Constructor accepts named colors
    var namedColor = new Color("purple");
  
    // Hex Strings work also
    var hexColor = new Color("#cdefa0");
  
    // One can also pass arrays containing 3 or 4 values
    var a3Color = new Color([123, 123, 234]);
    var a4Color = new Color([123, 123, 234, 0.6]);
  
    // Finally, objects with r,g,b and a values work as well
    var objColor = new Color({ r:23, g:45, b:67, a:0.7 });


    Color.fromHex("#FF0000");
    Color.fromHex("#F00");
    Color.fromArray([255, 0, 0]);
    Color.fromArray([255, 0, 0, 1]);
    Color.fromRgb("rgb(255, 0, 0)");
    Color.fromRgb("rgba(255, 0, 0, 1)");
    Color.fromString("red");

    Color.blendColors(start, end, weight, color);

    // First create a color object, containing red
    var myColor = Color.colorFromString("red");

    // Now return the color with the object methods
    myColor.toRgb();  // returns the Array [255,0,0]
    myColor.toRgba(); // returns the Array [255,0,0,1]
    myColor.toHex(); // returns the String "#ff0000"
    myColor.toCss(false); // returns the String "rgb(255,0,0)"
    myColor.toCss(true); // returns the String "rgba(255,0,0,1)"
    myColor.toString(); // returns the String "rgba(255,0,0,1)"

    //dojo.colors will have dojo.colors.makeGrey: and dojo.colorFromRgb: in addition with dojo/_base/Color  as base. 
    //maintained this way for size reasons 
    
  });
  