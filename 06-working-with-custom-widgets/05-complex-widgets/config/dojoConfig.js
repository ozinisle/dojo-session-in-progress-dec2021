var dojoConfig = (function(){
    var base = location.href.split("/");
    base.pop();
    base.pop();
    base = base.join("/");
    return {
        async: true,
        isDebug: true,
        packages: [{
            name: "app",
            location: base + "/app/widget"
        }]
    };
})();