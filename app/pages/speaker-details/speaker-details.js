import {Page, NavController, NavParams} from 'ionic-framework/ionic';

/*
  Generated class for the SpeakerDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/speaker-details/speaker-details.html',
})
export class SpeakerDetailsPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;

    this.item = this.navParams.get("item");
  }
}
