function dom() {

  console.log("dom is loaded");

  function byId(param) {
    return document.getElementById(param);
  }
  return {   byId: byId }
}

function domConstruct() {

  function place(text,node) {
    node.innerHTML+=text;
  }

  console.log("domConstruct is loaded");
  return {   place: place }
}

function callback() {
    args = arguments;
    console.log("callback method >>> number of arguments >>> " + args.length);
    for (i=0;i<=args.length;args++) {
        console.log(args[i]);
    }
    console.log("callback method >>> execution complete");   
 }



//['dom','domConstruct']
function require(modules,callback) {

    moduleFunctions = [];
    modules.map(moduleName => {
        moduleFunctions.push(window[moduleName]());
    })
    console.log("require method >>> Total modules found >>> " + moduleFunctions.length);
    callback.apply(this,moduleFunctions)
}

// require(['dom','domConstruct'],callback)

function callback(dom, domConstruct) {
    var greetingNode = dom.byId('greeting');
    domConstruct.place('<em> Dojo!</em>', greetingNode);
}

require(['dom','domConstruct'],callback)
