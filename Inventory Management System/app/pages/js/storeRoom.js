require([
    "app-widgets/appLayoutWidget/AppLayoutWidget",
    "app-widgets/appSideMenuWidget/AppSideMenuWidget",
    "app-widgets/appStoreRoomGridWidget/AppStoreRoomGridWidget",
    "dojo/parser",
    "dojo/ready",
    "dojo/dom",
	"dijit/layout/BorderContainer",
	"dijit/layout/TabContainer",
	"dijit/layout/ContentPane"
    
],function(AppLayoutWidget, AppSideMenuWidget, AppStoreRoomGridWidget, parser,ready,dom) {

    ready(function(){

        const appLayout = new AppLayoutWidget('app-content');
        //appLayout.placeAt('app-content');
        appLayout.getLayout().startup();

        const sideMenuWidget = new AppSideMenuWidget('tree');
        sideMenuWidget.startup();

        

        const intervalFlag = setInterval(()=>{
            if(dom.byId('home-page-content')) {
                const appStoreRoomGridWidget = new AppStoreRoomGridWidget();
        
                appStoreRoomGridWidget.startup();
                appStoreRoomGridWidget.placeAt('home-page-content');

                clearInterval(intervalFlag);
            }
        })

        


       


       
        //parser.parse();
    })
    
    
})