import {Page, NavController, NavParams} from 'ionic-framework/ionic';

/*
  Generated class for the ScheduleDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/schedule-details/schedule-details.html',
})
export class ScheduleDetailsPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;

    this.item = this.navParams.get("item");
  }
}
