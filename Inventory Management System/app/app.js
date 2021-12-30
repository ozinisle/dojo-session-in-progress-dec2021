require([
    "app-widgets/appLayoutWidget/AppLayoutWidget",
    "app-widgets/appSideMenuWidget/AppSideMenuWidget",
    "app-widgets/appHomePageGridWidget/AppHomePageGridWidget",
    "dojo/parser",
    "dojo/ready",
    "dojo/dom",
	"dijit/layout/BorderContainer",
	"dijit/layout/TabContainer",
	"dijit/layout/ContentPane"
    
],function(AppLayoutWidget, AppSideMenuWidget, AppHomePageGridWidget, parser,ready,dom) {

    ready(function(){

        const appLayout = new AppLayoutWidget('app-content');
        //appLayout.placeAt('app-content');
        appLayout.getLayout().startup();

        const sideMenuWidget = new AppSideMenuWidget('tree');
        sideMenuWidget.startup();

        

        const intervalFlag = setInterval(()=>{
            if(dom.byId('home-page-content')) {
                const appHomePageGridWidget = new AppHomePageGridWidget('grid');
        
                appHomePageGridWidget.startup();
                appHomePageGridWidget.placeAt('home-page-content');

                clearInterval(intervalFlag);
            }
        })

        


       


       
        //parser.parse();
    })
    
    
})