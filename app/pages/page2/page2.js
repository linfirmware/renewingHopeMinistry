import {Page, NavController} from 'ionic-framework/ionic';
import {ScheduleDetailsPage} from '../schedule-details/schedule-details';

@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
  constructor(nav: NavController) {
		this.nav = nav;

		this.details = [{
			'name': 'Doors Open / Check In',
			'desc': 'Doors open for check in at 7:45 am. Coffee, tea, water, and pastries will be available. Speaker\'s books will be available to sell only.'
		}, {
			'name': 'Worship / Prayer',
			'desc': 'We will have a worship and prayer session as well as reviewing the schedule, reminding everyone about lunch, and introducing our speakers to the stage. We will have door prizes. In addition we will talk about our all day prayer room.'
		}, {
			'name': 'Seminar / Speaker (Crystal Renaud)',
			'desc': 'Fill in and collect index cards; New redeemer skit with Shannon; Bathroom break'
		}, {
			'name': 'Seminar / Speaker (Jennifer Allison)',
			'desc': 'Fill in and collect index cards; Line dance and door prize with Tammi'
		}, {
			'name': 'Seminar / Speaker (Sarah Bragg)',
			'desc': 'Fill in and collect index cards; Cardboard testimonies with Shannon'
		}, {
			'name': 'Session 1 Closing Meeting',
			'desc': 'Thank our speakers and hand out another door prize. Details about session 2 will be shared and we will close session 1 in prayer with Kelly Johns. Stephen ministers will be available to talk to girls and moms. Counseling centers and vendors will be setup in the cafeteria and hallways.'
		}, {
			'name': 'Lunch Break (Food Trucks)',
			'desc': 'Food trucks are available outside, and we encourage you to eat in the underground area downstairs; there will be signs directing you or you can ask any of the greeters for directions or help.'
		}, {
			'name': 'Choice 1',
			'desc': 'Details to come. Mom\'s Room: TBA, Girl\'s Room: TBA.'
		}, {
			'name': 'Choice 2',
			'desc': 'Details to come. Mom\'s Room: TBA, Girl\'s Room: TBA.'
		}, {
			'name': 'How to live in redemption',
			'desc': 'Details about How to live in redemption to come. Mom\'s Room: TBA, Girl\'s Room: TBA.'
		}, {
			'name': 'Choice 4',
			'desc': 'Details to come. Mom\'s Room: TBA, Girl\'s Room: TBA.'
		}, {
			'name': 'Session 2 Closing Meeting',
			'desc': 'Preview of what\'s next at Fellowship (bible study); Counseling centers and vendors as well as Stephen ministers will be availble until 5pm. Door prizes will be given away and we will have further worship as well. Shannon will host a skit bag monologue. Kelly Johns will lead everyone in prayer about gospel and redemption; Girl\'s and mom\'s will write their baggage on a post it and stick it to the cross followed by a silent exit.'
		}, {
			'name': 'Conference Ends / Clean Up',
			'desc': 'At this point the conference is over, please help in cleaning up before leaving if you are available to do so. Thank you all for coming!'
		}];
	}

	viewScheduleDetails(event, item) {
		this.nav.push(ScheduleDetailsPage, {
			item: this.details[item];
		});
	}
}
