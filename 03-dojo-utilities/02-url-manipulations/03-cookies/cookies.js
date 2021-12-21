require(["dojo/cookie", "dojo/dom", "dojo/on", "dojo/domReady!"],
function(cookie, dom, on){
  on(dom.byId("setCookie"), "click", function(){
    cookie("favouriteDish", "Noodles", { expires: 5 });
    console.log("cookie favouriteDish >>> set to >>> Noodles")
  });
  on(dom.byId("getCookie"), "click", function(){
    console.log("The value of the cookies is: " + cookie("favouriteDish"));
    alert("The value of the cookies is: " + cookie("favouriteDish"));
    
  });
});