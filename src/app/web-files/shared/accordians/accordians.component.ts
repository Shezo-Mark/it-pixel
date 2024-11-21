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

        case 'social-media':
          this.accordionItems = [
            {
              id: 1,
              title: '1. Laser-Focused Targeting',
              expanded: true,
              body: [
                {
                  id:1,
                  descrption: 'With social media, you have the opportunity to target your audience on levels never before possible. From impressive segmentation to engaging based on interests, social media puts you in front of the right prospective customers at the right time.'
                },
              ]
            },
            {
              id: 2,
              title: '2. Engage and Connect with your Audience',
              expanded: true,
              body: [
                {  id:1,  descrption: 'Unlike ads or even search engine listings, social media provides a unique platform where a business can show some personality and actually engage with their audience in a meaningful way that builds trust and relationships.'},
                {  id:2,  descrption: 'Social media management provides the hands-off opportunity to leverage social channels in order to'},
                {  id:3,  descrption: 'Grow followers'},
                {  id:4,  descrption: 'Create, publish and distribute engaging and relevant content'},
                {  id:5,  descrption: 'Increase engagement and conversations with your brand'},
                {  id:6,  descrption: 'And more…'},
              ]
            },
            {
              id: 3,
              title: '3. Social Proof and Trust',
              expanded: true,
              body: [
                {  id:1,  descrption: 'Social proof refers to a unique psychological phenomenon in which the actions of one group or individual can influence those of another group. Social media provides an opportunity for businesses to prominently show off “social proof”.'},
                {  id:2,  descrption: 'Social Proof May Include:'},
                {  id:3,  descrption: 'Likes or followers'},
                {  id:4,  descrption: 'Subscribers'},
                {  id:5,  descrption: 'Comments / conversations'},
                {  id:6,  descrption: 'Reviews'},
                {  id:7,  descrption: 'And more…'},
                {  id:8,  descrption: 'Each of which instills trust in those considering your offers, resulting in increased sales and conversion rates across all marketing channels'},
              ]
            },
            {
              id: 4,
              title: '4. Brand Awareness and Visibility',
              expanded: true,
              body: [
                {  id:1,  descrption: 'No matter how good of a product or service you offer, if no one knows about it, your business is effectively dead in the water. Second, only to Google, social media platforms are the second most visited medium potential customers turn to in order to find products, services and to ask others for advice on where to go for what they need.'},
              ]
            },
            {
              id: 5,
              title: '5. Educate Your Audience and Promote Your Brand',
              expanded: true,
              body: [
                {  id:1,  descrption: 'Social media is about dialogue. It is a 2-way conversation (both literally and figuratively) between your brand and your target audience. These platforms provide a relaxed, low-pressure, non-salesy way to initiate conversations surrounding industry hot topics, problems your audience faces, and the ways in which your company can help.'},
              ]
            },
            {
              id: 6,
              title: '6. Monitor and Build Your Reputation',
              expanded: true,
              body: [
                {  id:1,  descrption: 'Modern-day consumers have more options than ever before when it comes to selecting a provider to buy from. Don’t let negative comments, reviews or mentions about your brand around the web hurt your chances of earning new customers.'},
                {  id:2,  descrption: 'Our social media management services include brand monitoring and intervention, making sure any negative mentions are managed and addressed before small issues turn into major PR nightmares.'},
              ]
            },
            
          ]
          break;

          case 'reputation-management':
            this.accordionItems = [
              {
                id: 1,
                title: '1. Positive Reviews and Press Improve Trust and Credibility',
                expanded: true,
                body: [
                  {
                    id:1,
                    descrption: 'According to Vendasta research, around 92% of customers will read online reviews before making a buying decision. Some reputation management studies have gone so far as to demonstrate that websites with an average rating of less than 3/5 stars stand to lose up to 90% of potential business. Not only that, positive reviews can and do impact search engine ranking.'
                  },
                ]
              },
              {
                id: 2,
                title: '2. Online Reputation Management Gives your Brand a VOICE',
                expanded: true,
                body: [
                  {  id:1,  descrption: 'Make no mistake, your brand has a narrative online and off. Customers, prospects, competitors and more are all saying things that impact the perception of your brand by others online.'},
                  {  id:2,  descrption: 'Reputation management allows you to have a VOICE loud and clear in this conversation. It also allows you to control the narrative of your company or website, making sure that those seeking you or your products/services are presented with the story YOU want to tell, not one biased by disgruntled customers or competitors.'},
                ]
              },
              {
                id: 3,
                title: '3. Handle Issues Before they Turn into a Major PR Nightmare',
                expanded: true,
                body: [
                  {  id:1,  descrption: 'Professional reputation management with Digital Engage keeps you apprised of any PR issues in near real time, allowing you or our team to manage any negative press, reviews or commentary BEFORE it gets a chance to take on a life of its own.'},
                ]
              },
              {
                id: 4,
                title: '4. Defensive Posturing',
                expanded: true,
                body: [
                  {  id:1,  descrption: 'Online reputation management with Digital Engage ensures that the first page of Google is filled with the story you want to tell. We work hard to rank and position those digital assets in such a way that IF a negative story or review ever comes out, existing assets dominate the first page and your brand’s story.'},
                ]
              },
              {
                id: 5,
                title: '5. Build Relationships, Protect your Brand, and Earn More Business with Reputation Management',
                expanded: true,
                body: [
                  {  id:1,  descrption: 'Ready to learn more about how rep management can help you earn more business and solidify your position as an authoritative brand in your market?'},
                  {  id:2,  descrption: 'Call or message us today!'},
                ]
              },
            ]
            break;


            case 'local-seo':
              this.accordionItems = [
                {
                  id: 1,
                  title: '1. Relates to locality and community',
                  expanded: true,
                  body: [
                    {
                      id:1,
                      descrption: 'Including frequent content that relates to local and community events can draw in consumers from the immediate area. Consider announcing community activities, highlighting the achievements of people in the neighbourhood, reviewing local attractions, and supporting events happening in the region.'
                    },
                  ]
                },
                {
                  id: 2,
                  title: '2. Promote your business while highlighting the local community',
                  expanded: true,
                  body: [
                    {  id:1,  descrption: 'Case studies offer a way to promote your business while highlighting the local community. Present case studies that showcase a resident of the city or county who benefitted from your goods or services. The case study helps the audience relate to a satisfied customer and to envision how your product will help them in the future.'},
                  ]
                },
                {
                  id: 3,
                  title: '3. High-quality inbound traffic',
                  expanded: true,
                  body: [
                    {  id:1,  descrption: 'Pay-per-click (PPC) advertising can bring traffic to your website, but a haphazard approach merely wastes money on clicks that don’t translate into sales.'},
                  ]
                },
                {
                  id: 4,
                  title: '4. Increases the likelihood',
                  expanded: true,
                  body: [
                    {  id:1,  descrption: 'Your landing page is typically the first glimpse that a potential customer has of your website. Search engine optimization of your landing page (or landing pages) increases the likelihood that local consumers will find your business.'},
                  ]
                },
                {
                  id: 5,
                  title: '5. Establish reputation through online reviews',
                  expanded: true,
                  body: [
                    {  id:1,  descrption: 'Google My Business (GMB) is Google’s local business review tool that allows consumers to search for local businesses and allows local businesses to establish their reputation through online reviews. Local search marketing is key in becoming a leader in your geographical area.'},
                  ]
                },
              ]
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
