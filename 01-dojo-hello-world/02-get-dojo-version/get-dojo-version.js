require(["dojo","dojo/dom","dojo/domReady!"], 
    function(dojo,dom) { 
        dom.byId('console').innerHTML = `<br> version = ${dojo.version.major}.${dojo.version.minor}.${dojo.version.patch}
        <br><br>dojo.version.major = ${dojo.version.major},<br> 
        dojo.version.minor = ${dojo.version.minor}, <br>
        dojo.version.patch = ${dojo.version.patch}`;
        console.log([dojo.version.major, dojo.version.minor, dojo.version.patch].join(".")); 
    }
);