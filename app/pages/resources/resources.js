import {Platform, Page, NavController} from 'ionic-framework/ionic';

/*
  Generated class for the ResourcesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/resources/resources.html',
})
export class ResourcesPage {
  constructor(nav: NavController, platform: Platform) {
  	this.platform = platform;
    this.nav = nav;
  }

  launch(url) {
        this.platform.ready().then(() => {
            cordova.InAppBrowser.open(url, "_system", "location=true");
        });
    }
}
