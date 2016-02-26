import {Page, NavController} from 'ionic-framework/ionic';
import {SpeakerDetailsPage} from '../speaker-details/speaker-details';

@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
	constructor(nav: NavController) {
		this.nav = nav;

		this.items = [{
			'name': 'Sarah Bragg',
			'biography': '​To give you a glimpse, I am in my mid-thirties striving to keep my head above water while seeking to live a life with purpose. I am married with two beautiful (busy) girls. I worked in full-time ministry for more than 10 years and then alongside those who are in the ministry trenches for 5 years. Before I had kids, which left me wondering how to connect words to form a complete sentence, I graduated from Dallas Theological Seminary and authored the book, Body. Beauty. Boys. The Truth About Girls and How We See Ourselves. You can also find me on iTunes hosting the show Surviving Sarah where I have conversations with different people about their survival story. I am here to contribute. to create. to dream. I could spend countless hours decorating, drinking coffee, reading blogs and perusing Pinterest. So pick up your drink of choice and let\'s hang out.',
			'banner': 'sarah_bragg_banner.jpg',
			'thumbnail': 'sarah_bragg.jpg'
		}, {
			'name': 'Jennifer Allison',
			'biography': 'Jennifer Leigh Allison currently resides in Atlanta. She frequently volunteers with prison ministry events around the Southeast and loves sharing her testimony.',
			'banner': 'jennifer_allison_banner.jpg',
			'thumbnail': 'jennifer_allison.jpg'
		}, {
			'name': 'Crystal Renaud',
			'biography': 'After spending nearly seven years in Church communications, she now dedicates her life to the ministry of seeing women become WHOLE and become the women God has created them to be. In February of 2009, she launched Dirty Girls Ministries out of the experience of her own journey of becoming whole after an 8-year pornography and sexual addiction as a teenager. Since then, she has written and published, Dirty Girls Come Clean (2011 Moody Publishers), and returned to school to earn a degree in Psychology (Addiction and Recovery emphasis). She also holds certifications in Professional Life Coaching, Sexual Addiction Counseling and Caring for People God’s Way through Light University/American Association of Christian Counselors. In November 2012, Dirty Girls Ministries became a sub-ministry of our newly formed ministry for women, WHOLE Women Ministries. Because wholeness is for all women. Crystal’s work has been featured in the New York Times, ABC News, Christianity Today, 700 Club, Outreach Magazine and more. She also speaks to church services, college groups, youth groups, women’s groups and virtually any other group or conference on women’s pornography and sexual addiction as well as on a variety of other topics.',
			'banner': 'crystal_renaud_banner.png',
			'thumbnail': 'crystal_renaud.png'
		}];
	}

	viewSpeakerDetails(event, item) {
		this.nav.push(SpeakerDetailsPage, {
			item: item
		});
	}
}