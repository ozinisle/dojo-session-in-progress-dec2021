var dojoConfig = {
    async: true,
    baseUrl: 'http://localhost:8080/',
    //parseOnLoad: true,
    
    packages: [
        {
            name: "dojo",
            location: 'lib/dojo/dojo'
        },
        {
            name: "dijit",
            location: 'lib/dojo/dijit'
        },
        {
            name: "dojox",
            location: 'lib/dojo/dojox'
        },
        {
            name: "dgrid",
            location: 'lib/dojo/dgrid'
        },
        {
            name: "dstore",
            location: 'lib/dojo/dstore'
        },
        {
            name: "app-widgets",
            location: 'app/widgets'
        }
    ]
};