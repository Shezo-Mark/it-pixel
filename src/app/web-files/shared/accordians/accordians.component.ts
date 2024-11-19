import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accordians',
  templateUrl: './accordians.component.html',
  styleUrls: ['./accordians.component.scss']
})
export class AccordiansComponent {
  accordionItems: any[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.setAccordionItems();

    // You can subscribe to route changes if needed
    this.router.events.subscribe(() => {
      this.setAccordionItems();  // Update accordion content based on the route
    });
  }

  setAccordionItems(): void {
    const route = this.activatedRoute.snapshot.routeConfig?.path;

    switch(route) {
      case 'seo':
        this.accordionItems = [
          {
            id: 1,
            title: '1. 93% Of Experiences Had Online Start with a Search Engine', expanded: true,
            body: [
              {
                id:1,
                descrption: 'Let that sink in. 93% of ALL online experiences take place first on a search engine. Can your business afford to lose out on being in front of 93% of the market online?'
              },
            ]

        },
          {
            id: 2,
            title: '2. Google Has a Firm Grip on Over 90% of the Search Market', expanded: false,
            body:
            [
              {
                id:1,
                descrption: 'When it comes to appeasing a master, Google is the one we all answer to. With over 90% of the search market and with 93% of all online experiences happening on a search engine, having top rankings on Google has never been as important for the sustainability and growth of a business than it is today.'},
            ]
          },
          {
            id: 3,
            title: '3. 75% of People NEVER Scroll Past the First Page of Google', expanded: false,
            body:
            [
              {
                id:1,
                descrption: 'If you’re not on page #1, you’re already losing out on 75% of potential sales going to your competitors who are no doubt investing into making sure you stay out of sight and out of mine.'},
            ]
          },
          {
            id: 4,
            title: '4. Better Lead Quality with SEO', expanded: false,
            body:
            [
              {
                id:1,
                descrption: 'Those leads generated from organic search have a 14.6% close rate on average, whilst those generated from outbound lead gen efforts come in at an abysmal 1.7% on average'},
            ]
          },
          {
            id: 5,
            title: '5. 70-80% of Users SKIP Paid Ads and Go Directly for Organic Listings', expanded: false,
            body:
            [
              {
                id:1,
                descrption: 'Paid ads are useful, don’t get us wrong. In fact, when done right they can provide a great channel for ROI and scale. BUT, they only cover a small portion of the actual market given that the majority of prospective customers ignore them altogether.'},
            ]
          },
          {
            id: 6,
            title: '6. Improved Trust and Authority', expanded: false,
            body:
            [
              {
                id:1,
                descrption: 'These days consumers have a multitude of options to choose from when buying a product or service. Trust and authority go a long way in making a prospect feel comfortable with buying from your brand versus a competitor. And as far as the public is concerned, if Google “trusts” you and ranks your site in the top positions, then your brand may be the “better” option.'},
            ]
          },
        ];
        break;
      case 'paid-search':
        this.accordionItems = [
          {
            id: 1,
            title: '1. Performance-focused Service',
            expanded: true,
            body: [
              {
                id:1,
                descrption: 'Pay Per Call Marketing is a performance-focused service we provide for our clients where we set up campaigns that generate actual inbound phone calls from interested prospects.'
              },
            ]
          },
          {
            id: 2,
            title: '2. It’s about Engagement and Interaction and Experience.', expanded: false,
            body: [
              {
                id:1,
                descrption: 'Few things are as effective as making a real human connection with your prospects over the phone, asking questions to better understand their needs and matching them with solutions that exceed expectations.'
              },
            ]
          },
          {
            id: 3,
            title: '3. Pay-per-call Ads are High Performance',
            expanded: false,
            body: [
              {
                id:1,
                descrption: 'Pay-per-call ads are high performance, often converting upwards of 25% more than pay per click, meaning you can focus your time on those prospects more inclined to purchase then and there.'
              },
            ]
          },
          {
            id: 4,
            title: '4. Optimizing the Customer Experience',
            expanded: false,
            body: [
              {
                id:1,
                descrption: 'Our pay-per-call advertising service will quickly scale inbound marketing and lead generation efforts without negatively impacting brand integrity, optimizing the customer experience.'
              },
            ]
          },
          {
            id: 5,
            title: '5. Prospective Customers that Proactively Call into a Business are Up to 10x',
            expanded: false,
            body: [
              {
                id:1,
                descrption: 'Prospective customers that proactively call into a business are up to 10x (TEN TIMES) more likely to make a purchase as compared to those that click on a link (Kelsey Group Study)'
              },
            ]
          },
          {
            id: 6,
            title: '6. Customers can Greatly Benefit from Our Pay-per-call Services',
            expanded: false,
            body: [
              {
                id:1,
                descrption: 'Most businesses that require some type of human touch or interaction with their prospective customers can greatly benefit from our pay-per-call services, increasing qualified lead flow and resulting in higher conversion rates.'
              },
            ]
          },
        ];
        break;
      default:
        this.accordionItems = [
          { id: 1, title: 'Default Item 1', expanded: true, body: 'Default content.' },
          { id: 2, title: 'Default Item 2', expanded: false, body: 'Default content.' },
          { id: 3, title: 'Default Item 3', expanded: false, body: 'Default content.' }
        ];
        break;
    }
  }
}
