// import { Component } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
// export class MarketingFieldsComponent {
//   selectedTab: number = 0;
//   tabLink = [
//     { id: 'seo', title: "Search Engine Optimization" },
//     { id: 'local-seo', title: "Local Business SEO" },
//     { id: 'ppc', title: "PPC Management" },
//     { id: 'reputation', title: "Reputation Management Services" },
//     { id: 'google-maps', title: "Google Maps Marketing" },
//     { id: 'social-media', title: "Social Media Management" },
//     { id: 'on-page', title: "On-Page Optimization" },
//     { id: 'website-design', title: "Website Design" }
//   ];
//   tabContents = [
//     {
//       id: 'seo',
//       image: '../../../../assets/images/site-images/seo.webp',
//       heading: "Search Engine <span class='text_brand'>Optimization</span>",
//       paragraphs: [
//         {description: "Over 80% of all buying decisions start with a search on Google, Bing, or another search engine. Can your brand afford to sit back while the competition takes advantage of <a href=''>this</a>?"},
//         {description: "On average, 68% of clicks belong to the first three results with less than 3% of traffic ever clicking through to page #2."}
//       ]
//     },
//     {
//       id: 'local-seo',
//       image: '../../../../assets/images/site-images/local-business.webp',
//       heading: "Local Business <span class='text_brand'>SEO</span>",
//       paragraphs: [
//        {description:  "Search engine optimization is a critical component of any digital marketing strategy, but if you run a local business, you also need to consider <a href=''>localized SEO</a> services that can bring you hyper-targeted traffic right to your front door."},
//       ]
//     },
//     {
//       id: 'ppc',
//       image: '../../../../assets/images/site-images/ppc-management.webp',
//       heading: "PPC <span class='text_brand'>Management</span>",
//       paragraphs: [
//         {description: "Few digital marketing strategies have the potential to yield immediate ROI and scale in the way that <a href=''>pay per click (PPC) management</a> services do. Our talented PPC optimization team can help devise, launch, and optimize a PPC."},
//         {description: "Few digital marketing strategies have the potential to yield immediate ROI and scale in the way that <a href=''>pay per click (PPC) management</a> services do. Our talented PPC optimization team can help devise, launch, and optimize a PPC."},
//       ]
//     },
//     {
//       id: 'reputation',
//       image: '../../../../assets/images/site-images/reputation.webp',
//       heading: "Reputation Management <span class='text_brand'>Services</span>",
//       paragraphs: [
//        {description:  "In today's hyper-competitive landscape, few things can impact business as much as your reputation. That means having the ability to <a href=''>control and narrate</a> your brand's story in the way to effectively earn trust and establish authority."}
//       ]
//     },
//     {
//       id: 'google-maps',
//       image: '../../../../assets/images/site-images/google-map.webp',
//       heading: "Google Maps <span class='text_brand'>Marketing</span>",
//       paragraphs: [
//       {description:   "Few mediums can beat Google Maps or Google My Business (GMB) listings when it comes to local marketing. GMB properties are responsible for the majority of phone calls and walk-ins directly to local businesses. With competition in local markets heating up, optimizing and ranking these properties takes specialized knowledge along with careful strategy and implementation. We’ll help you claim and rank your GMB listing, driving laser-focused localized traffic to your site and in your doors."}
//       ]
//     },
//     {
//       id: 'social-media',
//       image: '../../../../assets/images/site-images/social-media.webp',
//       heading: "Social Media <span class='text_brand'>Management</span>",
//       paragraphs: [
//        {description:  "Second only to Google, <a href=''>social media</a> is a powerhouse of a marketing tool that can be leveraged to drive performance at your business. It’s a safe and effective, powerful medium to promote your brand when utilized properly. Consumers on both the B2C and B2B spectrum now expect your brand to have a well-maintained social presence. Digital Engage will help you grow your audience and manage platforms so that you're able to interact with prospects and customers in real time."}
//       ]
//     },
//     {
//       id: 'on-page',
//       image: '../../../../assets/images/site-images/page-optimization.webp',
//       heading: "On-Page <span class='text_brand'>Optimization</span>",
//       paragraphs: [
//         {description: "In 2018 and beyond, having a website isn’t enough. That website must be optimized to improve ranking, provide an excellent customer experience, and drive action (i.e. sales, clicks, and leads). Your website is your best employee, available 24/7/365. Let us help make sure it’s operating at peak performance, driving the results your brand expects and deserves."}
//       ]
//     },
//     {
//       id: 'website-design',
//       image: '../../../../assets/images/site-images/webside-design.webp',
//       heading: "Website <span class='text_brand'>Design</span>",
//       paragraphs: [
//        {description:  "Is your brand in need of a <a href=''>website or web design update?</a> Digital Engage can help design a website for your company that effectively communicates your brand’s mission, values, benefits and connects with your audience while driving sales and growth. We have the experience to bring your vision to life, captivating specific target audiences with the experience you desire."}
//       ]
//     }
//   ];
// }

export class ServicesComponent implements OnInit {
  selectedTab: number = 0;
  tabContents: any[] = [];
  tabLink: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Set default tab based on route
    this.updateTabContent();

    // Listen for route changes to update tab content
    this.router.events.subscribe(() => {
      this.updateTabContent();
    });
  }

  updateTabContent(): void {
    const route = this.activatedRoute.snapshot.routeConfig?.path;
    // Change the tab contents based on the route
    switch(route) {
         case 'seo':
        this.tabContents = [
          {
            id: '1',
            heading: 'SEO SERVICES',
            image: './../../../assets/images/services/seo-1.webp',
            paragraphs:[
              {
              id:1,
              descrption: 'Effective SEO that turns your investment in marketing into more sales, more revenue and more customers for our clients. '},
              {id:2, descrption: 'Affordable and custom pricing options '},
              {id:3, descrption: 'Top rankings that drive laser targeted web traffic '},
              {id:4, descrption: 'Experience and success across a broad range of industries '},
              {id:5, descrption: 'The talented team of innovative thinkers '},
              {id:6, descrption: 'Exceptional support and service '},
            ]
          },
          { id: '2', heading: 'Why is SEO So Important?', image: 'assets/images/services/seo-2.webp',
            paragraphs:[
              {id:1, descrption: 'The consumer’s decision-making journey has evolved in such a way that a search engine query is often the first step in their process. According to a recent study conducted by Forrester, 71 percent of consumers originate their buying decision journey and 74% to complete it (i.e. making a purchase).'},
              {id:2, descrption: 'In 2019 and beyond, if you are NOT showing up front and center on Google when and where your prospective clients need you, your brand stands to LOSE up to 71% of ALL potential sales. Not to mention the loss in brand recognition and perceived authority and trust.'},
              {id:3, descrption: 'Other than SEO our professional team has expertise in services like, <a href="/paid-search">Paid search</a>,<a href="/paid-search"> Reputation management</a>, <a href="/paid-search">Managed IT services</a>, <a href="/paid-search">Video and photos services</a>, <a href="/paid-search">Branding and logo agency</a>, <a href="/paid-search">Website hosting services</a>, <a href="/paid-search">Website support services</a>, <a href="#">Local SEO Services</a> and others. <a href="#">Call us today to learn more</a> about our services.'},
            ]
          },
          {
            id: '3',
            heading: 'Holistic SEO Strategies Custom Made to Perform',
            image: 'assets/images/services/service-1.webp',
            paragraphs:[
              {id:1, descrption: 'At <a href="#">Digital Engage</a> we want to be your valued partner in business. Our team takes the time to understand your market, audience, competitive landscape, and internal and external opportunities and threats to continued success and growth.'},
              {id:2, descrption: 'We take this information and our analysts put together a strategy that is custom-tailored not just to your industry and market, but uniquely to YOUR brand.'},
              {id:3, descrption: 'If you’re looking for “cookie cutter” chop-shop SEO services, you’ve come to the wrong place. We believe that every dollar you invest with us should yield a strong ROI and help set you up for continued success.'},
            ]
         },
         { id: '4', heading: 'Benefits of SEO Services with Digital Engage', image: 'assets/images/services/seo-4.webp',
          paragraphs:[
            {id:1, descrption: 'Each SEO package is designed to move the needle on those key performance metrics that matter most to your company'},
            {id:2, descrption: 'An increase in targeted web traffic'},
            {id:3, descrption: 'Enhanced brand visibility and recognition in your market'},
            {id:3, descrption: 'Improved trust and authority in the industry'},
            {id:3, descrption: 'Boosted sales and increased revenue'},
            {id:3, descrption: 'More leads, phone calls, messages, and walk-ins'},
          ]
         },
        ];
        this.tabLink = [
          { id: '1', title: 'SEO SERVICES' },
          { id: '2', title: 'Why is SEO So Important?' },
          { id: '3', title: 'Holistic SEO Strategies Custom Made to Perform' },
          { id: '4', title: 'Benefits of SEO Services with Digital Engage' },
        ];
        break;
        case 'paid-search':
          this.tabContents = [
            {
              id: '1',
              heading: 'Pay Per Call Services',
              image: './../../../assets/images/services/service-6.webp',
              paragraphs:[
                {
                id:1,
                descrption: 'We have the perfect solution – LIVE hot call transfers from prospects ready to hear about what you have to offer.'},
                {id:2, descrption: 'Affordable pricing tiers'},
                {id:3, descrption: 'Guaranteed results'},
                {id:4, descrption: 'Optimized for dozens of niches'},
                {id:5, descrption: 'Expert team of pay per call specialists'},
                {id:6, descrption: 'Outstanding support'},
              ]
            },
            {
              id: '2',
              heading: 'How Does PPC Advertising Work?',
              image: 'assets/images/services/service-7.webp',
              paragraphs:[
                {id:1, descrption: 'Our team works to understand your business’s unique needs, market, audience, positioning and selling propositions as well as the features and benefits of your offers.'},
                {id:2, descrption: 'We then work to create customized campaigns targeted to your local service area that incorporate trackable phone numbers so we can accurately monitor and track performance.'},
                {id:3, descrption: 'Pay Per Call Ads May be Utilized on: Social media (Facebook, etc)'},
                {id:4, descrption: 'Google'},
                {id:5, descrption: 'Display ads'},
                {id:6, descrption: 'When an individual calls the unique number in the ads, we can track that call to your business.'},
                {id:7, descrption: 'Various aspects that we may track for performance optimization include:'},
                {id:8, descrption: 'Call recording'},
                {id:9, descrption: 'Call surveys'},
                {id:10, descrption: 'Call length'},
                {id:11, descrption: 'Other misc. qualifications'},
                {id:12, descrption: 'With pay-per-call, you only pay for those calls that come in from the campaigns we set up and track through unique phone numbers. In this way, pay-per-call is truly a performance-based advertising model.'},
              ]
            },
            {
              id: '3',
              heading: 'How are Calls Tracked?',
              image: 'assets/images/services/service-8.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Phone calls are generally tracked via one of two primary methods:'},
                {
                  id:2,
                  descrption: 'Unique phone number – with each individual client or client campaign assigned a specific phone number that can be traced back to its original source advert.'
                },
                {
                  id:3,
                  descrption: 'Dynamic tracking number – code placed on a landing page or other digital medium and that dynamically creates phone numbers tied to a specific client or campaign.'
                },
                {
                  id:4,
                  descrption: 'With either method, calls can be accurately tracked, making sure our clients only pay for valid phone calls generated through our campaigns.'
                },
                {
                  id:5,
                  descrption: 'Call us today to learn more about what we can do to set up a perfectly optimized campaign for your needs.'
                },
              ]
           },
           {
            id: '4',
            heading: 'Can Calls be Filtered or Targeted?',
            image: 'assets/images/services/service-9.webp',
            paragraphs:[
              {
                id:1,
                descrption: 'Absolutely! In the same way that advertising campaigns are targeted, so are pay per call campaigns. Phone calls can be filtered or optimized for aspects such as: <strong>In General we Focus On:</strong>'
              },
              {id:2, descrption: 'Day and time (i.e. during your office hours)'},
              {id:3, descrption: 'The geographic location of the caller'},
              {id:3, descrption: 'Repeat vs new customer'},
            ]
           },
           {
            id: '5',
            heading: 'Work with a Sales Team? Need Calls Routed? – No problem!',
            image: 'assets/images/services/service-10.webp',
            paragraphs:[
              {
                id:1,
                descrption: 'At <a href=""> Digital Engage</a> we can solve even the most complex of business challenges. We know firsthand the importance of routing the right calls to the right people at the right time.'
              },
              {id:2, descrption: 'Other than SEO our professional team has expertise in services like, <a href="/paid-search">Paid search</a>,<a href="/paid-search"> Reputation management</a>, <a href="/paid-search">Managed IT services</a>, <a href="/paid-search">Video and photos services</a>, <a href="/paid-search">Branding and logo agency</a>, <a href="/paid-search">Website hosting services</a>, <a href="/paid-search">Website support services</a>, <a href="#">Local SEO Services</a> and others. <a href="#">Call us today to learn more</a> about our services.'},
            ]
           },
          ];
          this.tabLink = [
            { id: '1', title: 'Pay Per Call Services' },
            { id: '2', title: 'How Does PPC Advertising Work?' },
            { id: '3', title: 'How are Calls Tracked?' },
            { id: '4', title: 'Can Calls be Filtered or Targeted?' },
            { id: '5', title: 'Work with a Sales Team? Need Calls Routed? – No problem!' },
          ];
          break;

            case 'social-media':
              this.tabContents = [
                {
                  id: '1',
                  heading: 'Social Media Management Services',
                  image: './../../../assets/images/services/service-11.webp',
                  paragraphs:[
                    {id:1, descrption: 'Create a lasting presence & Engage your Audience'},
                    {id:2, descrption: '<strong>RESULTS FOCUSED SOCIAL MEDIA MANAGEMENT</strong>'},
                    {id:3, descrption: 'Save time and generate measurable results'},
                    {id:4, descrption: 'Increase brand awareness'},
                    {id:5, descrption: 'Establish social proof'},
                    {id:6, descrption: 'Connect and engage with your audience'},
                    {id:7, descrption: 'Grow followers and network'},
                    {id:8, descrption: 'Grow followers and network'},
                    {id:9, descrption: 'Improve customer service'},
                    {id:10, descrption: 'Enhance trust and reputation'},
                  ]
                },
                {
                  id: '2',
                  heading: 'You Have Enough to Do – like running a business!',
                  image: './../../../assets/images/services/service-12.jpg',
                  paragraphs:[
                    {id:1, descrption: 'Let us handle the heavy lifting and time-intensive social media activities so you can focus on doing what you do best'},
                    {id:2, descrption: 'Running a business is hard enough. At <a href="">Digital Engage</a>, our social media experts can manage your social presence, taking the bulk of the workload off your daily “to-do” list.'},
                    {id:3, descrption: 'Our professional team can also help you with services like Search engine optimization, Paid search, Reputation management, Managed IT services, Video and photo services, Branding and logo agency, Website hosting services, Website support services, Local SEO Services, and others. Call us today to learn more about our services'},
                  ]
                },
                {
                  id: '3',
                  heading: 'Social Media Content – done for you daily!',
                  image: './../../../assets/images/services/service-13.webp',
                  paragraphs:[
                    {id:1, descrption: 'Expertly curated, written and designed content tailored to your brand daily.'},
                    {id:2, descrption: 'Stunning images and graphics'},
                    {id:3, descrption: 'Engaging written content'},
                    {id:4, descrption: 'Relevant industry news and hot topics'},
                    {id:5, descrption: 'Promotions and special offers'},
                    {id:6, descrption: 'And more…'},
                  ]
                },
                {
                  id: '4',
                  heading: 'Social Planning and Strategy',
                  image: './../../../assets/images/services/service-14.webp',
                  paragraphs:[
                    {id:1, descrption: 'Social media content is only half the battle. Formulating a strategic plan to implement that content and guide its creation is just as important. Our team will align your social media management plan with your goals and key performance indicators that matter most to your brand, making sure we’re always moving the needle in the right direction.'},
                  ]
                },
                {
                  id: '5',
                  heading: 'Posting and Publication on Auto-pilot',
                  image: './../../../assets/images/services/service-15.jpg',
                  paragraphs:[
                    {id:1, descrption: '✓ Strategy'},
                    {id:2, descrption: '✓ Content'},
                    {id:3, descrption: '✓ Posting'},
                    {id:4, descrption: 'At Digital Engage we have you covered from A-to-Z, from strategy to implementation and posting across the channels that matter the most to your audience. All without you having to lift a finger.'},
                  ]
                },
              ];
              this.tabLink = [
                { id: '1', title: 'Social Media Management Services' },
                { id: '2', title: 'You Have Enough to Do – like running a business!' },
                { id: '3', title: 'Social Media Content – done for you daily!' },
                { id: '4', title: 'Social Planning and Strategy' },
                { id: '5', title: 'Posting and Publication on Auto-pilot' },
              ];
              break;

              case 'reputation-management':
            this.tabContents = [
              {
                id: '1',
                heading: 'Reputation Management SERVICES',
                image: './../../../assets/images/services/service-16.webp',
                paragraphs:[
                  {id:1, descrption: 'Take Back Control of your Reputation Online'},
                  {id:2, descrption: 'Bury Negative Content in Google'},
                  {id:3, descrption: 'Defensive Protection from Attacks'},
                  {id:4, descrption: 'Enhance Visibility of the Positive'},
                  {id:5, descrption: 'Control the Narrative of your Brand'},
                  {id:6, descrption: 'No more missed sales due to negative reviews or press'},
                  {id:7, descrption: 'Grow followers and network'},
                  {id:8, descrption: 'Grow followers and network'},
                  {id:9, descrption: 'Improve customer service'},
                  {id:10, descrption: 'Enhance trust and reputation'},
                ]
              },
              {
                id: '2',
                heading: "Reputation Management is so essential",
                image: './../../../assets/images/services/service-17.webp',
                paragraphs:[
                  {id:1, descrption: ' Customers searching on Google want to learn more about your business and the experiences others have had with your brand. They want to validate that your company has a proven track record of delivering on promises and a history of satisfied customers.'},
                  {id:2, descrption: '<strong>In the online world this means:</strong>'},
                  {id:3, descrption: 'Encouraging, collecting, promoting, and prominently publishing user reviews'},
                  {id:4, descrption: 'Claiming and being active on social media profiles'},
                  {id:5, descrption: 'Engaging with your audience on social media, forums, other communities, and more.'},
                  {id:6, descrption: 'Digital Engage is a digital marketing and web design company based in Tennessee. Besides reputation management, our professional team has expertise in services like Search engine optimization, Reputation management, Managed IT services, Video and photo services, Branding and logo agency, Website hosting services, Website support services, and Local SEO Services. Call us today to learn more about our services.'},
                ]
              },
              {
                id: '3',
                heading: 'What People Say About You or Your Company Matters',
                image: './../../../assets/images/services/service-18.jpg',
                paragraphs:[
                  {id:1, descrption: 'Even for those companies that employ an in-house PR manager, it is virtually impossible for any singular individual or team to identify, track, sort, and analyze the entirety of the internet looking for “mentions” of a brand or website.'},
                  {id:2, descrption: 'Fact is, digital dirt often exists even if you aren’t aware of it. And this “dirt” could be tarnishing your brand’s reputation, costing you big and hurting more than just your bottom line.'},
                  {id:3, descrption: '67.7% of Online Customers are influenced by Reviews According to Moz, up to 67.7% of online buyers admitted that customer reviews made a difference as to which brand, site or company they chose to purchase from.'},
                  {id:4, descrption: 'A SINGLE Negative Review can Cost up to 22% of New Customers Similar research revealed that a single negative review in the search results can result in a loss of up to 22% of potential new customers.'},
                ]
              },
            ];
            this.tabLink = [
              { id: '1', title: 'Reputation Management SERVICES' },
              { id: '2', title: 'Reputation Management is so essential' },
              { id: '3', title: 'What People Say About You or Your Company Matters' },
            ];
            break;

            case 'branding-logo':
              this.tabContents = [
                {
                  id: '1',
                  heading: 'Logo Design Services',
                  image: './../../../assets/images/services/service-19.webp',
                  paragraphs:[
                    {id:1, descrption: '<strong>Unique logo designs that your customers will immediately recognize.Identifiable</strong>'},
                    {id:2, descrption: 'Identifiable'},
                    {id:3, descrption: 'Attractive'},
                    {id:4, descrption: 'Variety of pricing options'},
                    {id:5, descrption: 'Custom created by Our talented graphic designers'},
                  ]
                },
                {
                  id: '2',
                  heading: "Branding Services",
                  image: './../../../assets/images/services/service-19.webp',
                  paragraphs:[
                    {id:1, descrption: '<strong>Consistent and comprehensive branding based on your vision and our solid research.</strong>'},
                    {id:2, descrption: 'Deliberate'},
                    {id:3, descrption: 'Strategic'},
                    {id:4, descrption: 'Research-based'},
                    {id:5, descrption: 'Consistent across print and digital media'},
                  ]
                },
                {
                  id: '3',
                  heading: 'The Benefits of Branding and Logo Creation',
                  image: './../../../assets/images/services/service-20.jpg',
                  paragraphs:[
                    {id:1, descrption: 'Instant brand recognition'},
                    {id:2, descrption: 'Visual representation of your business'},
                    {id:3, descrption: 'Consistent message in all marketing content'},
                    {id:4, descrption: 'Besides Branding and Logo Creation, our team has expertise in services like Search engine optimization, Paid search, Social media advertising, Reputation management, Managed IT services, Video and photos services, Website hosting services, Website support services, Local SEO Services, and others. Call us today to learn more about our services.'},
                  ]
                },
                {
                  id: '4',
                  heading: 'Why Are Branding and Logo Creation So Important?',
                  image: './../../../assets/images/services/service-21.webp',
                  paragraphs:[
                    {id:1, descrption: 'Customers come to recognize a brand and make assumptions about it based on what they already know. It’s critical that your brand is easily recognizable to customers with a catchy visual. A custom-made logo provides that sight recognition.'},
                    {id:2, descrption: 'But branding goes beyond just a custom logo. Everything about your business, from design work to the written copy, should convey a consistent message with a consistent style. Our branding service team works with you to capture that message and carry it through all content.'},
                  ]
                },
              ];


              this.tabLink = [
                { id: '1', title: 'Logo Design Services' },
                { id: '2', title: 'Branding Services' },
                { id: '3', title: 'The Benefits of Branding and Logo Creation' },
                { id: '4', title: 'Why Are Branding and Logo Creation So Important?' }
              ];

              break;


              
            case 'website-hosting':
              this.tabContents = [
                {
                  id: '1',
                  heading: 'Website Hosting Services',
                  image: './../../../assets/images/services/service-22.webp',
                  paragraphs:[
                    {id:1, descrption: '<strong>We provide secure and best web hosting services for businesses of all sizes.</strong>'},
                    {id:2, descrption: 'Reliable servers'},
                    {id:3, descrption: 'Safe and secure'},
                    {id:4, descrption: '24/7 tech support'},
                    {id:5, descrption: 'Affordable options available'},
                  ]
                },
                {
                  id: '2',
                  heading: "Critical Reasons for Website Hosting",
                  image: './../../../assets/images/services/service-22.webp',
                  paragraphs:[
                    {id:1, descrption: 'Knowledgeable experts'},
                    {id:2, descrption: 'Fast web service'},
                    {id:3, descrption: 'Domain name registration'},
                    {id:4, descrption: 'Email service'},
                  ]
                },
                {
                  id: '3',
                  heading: 'Why is Website Hosting So Important?',
                  image: './../../../assets/images/services/service-23.webp',
                  paragraphs:[
                    {id:1, descrption: 'Your website is a portal for your business. It draws customers in, provides them with information, and gives them the opportunity to communicate with you. You can’t afford crashes due to high traffic, glitches in email service, or other problems with your website. Services provided by web hosting companies apply different strategies. If customers search web hosting support companies, website design or hosted website solutions and find your website difficult to use or unreliable, they will find another website. A powerful website is a powerful connection tool. Digital Engage is a secure web hosting company that can provide secure and reliable website services. Whether you are looking for local web hosting service, web hosting media or customized options for your needs.'},
                  ]
                },
                {
                  id: '4',
                  heading: 'Shared Website Hosting Services',
                  image: './../../../assets/images/services/service-24.webp',
                  paragraphs:[
                    {id:1, descrption: 'Shared hosting is our most economical option. It is just what it sounds like: multiple websites share one server. This service works best for smaller websites.'},

                  ]
                },

                {
                  id: '5',
                  heading: 'Clustered Website Hosting Services',
                  image: './../../../assets/images/services/service-24.webp',
                  paragraphs:[
                    {id:1, descrption: 'Clustered hosting services utilize multiple servers working together. Spreading the burden of service over many machines reduces the risk that one task will interfere with another and slow down the website. The cost of clustered web hosts is moderate.'},

                  ]
                },

                {
                  id: '6',
                  heading: 'Virtual Private Server Hosting Services',
                  image: './../../../assets/images/services/service-24.webp',
                  paragraphs:[
                    {id:1, descrption: 'Virtual private server hosting can help you ramp up the performance of your website.'},
                    {id:2, descrption: 'Besides Hosting services, our team has expertise in Search engine optimization, Paid Search, Social media advertising, Reputation management, Managed IT services, Video and photo services, Branding and logo agency,  Website support services, and Local SEO Services. Call us today to learn more about our services.'},

                  ]
                },
              ];


              this.tabLink = [
                { id: '1', title: 'Website Hosting Services' },
                { id: '2', title: 'Critical Reasons for Website Hosting' },
                { id: '3', title: 'Why is Website Hosting So Important?' },
                { id: '4', title: 'Shared Website Hosting Services' },
                { id: '5', title: 'Clustered Website Hosting Services' },
                { id: '6', title: 'Virtual Private Server Hosting Services' }
              ];

              break;



              case 'web-support':
                this.tabContents = [
                  {
                    id: '1',
                    heading: 'Web Support Services',
                    image: './../../../assets/images/services/service-25.webp',
                    paragraphs:[
                      {id:1, descrption: '<strong>Digital Engage provides one-stop shopping for all your web support needs to create an effective web presence.</strong>'},
                      {id:2, descrption: 'Search Engine Optimization'},
                      {id:3, descrption: 'Updating Website Software'},
                      {id:4, descrption: 'Improving Website Speed'},
                      {id:5, descrption: 'Adding New Content'},
                      {id:6, descrption: 'Excellent Customer Support'},
                    ]
                  },
                  {
                    id: '2',
                    heading: "Why You Need Web Support Services for Your Business",
                    image: './../../../assets/images/services/service-26.webp',
                    paragraphs:[
                      {id:1, descrption: 'Website Maintenance: For any type of business or organization, website upkeep, and support services are essential.'},
                      {id:2, descrption: 'Enhanced Online Efficiency: These services improve overall user experience by continuously monitoring website speed, optimizing files and pictures, and quickly fixing any performance-related issues.'},
                      {id:3, descrption: 'Increased Safety:It is more important than ever to make sure your website is secure in the ever changing digital world. Services for website maintenance are essential for securing your website and your priceless user data.'},
                      {id:4, descrption: 'Web Support: Our technology experts will monitor your website’s speed to ensure a streamlined website operation.'},
                    ]
                  },
                  {
                    id: '3',
                    heading: 'Why Are Web Support Services So Important?',
                    image: './../../../assets/images/services/service-27.jpg',
                    paragraphs:[
                      {id:1, descrption: 'Customers assume that any business has a web presence. To remain competitive, you need a comprehensive digital strategy. You could always create that presence piecemeal with several service providers, but why bother?'},
                      {id:2, descrption: 'Our team provides every digital service you need to stay in the game, customized for you. When you work with one team, you can ensure every detail is noticed and off-brand.'},
                    ]
                  },
                  {
                    id: '4',
                    heading: 'Comprehensive Solutions',
                    image: './../../../assets/images/services/service-28.webp',
                    paragraphs:[
                      {id:1, descrption: 'Our web support services offer technical help to resolve problems with the performance, security, and functioning of your websites. This includes maintaining servers, identifying and fixing technological issues, and speeding up websites.'},
                      {id:2, descrption: 'On top of that, our graphic designers make it all look good.'},
  
                    ]
                  },
  
                  {
                    id: '5',
                    heading: 'Content Management',
                    image: './../../../assets/images/services/service-29.webp',
                    paragraphs:[
                      {id:1, descrption: 'We support the upkeep and management of text, photos, videos, and other multimedia on websites. This guarantees that the website will always be up-to-date and pertinent.'},
  
                    ]
                  },
  
                  {
                    id: '6',
                    heading: 'Benefits of Web Support from Digital Engage',
                    image: './../../../assets/images/services/service-30.jpg',
                    paragraphs:[
                      {id:1, descrption: 'You are the expert on your business, but are you an expert in website development, security, graphic design, and social media? No one person has all the skills necessary to build and maintain an effective web presence. That’s why you need a team to support you.'},
                      {id:2, descrption: 'Our team works with you to create and maintain a website and digital marketing campaign that matches your vision. Apart from that, our team is always available to offer any technical help required by our clients. We work with you to reflect any changes as your business grows over time.'},
  
                    ]
                  },
                ];
  
  
                this.tabLink = [
                  { id: '1', title: 'Web Support Services' },
                  { id: '2', title: 'Why You Need Web Support Services for Your Business' },
                  { id: '3', title: 'Why Are Web Support Services So Important?' },
                  { id: '4', title: 'Comprehensive Solutions' },
                  { id: '5', title: 'Content Management' },
                  { id: '6', title: 'Benefits of Web Support from Digital Engage' }
                ];
  
                break;
  
                case 'local-seo':
                this.tabContents = [
                  {
                    id: '1',
                    heading: 'Local SEO Services',
                    image: './../../../assets/images/services/service-31.jpg',
                    paragraphs:[
                      {id:1, descrption: 'Some businesses have a nationwide or global reach and can market on the search engine results pages without worrying about the geographic location of their customers. Other companies, such as car repair shops, restaurants, local stores, and others, do not have that luxury. They depend on customers being at least within driving distance. When it comes for searching local search engine optimization agencies people use different words like: local search engine optimization providers, local search platform, local seo company, and others.'},
                      {id:2, descrption: 'Local Web Content'},
                      {id:3, descrption: 'Paid Advertising'},
                      {id:4, descrption: 'Landing Page Design'},
                      {id:5, descrption: 'Local Social Media Marketing'},
                      {id:6, descrption: 'Google My Business Optimization for Local Businesses'},
                      {id:7, descrption: 'Local Directories'},
                    ]
                  },
                  {
                    id: '2',
                    heading: "How Does Local Web Content Work?",
                    image: './../../../assets/images/services/service-32.jpg',
                    paragraphs:[
                      {id:1, descrption: 'Including frequent content that relates to local and community events can draw in consumers from the immediate area. We use the best local SEO tools to help you decide on your content, like a local rank tracker. Consider announcing community activities, highlighting the achievements of people in the neighbourhood, reviewing local attractions, and supporting events happening in the region.'},
                      {id:2, descrption: 'Case studies offer a way to promote your business while highlighting the local community. Present case studies that showcase a resident of the city or county who benefitted from your goods or services. The case study helps the audience relate to a satisfied customer and to envision how your product will help them in the future.'},
                      {id:3, descrption: 'Digital Engage has experience in using local SEO tools, identifying, curating, and customizing web content that attracts potential customers, tailored to promote and define the brand image of the business.'},
                    ]
                  },
                  {
                    id: '3',
                    heading: 'Paid Advertising',
                    image: './../../../assets/images/services/service-33.jpg',
                    paragraphs:[
                      {id:1, descrption: 'Pay-per-click (PPC) advertising can bring traffic to your website, but a haphazard approach merely wastes money on clicks that don’t translate into sales. Digital Engage conducts keyword research to optimize your PPC strategy and the best local business search engine optimisation tools to draw high-quality inbound traffic that is receptive to your message.'},
                    ]
                  },
                  {
                    id: '4',
                    heading: 'Landing Page Design',
                    image: './../../../assets/images/services/service-33.jpg',
                    paragraphs:[
                      {id:1, descrption: 'Your landing page is typically the first glimpse that a potential customer has of your website. Search engine optimization of your landing page (or landing pages) increases the likelihood that local consumers will find your business. An optimized landing page can improve conversion rate and increase the effectiveness of both organic and PPC marketing strategies.'},
                      {id:2, descrption: 'Digital Engage as a Local Search Engine Optimization Company uses the latest in SEO algorithms to optimize your website so that your business appears before other local businesses in local search results.'},
  
                    ]
                  },
  
                  {
                    id: '5',
                    heading: 'Local Social Media Marketing',
                    image: './../../../assets/images/services/service-34.jpg',
                    paragraphs:[
                      {id:1, descrption: 'Local SEO strategy must include Social media as it allows for customized messages to be delivered to different segments of the local area. Building a community through social media drives organic web traffic to your website, while supporting local SEO solutions. Social media marketing also generates search queries that boost your site’s rating in search engines. People search different queries such as, local search expert, local search marketing expert and others to achieve their social media marketing goals. Social media sites also connect businesses to sources of content that engage customers and pre-existing communities that could be markets for further business growth. Many social media communities have explicit rules against advertising. Digital Engage can help you grow your social media presence using both paid advertising and other forms of outreach besides advertisement.'},
  
                    ]
                  },
  
                  {
                    id: '6',
                    heading: 'Google My Business Optimization for Local Businesses',
                    image: './../../../assets/images/services/service-35.jpg',
                    paragraphs:[
                      {id:1, descrption: 'Google My Business (GMB) is Google’s local business review tool that allows consumers to search for local businesses and allows local businesses to establish their reputation through online reviews. When potential customers search for nearby companies, Google displays candidate businesses and multiple locations in the local area. Each listing includes business information, text, images, and other information, including the website URL, phone, and e-mail contact information. Optimization of a business’s GMB listing is an important part of local search engine optimization.'},
                      {id:2, descrption: 'Digital Engage, is a top local search engine optimization firm, and we optimise Google My Business profiles – google maps to improve their rank on Google searches and ensure the relevance and accuracy of the content. We also help clients to manage their google business profile and respond to consumer feedback.'},
  
                    ]
                  },

                  {
                    id: '7',
                    heading: 'Local Directories Marketing',
                    image: './../../../assets/images/services/service-36.webp',
                    paragraphs:[
                      {id:1, descrption: 'In addition to Google My Business, many searchable directories such as the Yellow Pages and Yelp offer opportunities for local customers to review local businesses related to home services local seo services. For most regions of the country, there are many directories, and local SEO companies can find it challenging to keep up with all of them and ensure that the information on them is up to date. Digital Engage is a local search engine optimization firm manages local directory listings so that businesses can draw organic web traffic from local search engine results and respond to reviews to maintain their business and brand reputation.'},
                      {id:2, descrption: 'Digital Engage offers local SEO services for local businesses as part of a comprehensive set of digital marketing services, including web design, SEO optimization, market research, reputation management, and web advertising management. We have a decade of experience in digital marketing and in-depth knowledge of the Nashville, Knoxville, and Tri-Cities area. Our local search engine marketing company specialises in working with local businesses to develop their brand identity and online presence using the latest digital marketing techniques to add them to local search websites and directories. We are a local search marketing company that cares about its customers growth, so speak with our experts and discover the potential of digital marketing to take your business in a new direction, call (615) 997-0736 today.'},
  
                    ]
                  },
                ];
  
  
                this.tabLink = [
                  { id: '1', title: 'Local SEO Services' },
                  { id: '2', title: 'How Does Local Web Content Work?' },
                  { id: '3', title: 'Paid Advertising' },
                  { id: '4', title: 'Landing Page Design' },
                  { id: '5', title: 'Local Social Media Marketing' },
                  { id: '6', title: 'Google My Business Optimization for Local Businesses' },
                  { id: '7', title: 'Local Directories Marketing' }
                ];
  
                break;
  
                case 'word-press':
                  this.tabContents = [
                    {
                      id: '1',
                      heading: 'CUSTOM WORDPRESS DESIGN SERVICES',
                      image: './../../../assets/images/services/service-37.jpg',
                      paragraphs:[
                        {id:1, descrption: '<strong>Custom WordPress Web Design services for designing as well as it looks.</strong>'},
                        {id:2, descrption: 'User-friendly and Optimized.'},
                        {id:3, descrption: 'Fast, Responsive, and Fully Functional on all viewing platforms.'},
                        {id:4, descrption: 'Page Runs Efficiently with The Shortest Possible Loading Times.'},
                        {id:5, descrption: 'SEO-friendly Web Pages.'},
                        {id:6, descrption: 'Creative Design That Suits The Style of Your Business.'},
                      ]
                    },
                    {
                      id: '2',
                      heading: "What is WordPress?",
                      image: './../../../assets/images/services/service-38.jpg',
                      paragraphs:[
                        {id:1, descrption: 'WordPress hosting is the easiest way to create a website. After the initial design and writing process, WordPress websites take little technical knowledge to maintain—they are the perfect option for on-the-go business owners.'},
                        {id:2, descrption: 'The WordPress website designer allows you to change the design of your web page however you see fit. After our team takes care of the initial design and development of your page, you can update it whenever you want with a simple click of your mouse. You will never need to speak to a web developer to make changes to your website.'},
                      ]
                    },
                    {
                      id: '3',
                      heading: 'How Can a WordPress Site Expand Your Business?',
                      image: './../../../assets/images/services/service-39.jpg',
                      paragraphs:[
                        {id:1, descrption: '<strong>Digital Marketing Strategies</strong>'},
                        {id:2, descrption: 'Websites make digital marketing easy. A well-designed website can serve as the foundation for digital marketing strategies that encourage customers to visit your website. Once customers land on your website, they can learn more about the service you provide and are much more likely to make a purchase.'},
                        {id:3, descrption: '<strong>E-Commerce</strong>'},
                        {id:4, descrption: 'The best way to use your website to expand your business is by adding e-commerce options. With careful web design, we can integrate e-commerce into your website to encourage your customers to purchase your goods or services.'},
                        {id:5, descrption: 'Additionally, the WordPress designer allows you to integrate subscription services and donations. Donations can be especially helpful for small businesses, and subscription services allow you to provide exclusive, high-quality content to your customers.'},
                      ]
                    },
                    {
                      id: '4',
                      heading: 'Conclusion',
                      image: './../../../assets/images/services/service-40.jpg',
                      paragraphs:[
                        {id:1, descrption: 'An effective website can make the difference between a failing business and a successful business. By leveraging our team of expert WordPress web developers, we can create a website that attracts customers and serves as a foundation for further digital marketing strategies.'},
                        {id:2, descrption: 'Our team at Digital Engage specializes in designing and developing websites on platforms like woocommerce, Shopify, and Wix developers. Our team is also an expert in web development on Joomla, Hubspot, OsCommerce, and Prestashop. For more information contact us about how we can help you create the perfect web page for your business, check our blog section, discussing the best ways to optimize your page for search engines.'},
    
                      ]
                    },

                  ];
    
    
                  this.tabLink = [
                    { id: '1', title: 'CUSTOM WORDPRESS DESIGN SERVICES' },
                    { id: '2', title: 'What is WordPress?' },
                    { id: '3', title: 'How Can a WordPress Site Expand Your Business?' },
                    { id: '4', title: 'Conclusion' },
                  ];
    
                  break;


                  case 'woo-commerce':
                    this.tabContents = [
                      {
                        id: '1',
                        heading: 'A Woocommerce Development Company That Delivers',
                        image: './../../../assets/images/services/service-41.webp',
                        paragraphs:[
                          {id:1, descrption: 'We’re a leading WooCommerce development company, and our Woocommerce specialists are here to help you create a successful online store. Our team of experts can Woocommerce Web Designers and web developers help you with everything from custom WooCommerce design and development to integration and migration'},
                          {id:2, descrption: 'With over 10 years of experience in eCommerce, our woocommerce web desginer knows what it takes to create a successful online store. We’re here to help you every step of the way, from planning and development to launch and beyond.'},
                        ]
                      },
                      {
                        id: '2',
                        heading: "What is WooCommerce?",
                        image: './../../../assets/images/services/service-42.webp',
                        paragraphs:[
                          {id:1, descrption: 'WooCommerce is a powerful custom plugin development eCommerce platform that enables you to create an online store. It’s a free WordPress plugin that allows you to sell anything, anywhere with custom wordpress themes. The WooCommerce platform is used by millions of businesses around the world, and it’s the perfect solution for small to medium-sized businesses if it’s digital marketing is done properly.'},
                        ]
                      },
                      {
                        id: '3',
                        heading: 'Highly Skilled Team of WooCommerce Developers',
                        image: './../../../assets/images/services/service-43.webp',
                        paragraphs:[
                          {id:1, descrption: 'Our team of highly skilled WooCommerce developers can help you with everything from custom WooCommerce development to integration and migration. We’re here to help you create a successful online store.'},
                        ]
                      },
                    ];
      
      
                    this.tabLink = [
                      { id: '1', title: 'A Woocommerce Development Company That Delivers' },
                      { id: '2', title: 'What is WooCommerce?' },
                      { id: '3', title: 'Highly Skilled Team of WooCommerce Developers' },
                    ];
      
                    break;

                    case 'shopify':
                    this.tabContents = [
                      {
                        id: '1',
                        heading: 'Best Shopify Website Designers',
                        image: './../../../assets/images/services/service-44.webp',
                        paragraphs:[
                          {id:1, descrption: '<strong>We create custom Shopify stores and themes for your eCommerce business that are highly converting. Generate more revenue than ever before.</strong>'},
                          {id:2, descrption: 'Custom Solutions'},
                          {id:3, descrption: 'Highly Converting Shopify Store'},
                          {id:4, descrption: 'Stores That Rank on Google'},
                          {id:5, descrption: 'Skilled Shopify Experts'},
                          {id:6, descrption: 'Great Customer Support'},
                        ]
                      },
                      {
                        id: '2',
                        heading: "Shopify Store Design & Development Experts",
                        image: './../../../assets/images/services/service-45.webp',
                        paragraphs:[
                          {id:1, descrption: 'We can tailor the store to your store’s needs. Our Certified Shopify Developers are capable of creating customized themes and widgets for your online store. We are not limited to the shopify platform; we develop websites on WordPress, Woocommerce, Magento, Squarespace, and other platforms.  The custom design package provides a couple of design changes, so you can change things around as required. Our web designers specializing in shopify aim to create high-end Shopify solutions at reasonable costs and premium quality.'},
                        ]
                      },
                      {
                        id: '3',
                        heading: 'Affordable Custom Shopify Theme Development?',
                        image: './../../../assets/images/services/service-46.webp',
                        paragraphs:[
                          {id:1, descrption: 'Being an industry expert, Our Shopify website design service company has a vast knowledge of designing customized Shopify themes for all kinds of businesses. The team at Digital Engage has shopify experts that use website builders to help you with adding a unique touch to your online store that will make you stand out from your competition. Not only this, but your custom Shopify theme will be an exact representation of the ideas that you have in mind.'},
                        ]
                      },

                      {
                        id: '4',
                        heading: 'Third-Party API Development',
                        image: './../../../assets/images/services/service-47.webp',
                        paragraphs:[
                          {id:1, descrption: 'We understand the use and deployment of robust and highly efficient API gateways for mobile applications and have experience enabling them to meet the needs of their customers. Our Shopify experts are very knowledgeable and have extensive experience developing scalable APIs.'},
                          {id:2, descrption: 'Whether you need it for a mobile app or your online store, we ensure you get what you need regarding third-party APIs. Digital Engage also has expertise in platforms such as Bigcommerce, Joomla, Hubspot,OsCommerce, and Prestashop.'},
                        ]
                      },

                      {
                        id: '5',
                        heading: 'Shopify Store Optimization',
                        image: './../../../assets/images/services/service-48.webp',
                        paragraphs:[
                          {id:1, descrption: 'Increasing and improving the user’s experience can benefit all the parties involved. Our focus is to increase the browsing experience through easy accessibility and secure payment options eliminating all the frequently encountered problems like website crashes, timeouts, and payment declines.'},
                          {id:2, descrption: 'We optimize your Shopify store to give the perfect blend of optimum user experience and functionality.'},
                        ]
                      },

                      {
                        id: '6',
                        heading: 'Create Magic with Shopify',
                        image: './../../../assets/images/services/service-49.webp',
                        paragraphs:[
                          {id:1, descrption: 'Shopify gives you complete freedom over what you want to create and what you want to achieve, albeit you need someone on your side who knows their way around it. With Digital Engage on your side, you can make magic happen online. With completely custom online stores that reflect your brand in the best possible way, we make sure that you get the right fit for your business.'},
                        ]
                      },

                      {
                        id: '7',
                        heading: 'Shopify SEO & Internet Marketing',
                        image: './../../../assets/images/services/service-50.webp',
                        paragraphs:[
                          {id:1, descrption: 'Digital Commerce and Ecommerce Analytics services are critical in improving eCommerce conversion rates and creating digital advertising strategies. Our marketers use search engine optimization techniques that have been tested to ensure you have the highest sales.'},
                          {id:2, descrption: 'We use the perfect blend of social media marketing, paid ads, and SEO to create a digital marketing strategy for your Shopify Store.'},
                        ]
                      },

                      {
                        id: '8',
                        heading: 'Quick & Easy to Set Up',
                        image: './../../../assets/images/services/service-51.webp',
                        paragraphs:[
                          {id:1, descrption: 'Shopify eCommerce websites are designed to be easy to set up as quickly as possible for customers. Changes can be made in real-time so that the operations are not affected in any way. Digital Engage makes it our priority to deliver quality projects while meeting deadlines so get in touch today!'},
                        ]
                      },

                      {
                        id: '9',
                        heading: 'Shopify App Development',
                        image: './../../../assets/images/services/service-52.webp',
                        paragraphs:[
                          {id:1, descrption: 'By designing an App for Shopify you can enhance Shopify functionality and integrate it with third-party software including an ERP or CRM system. Custom Shopify App Development also helps create automation or incorporate functionality not yet available in Shopify.'},
                          {id:2, descrption: 'Sometimes complex problems require custom applications so it is a critical component in Shopify Development.'},
                        ]
                      },

                      {
                        id: '10',
                        heading: 'Certified Shopify Partners',
                        image: './../../../assets/images/services/service-53.webp',
                        paragraphs:[
                          {id:1, descrption: 'Working with us you know that you’re working with certified Shopify designers and developers. Digital Engage is a certified Shopify Partner with countless projects under our belt and countless satisfied clients who are now scaling their business with our help and support.'},
                        ]
                      },
                    ];
      
      
                    this.tabLink = [
                      { id: '1', title: 'Best Shopify Website Designers' },
                      { id: '2', title: 'Shopify Store Design & Development Experts' },
                      { id: '3', title: 'Affordable Custom Shopify Theme Development?' },
                      { id: '4', title: 'Third-Party API Development' },
                      { id: '5', title: 'Shopify Store Optimization' },
                      { id: '6', title: 'Create Magic with Shopify' },
                      { id: '7', title: 'Shopify SEO & Internet Marketing' },
                      { id: '8', title: 'Quick & Easy to Set Up' },
                      { id: '9', title: 'Shopify App Development' },
                      { id: '10', title: 'Certified Shopify Partners' },
                    ];
      
                    break;

                    case 'wix-developer':
                      this.tabContents = [
                        {
                          id: '1',
                          heading: 'Hire The #1 Best Wix Designer',
                          image: './../../../assets/images/services/service-54.webp',
                          paragraphs:[
                            {id:1, descrption: 'With Wix, you can hire dedicated Wix developers and designers to create a stunning website or online store. Our wix certified developers. Wix website designers can create beautiful websites that are both user-friendly and responsive.'},
                            {id:2, descrption: 'Digital Engage has a team of expert Wix designers who can help you create a website that reflects your brand and business. Whether you need a simple or complex website, as expected from a professional Wix website designer, we can create a custom solution for you.'},
                            {id:3, descrption: 'Get in touch with us today to learn more about our Wix design services.'},
                          ]
                        },
                        {
                          id: '2',
                          heading: "Your Complete Website Design Solution",
                          image: './../../../assets/images/services/service-55.webp',
                          paragraphs:[
                            {id:1, descrption: 'As a Wix Partner, Digital Engage offers a complete website design solution for businesses of all sizes. We take care of everything from start to finish so you can focus on your business. Whether it’s Shopify, WordPress, WooCommerce, or any other platform, our wix website developers ensure you get the most professional website for your business.'},
                            {id:2, descrption: 'Our team will help you choose the perfect Wix plan for your needs, and we’ll even help you transfer your existing website to Wix.'},
                          ]
                        },
                        {
                          id: '3',
                          heading: 'Wix Web Design Experts',
                          image: './../../../assets/images/services/service-56.webp',
                          paragraphs:[
                            {id:1, descrption: 'Digital Engage has expertise in providing Wix web design and web development services. We have a team of Wix experts who can help you create a stunning website that is responsive and user-friendly.'},
                            {id:2, descrption: 'We have worked to develop custom Wix websites for businesses of all sizes. No matter your budget, we can help you create a website that reflects your brand. Our team also designs websites and stores on Magento, Squarespace, BigCommerce, and Drupal.'},
                            {id:3, descrption: 'Get in touch with us today to learn more about our Wix web design services!'},
                          ]
                        },

                        {
                          id: '4',
                          heading: 'Why Choose Digital Engage?',
                          image: './../../../assets/images/services/service-57.webp',
                          paragraphs:[
                            {id:1, descrption: 'Digital Engage is committed to helping businesses of all sizes grow and succeed online. We offer Wix web development and web design services tailored to your specific needs and budget.'},
                            {id:2, descrption: '<strong>When you choose Digital Engage, you can expect:</strong>'},
                            {id:3, descrption: 'A team of Wix experts who are dedicated to helping you succeed'},
                            {id:4, descrption: 'A comprehensive website design solution that is tailored to your needs'},
                            {id:5, descrption: 'A user-friendly and responsive website that is optimized for search engines'},
                            {id:6, descrption: 'Get in touch with us today to learn more about our Wix web design services!'},
                          ]
                        },
                      ];
        
        
                      this.tabLink = [
                        { id: '1', title: 'Hire The #1 Best Wix Designer' },
                        { id: '2', title: 'Your Complete Website Design Solution' },
                        { id: '3', title: 'Wix Web Design Experts' },
                        { id: '4', title: 'Why Choose Digital Engage?' },
                      ];
        
                      break;
    
                      case 'magento':
                        this.tabContents = [
                          {
                            id: '1',
                            heading: 'Hire Certified',
                            image: './../../../assets/images/services/service-58.webp',
                            paragraphs:[
                              {id:1, descrption: '<strong>Magento Developers</strong'},
                              {id:2, descrption: 'Magento is the leading eCommerce platform and our experienced Magento developers and web designers are some of the best in the business. With years of experience, our team can help you create the perfect Magento store for your business.'},
                              {id:3, descrption: 'Get in touch with us today for your free consultation!'},
                              {id:4, descrption: 'On average, 68% of clicks belong to the first three results with less than 3% of traffic ever clicking through to page #2.'},
                            ]
                          },
                          {
                            id: '2',
                            heading: "The Best Magento Web Designers Around",
                            image: './../../../assets/images/services/service-59.webp',
                            paragraphs:[
                              {id:1, descrption: 'Our Magento web designers are the best in the web development business. With years of experience under our belts, our team can help you create the perfect Magento store for your business.'},
                              {id:2, descrption: 'We know how important it is to have a well-designed website that represents your brand and helps convert visitors into customers.'},
                              {id:3, descrption: 'Magento is the perfect platform for creating such a powerful eCommerce website, and our Magento web designers are experts at functional Magento stores. We also design websites and online stores on WordPress, WooCommerce, Shopify, Wix Developer, and other platforms.'},
                            ]
                          },
                          {
                            id: '3',
                            heading: 'Migrate Your Existing Online Store to Magento',
                            image: './../../../assets/images/services/service-60.webp',
                            paragraphs:[
                              {id:1, descrption: 'Are you looking to migrate your existing online store to Magento? Our team of Magento experts can help. Magento is the perfect platform for businesses that are outgrowing their current eCommerce platform.'},
                              {id:2, descrption: 'Magento is more powerful and scalable than most other eCommerce platforms and it’s easy to migrate your existing store to Magento.'},
                              {id:3, descrption: 'This will give your business a boost in traffic and sales. Magento is also more SEO-friendly than most other eCommerce platforms, so you’ll be able to improve your search engine ranking and get more organic traffic.'},
                            ]
                          },
  
                          {
                            id: '4',
                            heading: 'Magento Website Design & UI/UX Services',
                            image: './../../../assets/images/services/service-61.webp',
                            paragraphs:[
                              {id:1, descrption: 'Our Magento web designers can help you create an unmatched functional user interface. We know the importance of visual aesthetics and their relation to user experience. Hence, we make it our job to deliver a unique and lasting website that leaves a mark on your target audience. Our team at Digital Engage also specializes in web development on platforms like Joomla, HubSpot, OsCommerce, and Prestashop.'},
                            ]
                          },

                          {
                            id: '4',
                            heading: 'Magento Website Development That is Unmatched',
                            image: './../../../assets/images/services/service-62.webp',
                            paragraphs:[
                              {id:1, descrption: 'Magento is a platform that requires expert development to properly utilize. Magento’s documentation is extensive, but a proper Magento website still requires expert Magento web developers. Our Magento developers and designers have years of experience and are some of the best in the business. They will be able to create a Magento website that meets all your needs and exceed your expectations.'},
                            ]
                          },

                          {
                            id: '5',
                            heading: 'Take Your eCommerce business To New Heights With Magento',
                            image: './../../../assets/images/services/service-63.webp',
                            paragraphs:[
                              {id:1, descrption: 'Magento is the perfect platform for businesses that want to take their eCommerce business to new heights. Magento is more powerful and scalable than most other eCommerce platforms and it’s easy to migrate your existing store to Magento.'},
                              {id:2, descrption: 'This will give your business a boost in traffic and sales. Magento has built in integrations that help you run your online store more efficiently and productively. Not to mention the compatibility that it has with all the leading search engines like Google and Bing.'},
                            ]
                          },

                          {
                            id: '6',
                            heading: 'What Services',
                            image: './../../../assets/images/services/service-64.webp',
                            paragraphs:[
                              {id:1, descrption: '<strong>Do We Have To Offer?</strong>'},
                              {id:2, descrption: 'Our Magento experts offer a wide range of Magento services, including:'},
                              {id:3, descrption: 'Magento website design'},
                              {id:4, descrption: 'Magento development'},
                              {id:5, descrption: 'Magento integration'},
                              {id:6, descrption: 'Magento migration'},
                              {id:7, descrption: 'Magento support and maintenance'},
                              {id:8, descrption: 'Magento SEO'},
                              {id:9, descrption: 'No matter what your needs are, our Magento experts can help. Contact us today to get started!'},
                            ]
                          },

                          {
                            id: '7',
                            heading: 'What Services',
                            image: './../../../assets/images/services/service-65.webp',
                            paragraphs:[
                              {id:1, descrption: 'Why Choose Us As Your Magento Partners?'},
                              {id:2, descrption: 'There are many Magento web design and development companies out there, but why should you choose Digital Engage as your Magento partners? We’re the leading Magento development company because we’re:'},
                              {id:3, descrption: 'Experienced'},
                              {id:4, descrption: 'Certified'},
                              {id:5, descrption: 'Reliable'},
                              {id:6, descrption: 'Affordable'},
                              {id:7, descrption: 'We have a team of experienced Magento Certified developers who know every nook and corner of Magento. This means they have the skills and knowledge to create a successful Magento store for your business. We’re also a reliable Magento web development company.'},
                              {id:8, descrption: 'We know how important it is to meet deadlines and we always deliver on time.'},
                            ]
                          },
                        ];
          
          
                        this.tabLink = [
                          { id: '1', title: 'Hire Certified' },
                          { id: '2', title: 'The Best Magento Web' },
                          { id: '3', title: 'Migrate Your Existing Online Store to Magento' },
                          { id: '4', title: 'Magento Website Design & UI/UX Services' },
                          { id: '5', title: 'Magento Website Development That is Unmatched' },
                          { id: '6', title: 'Take Your eCommerce business To New Heights With Magento' },
                          { id: '7', title: 'What Services' },
                          { id: '8', title: 'Why Choose Us As Your Magento Partners?' },
                        ];
          
                        break;
      

                      
                        
                          case 'square-space':
                          this.tabContents = [
                            {
                              id: '1',
                              heading: 'Top-Rated Squarespace Web Designers',
                              image: './../../../assets/images/services/service-66.webp',
                              paragraphs:[
                                {id:1, descrption: 'Digital Engage is home to some of the top-rated Squarespace web designers and Squarespace web developers in the industry. Our team has years of experience and we can guarantee you will get the best Squarespace web design for your business. We have worked on many web design projects and if you need a Squarespace website design, Digital Engage is the right place to be.'},
                                {id:2, descrption: 'Our team of professional Squarespace web designers will work with you to create a beautiful and functional website. We can help you choose the perfect Squarespace template for your business, and we will custom-design and develop your site to meet your specific needs.'},
                                {id:3, descrption: 'Whether you need a simple website or a complex eCommerce site, our Expert Squarespace web developers can help you create the perfect website for your business. We are not limited to Squarespace; our team also designs websites on WordPress, WooCommerce, Shopify, and Wix Developers. Digital Engage is the perfect partner for your Squarespace web design. Contact us today to learn more about our services.'},
                              ]
                            },
                            {
                              id: '2',
                              heading: "A Squarespace Design That is Functional & Beautiful",
                              image: './../../../assets/images/services/service-67.webp',
                              paragraphs:[
                                {id:1, descrption: 'When you work with Digital Engage, you can rest assured that your website will be both functional and beautiful. We take the time to understand your business and your goals for your website. We then create a custom Squarespace website design that is created to help you achieve those goals.'},
                                {id:2, descrption: 'Not only will your Squarespace website design be beautiful, but it will also be easy to use and navigate. Our expert Squarespace web developers team will make sure that your website is designed with your users in mind.'},
                              ]
                            },
                            {
                              id: '3',
                              heading: 'The Perfect Partner for Your Squarespace Web Design & Development Needs',
                              image: './../../../assets/images/services/service-68.webp',
                              paragraphs:[
                                {id:1, descrption: 'If you have custom needs and requirements it is quite possible that you will need to look for a partner that specializes in the custom development of Squarespace websites. This is where we come into the picture and function as your one-stop shop for all things related to Squarespace web design and development. Our team of Expert Squarespace web developers can help you create custom websites that will help your business reach new heights of growth and success.'},
                                {id:2, descrption: 'Contact Us'},
                              ]
                            },
    
                            {
                              id: '4',
                              heading: 'Fully Customizable With Plugins',
                              image: './../../../assets/images/services/service-69.webp',
                              paragraphs:[
                                {id:1, descrption: 'If you can dream it, we can build it. Our team of Expert Squarespace web developers can create custom plugins and integrations to make your website work exactly the way you need it to.'},
                                {id:2, descrption: 'Whether you need an integration with your CRM or a custom plugin to help with your SEO, our team can help.'},
                              ]
                            },
    
                            {
                              id: '5',
                              heading: 'Benefits of Using Squarespace',
                              image: './../../../assets/images/services/service-70.webp',
                              paragraphs:[
                                {id:1, descrption: 'There are many benefits of using Squarespace for your website. Squarespace is an easy-to-use platform that allows you to create a beautiful and functional website with no programming required. Squarespace website designs are a preference of many small business owners and creative entrepreneurs.'},
                                {id:2, descrption: 'Squarespace is also a very flexible platform. You can start with a simple website and then add more features and functionality as your business grows.'},
                                {id:3, descrption: 'Some other benefits of using Squarespace include:'},
                                {id:4, descrption: 'No programming knowledge is required'},
                                {id:5, descrption: 'Easy to use'},
                                {id:6, descrption: 'Flexible'},
                                {id:7, descrption: 'Scalable'},
                                {id:8, descrption: 'Affordable'},
                                {id:9, descrption: 'If you are looking for a website platform that is easy to use and scalable, Squarespace is the perfect choice for your business.'},
                              ]
                            },
  
                            {
                              id: '6',
                              heading: 'Squarespace Offers a Whole WLot of Flexibility',
                              image: './../../../assets/images/services/service-71.webp',
                              paragraphs:[
                                {id:1, descrption: 'There are many reasons to use Squarespace but one of the most important ones is its flexibility. Squarespace allows for a wide range of customization so that you can create the website of your dreams without having to be a programmer or hire one.'},
                                {id:2, descrption: 'With Squarespace, you can:'},
                                {id:3, descrption: 'Pick from a wide range of templates'},
                                {id:4, descrption: 'Customize your template with your own branding'},
                                {id:5, descrption: 'Add plugins and integrations to make your website work exactly the way you need it to.'},
                              ]
                            },
                            {
                              id: '7',
                              heading: 'Affordable Squarespace Website Development Services',
                              image: './../../../assets/images/services/service-72.webp',
                              paragraphs:[
                                {id:1, descrption: 'There are many reasons to use Squarespace but one of the most important ones is its flexibility. Squarespace allows for a wide range of customization so that you can create the website of your dreams without having to be a programmer or hire one.'},
                                {id:2, descrption: 'We believe that everyone should have access to high-quality web design and development services. That’s why we offer affordable Squarespace development services. We work with you to create a custom quote for your project.'},
                              ]
                            },
                          ];
            
            
                          this.tabLink = [
                            { id: '1', title: 'Top-Rated Squarespace Web Designers' },
                            { id: '2', title: 'A Squarespace Design That is Functional & Beautiful' },
                            { id: '3', title: 'The Perfect Partner for Your Squarespace Web Design & Development Needs' },
                            { id: '4', title: 'Fully Customizable With Plugins' },
                            { id: '5', title: 'Benefits of Using Squarespace' },
                            { id: '6', title: 'Squarespace Offers a Whole WLot of Flexibility' },
                            { id: '7', title: 'Affordable Squarespace Website Development Services' },
                          ];
            
                          break;

                          case 'big-commerce':
                            this.tabContents = [
                              {
                                id: '1',
                                heading: 'Looking For Expert',
                                image: './../../../assets/images/services/service-73.webp',
                                paragraphs:[
                                  {id:1, descrption: '<strong>BigCommerce Web Designers?</strong>'},
                                  {id:2, descrption: 'Digital Engage is your answer. We’re highly skilled BigCommerce web experts, and our big commerce designer has years of experience crafting beautiful, responsive BigCommerce themes.'},
                                  {id:3, descrption: 'Not only do we design great-looking BigCommerce stores, but we also develop custom functionality to take your store to the next level. From custom product pages to complex integrations, our team can handle it all.'},
                                  {id:4, descrption: 'If you’re looking for a BigCommerce developer that can help you with both big commerce web design and development, look no further than Digital Engage.'},
                                  {id:5, descrption: 'Get in touch with us today to learn more about our BigCommerce services.'},
                                ]
                              },
                              {
                                id: '2',
                                heading: "Want To Take Your Bigcommerce Store to the Next Level?",
                                image: './../../../assets/images/services/service-74.webp',
                                paragraphs:[
                                  {id:1, descrption: 'We help businesses just like yours with BigCommerce web designer services that create a great user experience and help increase sales.'},
                                  {id:2, descrption: 'BigCommerce is the perfect platform for businesses looking to take their online presence to the next level. You can contact us today if you’re interested in BigCommerce or any other web designing and development platform like WordPress, WooCommerce, Shopify, or Wix Developers. We’ll be happy to answer all your questions.'},
                                ]
                              },
                              {
                                id: '3',
                                heading: 'Why Choose BigCommerce?',
                                image: './../../../assets/images/services/service-75.webp',
                                paragraphs:[
                                  {id:1, descrption: 'BigCommerce gives you the flexibility to create a unique online store that reflects your brand. Working with experts in BigCommerce design and development, you can create a store that is not only beautiful but also optimizes the user experience to increase sales.'},
                                  {id:2, descrption: 'With BigCommerce you can customize your online store by adding API-level integrations where web designer and web developer can help for app-level extensions. BigCommerce also provides a wide range of BigCommerce themes to choose from, so you can find the perfect design for your store.'},
                                ]
                              },
      
                              {
                                id: '4',
                                heading: 'Benefits of a BigCommerce Platform',
                                image: './../../../assets/images/services/service-76.webp',
                                paragraphs:[
                                  {id:1, descrption: '<strong>BigCommerce offers many benefits like:<strong>'},
                                  {id:2, descrption: 'BigCommerce provides a single platform to run your business from start to finish. BigCommerce stores are fast, reliable, and secure, making them a great choice for businesses that are looking to grow..'},
                                  {id:3, descrption: 'BigCommerce gives you the flexibility to create a unique online store that reflects your brand. Working with our BigCommerce design and development team, you can get the best expression of your brand online.'},
                                  {id:4, descrption: 'BigCommerce offers a wide range of BigCommerce web themes to choose from, this gives you the option of creating websites and branding quite easily.'},
                                  {id:5, descrption: 'If you’re interested in BigCommerce, get in touch with us today.'},
                                ]
                              },
      
                              {
                                id: '5',
                                heading: 'Hire an Experienced BigCommerce Web Development Team',
                                image: './../../../assets/images/services/service-77.webp',
                                paragraphs:[
                                  {id:1, descrption: 'BigCommerce requires expert-level knowledge to design and develop a store.'},
                                  {id:2, descrption: 'At Digital Engage, our team of BigCommerce experts can help you create a store with all the bells and whistles. Our team has years of experience in BigCommerce and other platforms like Joomla, HubSpot, OsCommerce, and Prestashop, and we are familiar with the ins and outs of the platform. We will work with you to understand your business goals and create a store that is not only beautiful but also gets you a good ranking on Google, all the while selling more of your products or services. If you’re interested in BigCommerce, get in touch with us today.'},
                                  {id:3, descrption: 'If you’re interested in BigCommerce, get in touch with us today. We offer free consultation and a non-obligation quote.'},
                                ]
                              },
                            ];
              
              
                            this.tabLink = [
                              { id: '1', title: 'Looking For Expert' },
                              { id: '2', title: 'Want To Take Your Bigcommerce Store to the Next Level?' },
                              { id: '3', title: 'Why Choose BigCommerce?' },
                              { id: '4', title: 'Benefits of a BigCommerce Platform' },
                              { id: '5', title: 'Hire an Experienced BigCommerce Web Development Team' },
                            ];
              
                            break;
          
                            case 'drupal':
                              this.tabContents = [
                                {
                                  id: '1',
                                  heading: 'Hire The Best Drupal',
                                  image: './../../../assets/images/services/service-78.webp',
                                  paragraphs:[
                                    {id:1, descrption: '<strong>Web Designer</strong>'},
                                    {id:2, descrption: 'Digital Engage is your best option for Drupal website design and development services. We have a team of expert Drupal developers who can create a custom website that meets your specific needs.'},
                                    {id:3, descrption: 'We are a full-service digital agency, which means we can help you with every aspect of your website, from the initial planning stages to the launch and ongoing maintenance and online marketing.'},

                                  ]
                                },
                              
                            
                                {
                                  id: '2',
                                  heading: 'We Have the Drupal Expertise You Need',
                                  image: './../../../assets/images/services/service-79.webp',
                                  paragraphs:[
                                    {id:1, descrption: '<strong>Digital Engage has a team of Drupal experts who can help you with every aspect of your Drupal website.Our services include:<strong>'},
                                    {id:2, descrption: 'Drupal Website Design Services'},
                                    {id:3, descrption: 'Drupal Website Development'},
                                    {id:4, descrption: 'Drupal Website Maintenance'},
                                    {id:5, descrption: 'We can help you keep your Drupal website up-to-date and running smoothly. We offer security updates, performance enhancements, and bug fixes.'},
                                    {id:6, descrption: 'Get in touch with us today to learn more about our Drupal website development and design services.'},
                                  ]
                                },
        
                                {
                                  id: '3',
                                  heading: 'Experienced Drupal Web Development Team',
                                  image: './../../../assets/images/services/service-80.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'Drupal requires a team of expert developers to create a custom website. Drupal is a complex CMS, and it can be difficult to find developers with the necessary skills and experience.'},
                                    {id:2, descrption: 'Digital Engage has a team of Drupal experts who can help you with every aspect of your Drupal website. We have years of experience working with Drupal, and we are familiar with all the ins and outs of the CMS.'},
                                    {id:3, descrption: 'We offer Drupal website design, web development, and maintenance services. We help you with every aspect of your website, from the design to the development and ongoing, even online marketing.'},
                                    {id:4, descrption: 'Whether it’s WordPress, WooCommerce, Shopify, or Wix Developers, our team ensures exceptional web design delivers professional digital solutions.'},
                                    {id:5, descrption: 'Get in touch with us today to learn more about our Drupal website design and development services.'},
                                  ]
                                },

                                
                                
                                {
                                  id: '4',
                                  heading: 'What Makes Our Drupal Web Design Better Than Others?',
                                  image: './../../../assets/images/services/service-81.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'When you choose Digital Engage for Drupal web design, you can be confident that you are getting the best possible service. The Drupal web design process is important to us, and we take the time to get to know your business and understand your needs. We then create a custom Drupal website that meets your specific needs.'},
                                    {id:2, descrption: 'Our Drupal web designers  and web developers are experienced and skilled in creating Drupal websites that are both aesthetically pleasing and functional. We take the time to understand your business and your goals, so we can create a Drupal website that will help you achieve your objectives.'},
                                    {id:3, descrption: 'Get in touch with us today to learn more about our Drupal website design and development services.'},
                                  ]
                                },
                                {
                                  id: '5',
                                  heading: 'The Importance of hiring Drupal developers',
                                  image: './../../../assets/images/services/service-82.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'With Drupal, you have the freedom to create any kind of website you want. Drupal is a very flexible CMS, and it can be used to create anything from simple websites to complex web applications.'},
                                    {id:2, descrption: 'If you don’t hire someone that knows their stuff, you could end up with a Drupal CMS that doesn’t work the way you want it to. You need Drupal web developers and designers who are experienced and knowledgeable about Drupal’s capabilities like Drupal module development.'},
                                    {id:3, descrption: 'When you hire us, you get the Drupal expertise you need. We have years of experience working with Drupal, and we have the required skills to create a great Drupal website. We offer Drupal website design, Drupal web development, and maintenance services. Our expert team also uses platforms like Magento, Squarespace, BigCommerce, and Prestashop for designing websites. '},
                                  ]
                                },

                                {
                                  id: '6',
                                  heading: 'Choose Us As Your Drupal Partners',
                                  image: './../../../assets/images/services/service-83.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'Digital Engage is your Drupal partner. We will work with you to create a Drupal website that meets your specific needs. We make sure that you’re the one in control, while we provide you with the Drupal expertise you need to succeed.'},
                                    {id:2, descrption: 'Digital Engage also provides search engine optimization, paid ads, and social media management, web design and other services so you get everything you need for your digital presence when you hire us as your Drupal Developer. Contact us today to learn more about our Drupal website design and development services.'},
                                  ]
                                },

                              ];
                
                
                              this.tabLink = [
                                { id: '1', title: 'Hire The Best Drupal' },
                                { id: '2', title: 'We Have the Drupal Expertise You Need' },
                                { id: '3', title: 'Experienced Drupal Web Development Team' },
                                { id: '4', title: 'What Makes Our Drupal Web Design Better Than Others?' },
                                { id: '5', title: 'The Importance of hiring Drupal developers' },
                                { id: '6', title: 'Choose Us As Your Drupal Partners' },
                              ];
                
                              break;
            
                              
                            case 'joomla':
                              this.tabContents = [
                                {
                                  id: '1',
                                  heading: 'Hire The Best Joomla Developers in The Market!',
                                  image: './../../../assets/images/services/service-84.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'Digital Engage is the leading Joomla development company. We offer expert Joomla development services to help you create a stunning website that is both powerful and easy to use.'},
                                    {id:2, descrption: 'Our team of experienced Joomla developers can create custom Joomla components, modules, and plugins as well as provide Joomla support and maintenance services.'},
                                    {id:3, descrption: 'We also offer Joomla templates and Joomla extensions that are specifically designed for businesses of all sizes. If you are looking for a affordable and reliable Joomla development servoces, then look no further than Digital Engage. Contact us today to learn more about our Joomla services.'},

                                  ]
                                },
                              
                            
                                {
                                  id: '2',
                                  heading: 'Why Should You Get a Joomla Website ?',
                                  image: './../../../assets/images/services/service-85.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'In today’s world, the majority of people use the internet to search for products and services. They wish to see a website that is not only informative but also visually appealing. Desing a website by keeping the user experience in mind. Joomla is one of the most popular Content Management Systems (CMS) that helps you create a stunning website without any hassles.'},
                                    {id:2, descrption: 'A Joomla website is also very easy to use. With Joomla, you can easily add and edit content, images, videos, and more. You can also create user accounts so that people can log in and access your website.'},
                                  ]
                                },
        
                                {
                                  id: '3',
                                  heading: 'Top-Rated Joomla Website Design Services',
                                  image: './../../../assets/images/services/service-86.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'Our expert developers have years of experience in Joomla website development. We offer a wide range of Joomla web design services that are specifically tailored to meet your business needs.'},
                                    {id:2, descrption: 'Some of the Joomla web design services that we offer include:'},
                                    {id:3, descrption: 'Joomla Template Design'},
                                    {id:4, descrption: 'Joomla Component Development'},
                                    {id:5, descrption: 'Joomla Module Development'},
                                    {id:6, descrption: 'Joomla Plugin Development'},
                                    {id:7, descrption: 'Joomla Support and Maintenance'},
                                    {id:8, descrption: 'We know the importance of creating a website that is both user-friendly and visually appealing. That’s why we offer custom Joomla website design services to help you create a website that is perfect for your business.'},
                                  ]
                                },

                                
                                
                                {
                                  id: '4',
                                  heading: 'Why Choose Digital Engage for Joomla Development?',
                                  image: './../../../assets/images/services/service-87.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'When you choose Digital Engage as your Joomla Expert, you can be sure that you are getting the best Joomla development services in the market. We offer a wide range of benefits that you can enjoy when you choose us as your Joomla development partner.'},
                                    {id:2, descrption: 'Some of the benefits of choosing us to include:'},
                                    {id:3, descrption: 'Expert developers with years of experience in Joomla development'},
                                    {id:4, descrption: 'A wide range of Joomla development services to choose from'},
                                    {id:5, descrption: 'Affordable Joomla development rates'},
                                    {id:6, descrption: 'Fast and efficient delivery of projects'},
                                    {id:7, descrption: 'Excellent customer support'},
                                    {id:8, descrption: 'Search engines optimized Joomla websites'},
                                  ]
                                },

                                {
                                  id: '5',
                                  heading: 'What are the benefits of using Joomla?',
                                  image: './../../../assets/images/services/service-88.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'There are many benefits of using Joomla for website development. Some of these benefits include:'},
                                    {id:2, descrption: 'Joomla websites are very easy to use and you can easily add and edit content, images, videos, and more.'},
                                    {id:3, descrption: 'Joomla is very user-friendly and you can create user accounts so that people can log in and access your website.'},
                                    {id:4, descrption: 'Joomla is very flexible and you can create a website that is perfect for your business.'},
                                    {id:5, descrption: 'Joomla is very affordable and you can get started with Joomla for as little as $10 per month.'},
                                  ]
                                },

                                {
                                  id: '6',
                                  heading: 'Build The Perfect Online Store With Joomla',
                                  image: './../../../assets/images/services/service-89.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'Some of the features that you can use to build your online store include:'},
                                    {id:2, descrption: 'Joomla eCommerce Templates'},
                                    {id:3, descrption: 'Joomla eCommerce Extensions'},
                                    {id:4, descrption: 'Joomla Payment Gateways'},
                                    {id:5, descrption: 'With Joomla, you can easily build an online store that is perfect for your business. Contact us today to learn more about our Joomla eCommerce services.'},
                                  ]
                                },

                                {
                                  id: '7',
                                  heading: 'What Makes Us Stand Out From The Crowd?',
                                  image: './../../../assets/images/services/service-90.webp',
                                  paragraphs:[
                                    {id:1, descrption: 'Digital Engage has set the standard for excellence in Joomla development. Our Joomla web developers have years of experience and will take the best possible route for your project.'},
                                    {id:2, descrption: 'The Digital Engage team also has extensive expertise in designing websites and online stores using Shopify, WordPress, WooCommerce, and Wix Developers.  We understand that every business is different, and we take the time to understand your specific needs.'},
                                  ]
                                },

                              ];
                
                
                              this.tabLink = [
                                { id: '1', title: 'Hire The Best Joomla Developers in The Market!' },
                                { id: '2', title: 'Why Should You Get a Joomla Website ?' },
                                { id: '3', title: 'Top-Rated Joomla Website Design Services' },
                                { id: '4', title: 'Why Choose Digital Engage for Joomla Development?' },
                                { id: '5', title: 'What are the benefits of using Joomla?' },
                                { id: '6', title: 'Build The Perfect Online Store With Joomla' },
                                { id: '7', title: 'What Makes Us Stand Out From The Crowd?' },
                              ];
                
                              break;


                              case 'hubspot':
                                this.tabContents = [
                                  {
                                    id: '1',
                                    heading: 'Hire the Best HubSpot',
                                    image: './../../../assets/images/services/service-91.webp',
                                    paragraphs:[
                                      {id:1, descrption: 'Web Designers & Developers'},
                                      {id:2, descrption: 'When it comes to HubSpot website design and development, you need to make sure that you hire the best. With our team of experts, you can be confident that your website will be designed and developed to meet your specific needs. We will work with you to create a custom HubSpot website that will help you achieve your business goals.'},
                                      {id:3, descrption: 'Get in touch with us today to learn more about our HubSpot website design and development services. We would be happy to answer any questions you may have.'},
  
                                    ]
                                  },
                                
                              
                                  {
                                    id: '2',
                                    heading: 'Why Hire an Expert HubSpot Website Design Agency?',
                                    image: './../../../assets/images/services/service-92.webp',
                                    paragraphs:[
                                      {id:1, descrption: 'There are many benefits of hiring an expert HubSpot web design agency. One of the biggest benefits is that you will have a team of experts working on your website. This means that your website will be designed and developed to an industry standard.'},
                                      {id:2, descrption: 'Another benefit of hiring hubspot web design companies is that you will get access to HubSpot’s powerful platform. Our HubSpot development company provides users with the tools they need to create and search engine optimization for their websites. HubSpot also offers a variety of digital marketing and sales tools to help businesses grow their customer base.'},
                                      {id:3, descrption: 'Our expert team also uses platforms like Magento, Squarespace, BigCommerce, and Drupal for designing websites. If you are looking for the best HubSpot website design and development services, then contact our team today. We would be happy to answer any questions you may have.'},
                                    ]
                                  },
          
                                  {
                                    id: '3',
                                    heading: 'Why Choose Us As Your HubSpot Partners?',
                                    image: './../../../assets/images/services/service-93.webp',
                                    paragraphs:[
                                      {id:1, descrption: 'When you partner with us, you can be sure that you are partnering with the best in the business. Digital Engage has a team of HubSpot experts who will work with you to create a custom website that is perfect for your needs. We will take into account your brand, target audience, and business goals to create a website that is ideal for your operations and growth. Our web developers at Digital Engage are also experts in designing websites on other platforms such as WordPress, WooCommerce, Shopify, and Wix Developers. We have a team of HubSpot experts who are ready to help you with your website desing by expert designers. Contact us today to learn more about our HubSpot services.'},
                                      {id:2, descrption: 'We have a team of HubSpot experts who are ready to help you with your website. Contact us today to learn more about our HubSpot services.'},
                                    ]
                                  },
  
                                ];
                  
                  
                                this.tabLink = [
                                  { id: '1', title: 'Hire the Best HubSpot' },
                                  { id: '2', title: 'Why Hire an Expert HubSpot Website Design Agency?' },
                                  { id: '3', title: 'Why Choose Us As Your HubSpot Partners?' },
                                ];
                  
                                break;

                                case 'Os-Commerce':
                                  this.tabContents = [
                                    {
                                      id: '1',
                                      heading: 'What is OsCommerce?',
                                      image: './../../../assets/images/services/service-94.webp',
                                      paragraphs:[
                                        {id:1, descrption: 'OsCommerce is an open source eCommerce platform that is widely used by small and medium businesses to create their online stores. It is a highly flexible and customizable platform that offers a wide range of features and add-ons to make your store more user-friendly and functional.'},
                                        {id:2, descrption: 'OsCommerce has been around for over a decade and is one of the most popular eCommerce platforms available today. It is used by more than 280,000 online shop owners and has a large community of developers and users who contribute to its development.'},
                                        {id:3, descrption: 'OsCommerce is free to download and use, making it an ideal platform for small businesses that are on a tight budget. It is also easy to set up and use, even for those with no technical expertise. The OsCommerce team is quite helpful when it comes to help and support so that is a plus as well.'},
    
                                      ]
                                    },
                                  
                                
                                    {
                                      id: '2',
                                      heading: 'What are The Benefits of OsCommerce ?',
                                      image: './../../../assets/images/services/service-95.webp',
                                      paragraphs:[
                                        {id:1, descrption: 'There are many benefits of using OsCommerce for your online store. Some of the main benefits include:'},
                                        {id:2, descrption: 'OsCommerce is an open-source platform, which means it is free to download and use.'},
                                        {id:3, descrption: 'It is a highly flexible and customizable platform that offers a wide range of features and add-ons.'},
                                        {id:4, descrption: 'It has a large community of developers and users who contribute to its development.'},
                                        {id:5, descrption: 'It is easy to set up and use, even for those with no technical expertise.'},
                                        {id:6, descrption: 'There are many benefits of using OsCommerce for your online store. Digital Engage will help you get the most out of OsCommerce and create a unique and visually appealing store that is sure to capture the attention of your target audience.'},
                                      ]
                                    },
            
                                    {
                                      id: '3',
                                      heading: 'OsCommerce Website Development Services',
                                      image: './../../../assets/images/services/service-96.webp',
                                      paragraphs:[
                                        {id:1, descrption: 'Your OsCommerce website is the foundation of your online business. It is important to have a well-designed and developed website by expert web developers and web designers that meets the needs of your business. With our website design and development services, you can be sure that your OsCommerce website will be well-designed, developed, and search engine optimized to meet the needs of your business.'},
                                        {id:2, descrption: 'We offer a wide range of OsCommerce development services that can help you create a unique and visually appealing online store.'},
                                      ]
                                    },
    
                                    
                                    
                                    {
                                      id: '4',
                                      heading: 'Why Do You Need Experts For OsCommerce Development?',
                                      image: './../../../assets/images/services/service-97.webp',
                                      paragraphs:[
                                        {id:1, descrption: 'As OsCommerce is an open-source platform, anyone can download and use it. However, to get the most out of OsCommerce, it is important to hire an OsCommerce developer who can create a custom-designed and developed store that meets the specific needs of your business. Digital Engage has a team of professional OsCommerce developers who have worked on many OsCommerce projects. Our team also works professionally on other platforms like WordPress, WooCommerce, Shopify, and Wix Developers. We have the experience and expertise to develop a custom OsCommerce store that meets the specific needs of your business.'},
                                        {id:2, descrption: 'Digital Engage has a team of professional OsCommerce developers who have worked on many OsCommerce projects. We have the experience and expertise to develop a custom OsCommerce store that meets the specific needs of your business.'},
                                      ]
                                    },
    
                                  ];
                    
                    
                                  this.tabLink = [
                                    { id: '1', title: 'What is OsCommerce?' },
                                    { id: '2', title: 'What are The Benefits of OsCommerce ?' },
                                    { id: '3', title: 'OsCommerce Website Development Services' },
                                    { id: '4', title: 'Why Do You Need Experts For OsCommerce Development?' },
                                  ];
                    
                                  break;

                                  
                                case 'prestashop':
                                  this.tabContents = [
                                    {
                                      id: '1',
                                      heading: 'Hire The Top Prestashop Web Designers',
                                      image: './../../../assets/images/services/service-98.webp',
                                      paragraphs:[
                                        {id:1, descrption: 'Digital Engage is a leading Prestashop development company with a team of expert Prestashop developers. We have extensive experience in Prestashop web design and development and can create a custom Prestashop store that meets your specific business requirements.'},
                                        {id:2, descrption: 'Our team of Prestashop designers and developers are experts in creating responsive Prestashop stores that look great on all devices. We also offer Prestashop customization services to help you tailor your store to your specific needs.'},
                                        {id:3, descrption: 'If you are looking for a Prestashop development company that can help you create a professional online store, contact Digital Engage today. We will work with you to create a custom Prestashop store that is perfect for your business.'},
    
                                      ]
                                    },
                                  
                                  ];
                    
                    
                                  this.tabLink = [
                                    { id: '1', title: 'Hire The Top Prestashop Web Designers' },
                                  ];
                    
                                  break;

                                  case 'medical':
                                    this.tabContents = [
                                      {
                                        id: '1',
                                        heading: 'Digital Marketing For Medical',
                                        image: './../../../assets/images/services/service-99.jpg',
                                        paragraphs:[
                                          {id:1, descrption: 'The medical industry is growing increasingly competitive throughout the United States. As additional entrants continue to flood the market, it’s more essential than ever to employ a robust digital marketing strategy. While traditional advertising strategies are still essential, successful medical companies must increase their online exposure to survive in the modern marketplace.'},
                                          {id:2, descrption: 'At Digital Engage, we specialize in helping medical companies increase their online presence. Let’s look at the expert services we provide to our medical clients.'},      
                                        ]
                                      },
                                    
                                  
                                      {
                                        id: '2',
                                        heading: 'Medical SEO',
                                        image: './../../../assets/images/services/service-100.jpg',
                                        paragraphs:[
                                          {id:1, descrption: 'Search Engine Optimization (SEO) is the process of optimizing your website to yield strong web search results. If you’re placed at the top of specific keyword searches, you’ll be able to generate organic web traffic that provides results. SEO is a complicated process that requires the expertise of an experienced doctor digital marketing agency.'},
                                          {id:2, descrption: 'At Digital Engage, we can help your medical company increase its ranking on the world’s top search engines.'},
                                        ]
                                      },
              
                                      {
                                        id: '3',
                                        heading: 'Medical Web Design',
                                        image: './../../../assets/images/services/service-101.jpg',
                                        paragraphs:[
                                          {id:1, descrption: 'Your website is an online representative of your brand. If you want consumers to take your business seriously, it’s critical to utilize web design that instills trust in users. We utilize high-end web design principles to create attractive medical websites, which are also highly functional.'},
                                        ]
                                      },
      
                                      
                                      
                                      {
                                        id: '4',
                                        heading: 'Medical Paid Search',
                                        image: './../../../assets/images/services/service-102.jpg',
                                        paragraphs:[
                                          {id:1, descrption: 'While organic traffic can help you improve your current revenue streams, paid search is also a critical component of any online marketing strategy. We can help you target specific medical keywords that are relevant to your company and its services. We’re profoundly experienced medical internet marketing experts for digital marketing campaigns working with leading search engines to develop effective paid search campaigns. Also when we talk about paid search for physicians it is important to have a positive track record for achieving our goals. Digital Marketing is a crucial step for growing your business. Paid Marketing efforts can help when people search queries like: medical device companies, digital marketing for physician, doctor digital marketing provider, healthcare marketing nashville, medical device marketing, and others.'},
                                        ]
                                      },

                                      {
                                        id: '5',
                                        heading: 'Medical Social Media Advertising',
                                        image: './../../../assets/images/services/service-103.jpg',
                                        paragraphs:[
                                          {id:1, descrption: 'Social media isn’t something you usually associate with medical services, but it’s becoming an increasingly essential component of the industry. As more consumers move to social media for online entertainment and content, medical doctor marketing has become a critical aspect for all major platforms. Our firm can help you manage your social media advertising and build an organic social media platform that takes advantages of all channels.'},
                                        ]
                                      },

                                      {
                                        id: '6',
                                        heading: 'Target Local Markets',
                                        image: './../../../assets/images/services/service-104.jpg',
                                        paragraphs:[
                                          {id:1, descrption: 'Consumers can be distrustful of national organizations—it’s vital to prove that you have a genuine local presence. We can help medical companies target specific markets. We help our clients to increase authentic engagement with their local communities.'},
                                          {id:2, descrption: 'We have considerable experience helping medical companies increase exposure in Tri-Cities, Johnson City, Knoxville, and Nashville, Tennessee. We can work with you to expand your reach into other areas of the country, too. If you operate a company with a local presence in various regions, it’s critical to target each market individually.'},
                                        ]
                                      },

                                      {
                                        id: '7',
                                        heading: 'Accessing New Patients and Customers',
                                        image: './../../../assets/images/services/service-105.webp',
                                        paragraphs:[
                                          {id:1, descrption: 'No matter your medical niche, it’s critical to access new patients and customers. Digital Engage is a leading doctor SEO company that has a proven track record of helping medical companies to increase their exposure to patients and customers. We’re uniquely positioned as a doctor marketing agency to help you use modern technology to increase your revenue streams.'},
                                        ]
                                      },

                                      {
                                        id: '8',
                                        heading: 'To improve your digital marketing strategy',
                                        image: './../../../assets/images/services/service-106.webp',
                                        paragraphs:[
                                          {id:1, descrption: 'The longer you wait to improve your digital marketing strategy, the longer you’re missing out on valuable customers. Our medical marketing team has the unique experience in doctor seo marketing required to take your company or organization to the next level. Our focus is on providing you with concrete results—we strive to improve your online presence and increase your brand’s recognition.'},
                                          {id:2, descrption: 'If you want to assess your current approach, we provide free consultations for all potential clients. We can help you develop a comprehensive strategy for improving your digital marketing results.'},
                                        ]
                                      },
      
                                    ];
                      
                      
                                    this.tabLink = [
                                      { id: '1', title: 'Digital Marketing For Medical' },
                                      { id: '2', title: 'Medical SEO' },
                                      { id: '3', title: 'Medical Web Design' },
                                      { id: '4', title: 'Medical Paid Search' },
                                      { id: '5', title: 'Medical Social Media Advertising' },
                                      { id: '6', title: 'Target Local Markets' },
                                      { id: '7', title: 'Accessing New Patients and Customers' },
                                      { id: '8', title: 'To improve your digital marketing strategy' },
                                    ];
                      
                                    break;
                                    case 'finacial':
                                      this.tabContents = [
                                        {
                                          id: '1',
                                          heading: 'Go Local',
                                          image: './../../../assets/images/services/serivce-107.webp',
                                          paragraphs:[
                                            {id:1, descrption: 'SEO gives you the ability to target local markets. Many people make the mistake of thinking that digital marketing doesn’t provide you with access to nearby customers. Our team can help you focus on clients in your geographical region, so you pop relevant search engine results pages.'},
                                            {id:2, descrption: 'Digital Engage has extensive experience helping our clients tap into regional markets. We provide the best SEO services for finance companies, SEO for banking, and others. If you need SEO tips for finance companies, and financial institutions Digital Engage will help to optimize your financial institution for better ranking. When users search on a search engine results page with these words finance seo services near me or others. We can help to rank such keywords.'},      
                                          ]
                                        },
                                      
                                    
                                        {
                                          id: '2',
                                          heading: 'SEO Marketing for Financial Services',
                                          image: './../../../assets/images/services/serivce-108.webp',
                                          paragraphs:[
                                            {id:1, descrption: 'Financial services internet marketing is critical if you want your financial firm to stay on top of SEO for Financial Trends. While the industry has traditionally relied on paying for leads, many financial services firms are now searching financial services SEO agency for banks to access new clients. Online strategy can help financial services firms gain access to an organic workflow.'},
                                            {id:2, descrption: 'Search Engine Optimization (SEO) is one of the most critical components of any digital marketing strategy. Bank SEO involves optimizing your website to yield better search results. By ranking higher on the world’s top search engines, you’ll be able to increase your site’s organic traffic exponentially through your bank SEO services.'},
                                            {id:3, descrption: 'If you’re looking for experts in search engine optimisation financial marketing to gain access to new clients, it’s critical to rank competitively for the relevant keywords through digital campaign (financial services). Our firm will help you assess the most active keywords for your line of work, and employ a strategy that yields concrete results for your top financial SEO agencies. You can build long-term, organic traffic that enables you to access your niche’s most profitable clients so they can have the very experience you’re willing to offer at your bank or credit union.'},
                                            {id:4, descrption: 'Google alone experiences millions of searches every minute. If you’re not currently ranked highly on its search engine through online marketing for finance agencies, you’re losing valuable customers. It’s time to let Digital Engage change your approach with our SEO services!'},
                                          ]
                                        },
                
                                        {
                                          id: '3',
                                          heading: 'Focus on Your Services',
                                          image: './../../../assets/images/services/serivce-109.webp',
                                          paragraphs:[
                                            {id:1, descrption: 'YAs a business owner or manager, it’s critical to focus on the components of your firm that matter. If you’re looking online visibility for a financial services company, it’s essential to dedicate your time to the operational aspect of your company. By allowing us to take care of your finance online marketing services, you can build the components of your business that are important to you.'},
                                            {id:2, descrption: 'While we’re happy to educate our clients on the latest SEO trends for finance, we’re also pleased to provide a full-service approach that eliminates your marketing responsibilities.'},
                                          ]
                                        },
        
                                        
                                        
                                        {
                                          id: '4',
                                          heading: 'Targeting All SEO Elements',
                                          image: './../../../assets/images/services/serivce-110.webp',
                                          paragraphs:[
                                            {id:1, descrption: 'Google, for example, has over 200 SEO factors that it considers when determining the top search results for different keywords'},
                                            {id:2, descrption: '<strong>Some of the most prominent factors include:</strong>'},
                                            {id:3, descrption: 'Page responsiveness'},
                                            {id:4, descrption: 'Page speed'},
                                            {id:5, descrption: 'Keywords'},
                                            {id:6, descrption: 'Content length'},
                                            {id:7, descrption: 'Backlinks'},
                                            {id:8, descrption: 'At Digital Engage, we have developed a comprehensive approach to target the most critical elements of the SEO process including finance SEO services and website design. In doing so, we’re able to provide our clients with immediate results. If you’re looking for a team that helps you tackle your SEO from multiple angles, Digital Engage is the perfect partner.'},
                                          ]
                                        },
  
                                        {
                                          id: '5',
                                          heading: 'Who We Serve',
                                          image: './../../../assets/images/services/serivce-111.webp',
                                          paragraphs:[
                                            {id:1, descrption: 'We have offices in Johnson City, Knoxville and Nashville, Tennessee. We work with clients across the state in addition to domestic and international partners that are looking to increase their online exposure.'},
                                          ]
                                        },
  
                                        {
                                          id: '6',
                                          heading: 'Concrete Results',
                                          image: './../../../assets/images/services/serivce-112.webp',
                                          paragraphs:[
                                            {id:1, descrption: 'At Digital Engage, we’re continually testing our results. We’ll provide key metrics on your website’s SEO improvements and performance. Our services are dedicated to providing our clients with real value'},

                                          ]
                                        },
        
                                      ];
                        
                        
                                      this.tabLink = [
                                        { id: '1', title: 'Go Local' },
                                        { id: '2', title: 'SEO Marketing for Financial Services' },
                                        { id: '3', title: 'Focus on Your Services' },
                                        { id: '4', title: 'Targeting All SEO Elements' },
                                        { id: '5', title: 'Who We Serve' },
                                        { id: '6', title: 'Concrete Results' },
                                      ];
                        
                                      break;

                                      case 'local-business':
                                      this.tabContents = [
                                        {
                                          id: '1',
                                          heading: 'Local SEO Helps Businesses',
                                          image: './../../../assets/images/services/service-113.jpg',
                                          paragraphs:[
                                            {id:1, descrption: 'If you run a business that relies on a local customer base, you may not realize the importance of digital marketing. Many local business owners make the mistake of thinking that digital marketing is only relevant to online business owners, or big corporations. In reality, various digital marketing strategies can help you increase foot traffic at your local business, too.'},
                                            {id:2, descrption: 'Search Engine Optimization (SEO) is the process of designing or tweaking a website so that it improves its current page ranking. The closer your website is to the top of search engine results, the more traffic you’ll experience. Businesses around the world use SEO to drive traffic to their sites.'},      
                                            {id:3, descrption: 'SEO is a complicated process. You’ll need the expertise of a specialist SEO marketing firm to help you implement it. That’s where Digital Engage comes in—we provide our clients with access to affordable, high-quality SEO services.'},      
                                          ]
                                        },
                                      
                                    
                                        {
                                          id: '2',
                                          heading: 'A Comprehensive SEO Approach',
                                          image: './../../../assets/images/services/service-114.jpg',
                                          paragraphs:[
                                            {id:1, descrption: 'Google is known to consider over 200 different factors when it determines the rankings for each keyword on its search engine. Keyword density, page speed, mobile responsiveness, content quality, and a range of other factors are all crucial for your SEO. At Digital Engage, we employ a comprehensive approach that ensures all your bases are covered.'},
                                            {id:2, descrption: 'We’ve determined the most important factors and developed a strategy that utilizes each of them effectively. We help you target all aspects of your search engine optimization.'},
                                          ]
                                        },
                
                                        {
                                          id: '3',
                                          heading: 'Focus on Your Services',
                                          image: './../../../assets/images/services/service-115.jpg',
                                          paragraphs:[
                                            {id:1, descrption: 'YAs a business owner or manager, it’s critical to focus on the components of your firm that matter. If you’re looking online visibility for a financial services company, it’s essential to dedicate your time to the operational aspect of your company. By allowing us to take care of your finance online marketing services, you can build the components of your business that are important to you.'},
                                            {id:2, descrption: 'While we’re happy to educate our clients on the latest SEO trends for finance, we’re also pleased to provide a full-service approach that eliminates your marketing responsibilities.'},
                                          ]
                                        },
        
                                        
                                        
                                        {
                                          id: '4',
                                          heading: 'Who We Serve',
                                          image: './../../../assets/images/services/service-116.jpg',
                                          paragraphs:[
                                            {id:1, descrption: 'At Digital Engage, we work with a broad range of customers to improve their SEO performance. We’re happy to take on projects in almost any niche, although, we do focus particular attention on a few specific industries.'},
                                            {id:2, descrption: '<strong>Below is an idea of the industries we specialize in:</strong>'},
                                            {id:3, descrption: 'Law Firms'},
                                            {id:4, descrption: 'Medical Companies'},
                                            {id:5, descrption: 'Tech Companies'},
                                            {id:6, descrption: 'Restaurants'},
                                            {id:7, descrption: 'Education Sector'},
                                            {id:8, descrption: 'Home Services'},
                                            {id:9, descrption: 'Our offices are in Nashville, Knoxville and Johnson, Tennessee. We also work with clients throughout the country.'},
                                          ]
                                        },
                                      ];
                        
                        
                                      this.tabLink = [
                                        { id: '1', title: 'Local SEO Helps Businesses' },
                                        { id: '2', title: 'A Comprehensive SEO Approach' },
                                        { id: '3', title: 'Who We Serve' },
                                        { id: '4', title: 'Concrete SEO Results' },
                                      ];
                        
                                      break;

                                      case 'eCommerce':
                                        this.tabContents = [
                                          {
                                            id: '1',
                                            heading: 'eCommerce SEO Online',
                                            image: './../../../assets/images/services/service-117.jpg',
                                            paragraphs:[
                                              {id:1, descrption: 'If you run an online business, you know how important it is to generate traffic to your online store. The most successful eCommerce websites use a range of strategies to generate traffic and convert sales. One of the most critical components of any eCommerce digital marketing strategy is Search Engine Optimization (SEO).'},
                                              {id:2, descrption: 'SEO is the process of optimizing your online store for search engine results. By using a comprehensive optimization approach, you can improve the ranking of your website on the world’s major search engines.'},      
                                              {id:3, descrption: 'At Digital Engage, we help our clients dramatically improve their search engine performance. By developing organic web traffic, we ensure our clients experience increased sales and stronger revenue streams.'},      
                                            ]
                                          },
                                        
                                      
                                          {
                                            id: '2',
                                            heading: 'Focusing on All Critical SEO Elements',
                                            image: './../../../assets/images/services/service-118.jpg',
                                            paragraphs:[
                                              {id:1, descrption: 'Search Engine Optimization is an extremely complex process that requires a comprehensive strategy. Google and other leading search engines consider a wide range of variables when they determine which websites should rank at the top of search results.'},
                                              {id:2, descrption: 'Some critical factors include keyword density, page speed, backlinks, page authority, content length, mobile-friendliness, and more. It is thought there are over 200 elements that determine your search engine performance.'},
                                              {id:3, descrption: 'At Digital Engage, we focus on the most critical elements of SEO to help you immediately improve your current performance. We continuously test our results to provide you with concrete evidence of SEO improvement.'},
                                            ]
                                          },
                  
                                          {
                                            id: '3',
                                            heading: 'The Importance of Search Results',
                                            image: './../../../assets/images/services/service-119.jpg',
                                            paragraphs:[
                                              {id:1, descrption: 'Google alone experiences over 3.8 million searches per minute. As many consumers begin to leave traditional shopping for eCommerce, it’s critical to invest in your search engine performance. By targeting specific keywords, you can ensure that your eCommerce business ranks highly within your niche.'},
                                              {id:2, descrption: 'Organic traffic can help drive consumers to your eCommerce store. If you’re looking to generate interest in your products, it’s crucial to rank as highly as possible on major search engines.'},
                                            ]
                                          },
          
                                          
                                          
                                          {
                                            id: '4',
                                            heading: 'More Than Just Paid Traffic',
                                            image: './../../../assets/images/services/service-120.jpg',
                                            paragraphs:[
                                              {id:1, descrption: 'Many eCommerce businesses focus on paying for traffic to their online stores. While this is often an effective conversion technique, it also has its costs. If you’re paying for web traffic, you’ll always need to verify that your conversions are outweighing your advertising costs.'},
                                              {id:2, descrption: 'Organic traffic is a long-term investment. While you will need to ensure your SEO strategy is up to date, you won’t need to continually invest money in generating traffic. Organic traffic provides you with free conversions without the constant need to purchase online ads.'},
                                              {id:3, descrption: 'Not only will strong SEO improve your web traffic, but it will also enhance the reputation of your company. Companies that rank well on search results establish authority with consumers. By becoming a top search result performer, you’ll be able to improve your company’s branding.'},
                                            ]
                                          },

                                          
                                          {
                                            id: '5',
                                            heading: 'Who We Serve',
                                            image: './../../../assets/images/services/service-121.jpg',
                                            paragraphs:[
                                              {id:1, descrption: 'At Digital Engage, we work with clients throughout Tennessee—we have offices in Nashville, Knoxville, and Johnson City. We also work with online clients throughout the country.'},
                                            ]
                                          },
                                        ];
                          
                          
                                        this.tabLink = [
                                          { id: '1', title: 'eCommerce SEO Online' },
                                          { id: '2', title: 'Focusing on All Critical SEO Elements' },
                                          { id: '3', title: 'The Importance of Search Results' },
                                          { id: '4', title: 'More Than Just Paid Traffic' },
                                          { id: '5', title: 'Who We Serve' },
                                        ];
                          
                                        break;
    
                                        case 'legal-marketing':
                                          this.tabContents = [
                                            {
                                              id: '1',
                                              heading: 'Digital Marketing For Legal',
                                              image: './../../../assets/images/services/service-122.jpg',
                                              paragraphs:[
                                                {id:1, descrption: 'If you’ve got a legal firm services  in the Tri-Cities, TN, then you know you’ve got some serious competition.'},
                                                {id:2, descrption: 'So, how can you differentiate yourself and your law offices from the masses?'},      
                                                {id:3, descrption: 'Well, a comprehensive and well-crafted digital-marketing strategy complements your offline advertising spectacularly and ensures that your online presence is prominent and well-positioned.'},      
                                                {id:4, descrption: 'Whatever your marketing needs and budget, Digital Engage can create a strategy to get your law firm noticed.'},      
                                                {id:5, descrption: 'How do we achieve this? Well, it all starts with search-engine optimization, or SEO. Read on.'},      
                                                {id:6, descrption: 'At Digital Engage, we specialize in helping Law Firms increase their online presence. Let’s look at the expert services we provide to our Legal clients.'},      
                                              ]
                                            },
                                          
                                        
                                            {
                                              id: '2',
                                              heading: 'Legal SEO',
                                              image: './../../../assets/images/services/service-123.jpg',
                                              paragraphs:[
                                                {id:1, descrption: 'Central to any digital-marketing strategy, search engine optimization (SEO) ensures that your website ranks higher on leading search engines.'},
                                                {id:2, descrption: 'The core objective of SEO is to enhance and promote your law firm’s website. The upshot is increased visitation and visibility on the SERPs (search engine results pages). But SEO extends far beyond ranking in the first spot for some keywords.'},
                                                {id:3, descrption: 'That said, here at Digital Engage, we don’t overlook keywords. We’ll make sure they are relevant, so you get a stream of high-quality organic traffic.'},
                                                {id:4, descrption: 'SEO has so many moving parts that a consultation is pivotal to getting you going. Get in touch, and we’ll arrange for a quick and casual chat to assess your general needs. Then we’ll create a personalized legal SEO strategy for your firm that is in line with your budget.'},
                                                {id:5, descrption: 'Search results are about more than national visibility, though. Let’s face it, someone seeking legal advice is far more likely to search for a firm in the Tri-Cities, TN, than for an outfit hundreds of miles away. That’s why local SEO counts.'},
                                              ]
                                            },
                    
                                            {
                                              id: '3',
                                              heading: 'Go Local with SEO',
                                              image: './../../../assets/images/services/service-124.jpg',
                                              paragraphs:[
                                                {id:1, descrption: 'With a local SEO campaign, you reach a host of potential clients throughout Nashville, Knoxville, Johnson City, Kingsport, and Bristol.'},
                                                {id:2, descrption: 'We’ll ensure your company crops up when people search for phrases associated with your offerings in the Tri-Cities.'},
                                                {id:3, descrption: 'We’ll take care of GoogleMyBusiness for you and optimize a website for your location. Then, we’ll employ a smart local SEO campaign to drive highly relevant and localized traffic to your pages. If those looking for help get greeted with a responsive site and a welcoming brand, half of the job is done.'},
                                                {id:4, descrption: 'Local SEO done well translates to an increase in conversions to your firm. Get things started with that consultation.'},
                                              ]
                                            },
            
                                            
                                            
                                            {
                                              id: '4',
                                              heading: 'Social Media for Legal',
                                              image: './../../../assets/images/services/service-125.jpg',
                                              paragraphs:[
                                                {id:1, descrption: 'While you might not immediately associate legal firms with social media, don’t underestimate the gravity of your presence on those platforms. After all, that’s where your potential clients spend time.'},
                                                {id:2, descrption: 'We understand that managing a Facebook page isn’t the best use of your time, so we’ll take all that off your hands.'},
                                                {id:3, descrption: 'Whatever your preferred channel, we’ll build an organic campaign that will put you in direct contact with your client base. We’ll also discuss your paid options on each platform.'},
                                              ]
                                            },
  
                                            
                                            {
                                              id: '5',
                                              heading: 'Ramp Up Your Presence With Digital Marketing',
                                              image: './../../../assets/images/services/service-126.jpg',
                                              paragraphs:[
                                                {id:1, descrption: 'If you think your law firm in the Tri-Cities, TN could benefit from a comprehensive digital-marketing strategy, don’t put things off any longer.'},
                                                {id:2, descrption: 'Get in touch, and we’ll give you a completely free consultation and get things started.'},
                                                {id:3, descrption: 'Through an enhanced online presence, your rock-solid reputation, and improved brand recognition, you can expect tangible results from Digital Engage campaigns. We appreciate that sales count, not vanity metrics. With a combination of national and local SEO alongside social-media marketing, you can grow your legal firm more quickly. Complement your offline advertising with an online campaign, and you’ll wonder why you didn’t get started sooner!'},
                                                {id:4, descrption: 'Call us today for that consultation.'},
                                              ]
                                            },
                                          ];
                            
                            
                                          this.tabLink = [
                                            { id: '1', title: 'Digital Marketing For Legal' },
                                            { id: '2', title: 'Legal SEO' },
                                            { id: '3', title: 'Go Local with SEO' },
                                            { id: '4', title: 'Social Media for Legal' },
                                            { id: '5', title: 'Ramp Up Your Presence With Digital Marketing' },
                                          ];
                            
                                          break;
      
                                          case 'home-services':
                                            this.tabContents = [
                                              {
                                                id: '1',
                                                heading: 'Increase Your Home Service Website Traffic With Digital Engage',
                                                image: './../../../assets/images/services/service-127.jpg',
                                                paragraphs:[
                                                  {id:1, descrption: 'At Digital Engage, we understand that there is a need for a personalized plan for each home service. That is why our team of digital marketers analyzes your social media channels, marketing channels, and social media posts and devises a digital strategy that works best for you. We help you reach potential customers through our digital marketing services.'},
                                                  {id:2, descrption: 'Our team is experienced in helping home service business owners increase website traffic. Our team does this through email marketing, digital marketing, online marketing, social media marketing, search engine rankings optimization, and Google ads.'},      
                                                ]
                                              },
                                            
                                          
                                              {
                                                id: '2',
                                                heading: 'Our Paid Search Services',
                                                image: './../../../assets/images/services/service-128.jpg',
                                                paragraphs:[
                                                  {id:1, descrption: 'We understand that driving traffic to your online channels is crucial to taking your home service business to the next level. Hence, we offer paid search services to help you achieve your marketing goals.'},
                                                  {id:2, descrption: 'So why wait? Contact us not to learn more about our paid search services and bring a more targeted audience to your website.'},
                                                ]
                                              },
                      
                                              {
                                                id: '3',
                                                heading: 'Paid Advertising Services for Home Services',
                                                image: './../../../assets/images/services/service-129.jpg',
                                                paragraphs:[
                                                  {id:1, descrption: 'We also offer paid advertising services for home divisions at our agency. Our team is experienced in running email campaigns, marketing automation, PPC campaigns, and mobile marketing across various online channels. The experienced team uses the latest Internet marketing techniques for local services and ensures that your digital ads reach the right target audience.'},
                                                  {id:2, descrption: 'Digital Engage uses the latest digital technologies and marketing techniques to ensure that your online campaigns attract as many potential customers as possible. Call us today, and let us devise a marketing strategy for you that takes your home office business to the next level.'},
                                                ]
                                              },
              
                                              
                                              
                                              {
                                                id: '4',
                                                heading: 'SEO Services for Home Services Companies',
                                                image: './../../../assets/images/services/service-130.jpg',
                                                paragraphs:[
                                                  {id:1, descrption: 'Search engine optimization has recently become a crucial part of any marketing strategy. It helps boost your rankings in search engine results and ultimately drives more traffic to your website. Our team of SEO experts ensures that you have relevant keywords and reach a target audience that is most likely to convert.'},
                                                  {id:2, descrption: 'We put a particular emphasis on SEO in our content marketing strategy and avoid using traditional advertising methods that are less converting men compared to our new and innovative digital marketing techniques.'},
                                                  {id:3, descrption: 'Take your search engine rankings to the top with Digital Engage. Call us today, and let us help you with your SEO approach.'},
                                                ]
                                              },
    
                                              
                                              {
                                                id: '5',
                                                heading: 'Web Design Services for Your Home Services Company',
                                                image: './../../../assets/images/services/service-131.jpg',
                                                paragraphs:[
                                                  {id:1, descrption: 'At our agency, we design responsive web pages that work just as well on mobile devices as on your computer. A webpage is one of the most crucial digital channels for services from home, as it is the face of your online home services brand. We also ensure that we optimize your website so that they rank high on the search engines.'},
                                                  {id:2, descrption: 'So if you are looking for a website that is not only aesthetically appealing but also functional, get in touch with our agency today and let us help you build a website that truly represents your home service brand.'},
                                                ]
                                              },
                                            ];
                              
                              
                                            this.tabLink = [
                                              { id: '1', title: 'Increase Your Home Service Website Traffic With Digital Engage' },
                                              { id: '2', title: 'Our Paid Search Services' },
                                              { id: '3', title: 'Paid Advertising Services for Home Services' },
                                              { id: '4', title: 'SEO Services for Home Services Companies' },
                                              { id: '5', title: 'Web Design Services for Your Home Services Company' },
                                            ];
                              
                                            break;
                                            case 'health-fitness':
                                              this.tabContents = [
                                                {
                                                  id: '1',
                                                  heading: 'Digital Marketing Services for Health & Fitness Firms',
                                                  image: './../../../assets/images/services/service-132.jpg',
                                                  paragraphs:[
                                                    {id:1, descrption: 'At Digital Engage, we specialize in providing top-notch marketing services to Health & Fitness Companies of all sizes. With our team of experienced marketing professionals, we can help you develop and implement a custom marketing strategy tailored to your business needs and goals.'},   
                                                  ]
                                                },
                                              
                                            
                                                {
                                                  id: '2',
                                                  heading: 'Digital Marketing Services for Health & Fitness Firms',
                                                  image: './../../../assets/images/services/service-133.jpg',
                                                  paragraphs:[
                                                    {id:1, descrption: 'Whether you’re looking to increase your social media presence, improve your search engine rankings, or launch a targeted email marketing campaign, we have the expertise to help you achieve your objectives.'},
                                                    {id:2, descrption: 'So why wait? Contact us now, and let us help you take your establishment to new heights with the power of digital marketing!'},
                                                  ]
                                                },
                        
                                                {
                                                  id: '3',
                                                  heading: 'Why Health & Fitness Companies Need Digital Marketing',
                                                  image: './../../../assets/images/services/service-134.jpg',
                                                  paragraphs:[
                                                    {id:1, descrption: 'In today’s digital age, health, and fitness businesses need a robust online presence to grow and thrive. The fitness industry is highly competitive, and more than traditional marketing efforts are required to attract and retain customers.'},
                                                  ]
                                                },
                
                                                
                                                
                                                {
                                                  id: '4',
                                                  heading: 'Why Health & Fitness Companies Need Digital Marketing',
                                                  image: './../../../assets/images/services/service-135.jpg',
                                                  paragraphs:[
                                                    {id:1, descrption: 'That’s where digital marketing comes in. By leveraging social media platforms, influencer marketing, and other marketing strategies, fitness marketing services can help health and wellness businesses establish themselves as leading brands in the fitness industry. Health club and fitness marketing companies can support health and fitness brands to reach a bigger audience and connect with potential customers in a way that traditional marketing efforts simply can’t.'},
                                                    {id:2, descrption: 'So if you’re a fitness business looking to grow your customer base and establish your brand as a leader in the health and wellness industry, Get in touch with us today and let us help you establish your business on a larger scale.'},
                                                  ]
                                                },
                                              ];
                                
                                
                                              this.tabLink = [
                                                { id: '1', title: 'Digital Marketing Services for Health & Fitness Firms' },
                                                { id: '2', title: 'Digital Marketing Services for Health & Fitness Firms' },
                                                { id: '3', title: 'Why Health & Fitness Companies Need Digital Marketing' },
                                                { id: '4', title: 'Why Health & Fitness Companies Need Digital Marketing' },
                                              ];
                                
                                              break;
          
                                              case 'hvac':
                                                this.tabContents = [
                                                  {
                                                    id: '1',
                                                    heading: 'Top Rated Online Marketing For HVAC Companies',
                                                    image: './../../../assets/images/services/service-136.webp',
                                                    paragraphs:[
                                                      {id:1, descrption: 'Because it enables HVAC businesses to connect with their target market and advertise their goods and services online, digital marketing is essential for every HVAC company. Digital marketing from Digital Engage will help HVAC companies increase their visibility and reach out to a larger audience online. HVAC businesses can ensure that their website and content appear at the top of search engine results pages by using our targeted online ads, marketing on social media, and search engine optimization (SEO).'},   
                                                    ]
                                                  },
                                                
                                              
                                                  {
                                                    id: '2',
                                                    heading: 'SEO Services For HVAC Companies',
                                                    image: './../../../assets/images/services/service-137.webp',
                                                    paragraphs:[
                                                      {id:1, descrption: 'For HVAC businesses, search engine optimization is essential since it increases their online visibility and aids in improving their position on search engine results in pages. Our SEO services will help HVAC companies improve their website’s search engine ranking, which can lead to increased organic traffic from search engines. This is important because more traffic means more potential customers. SEO entails making a website search engine friendly as well as for users. This means that an HVAC company’s website will load faster, have straightforward and intuitive navigation, and be mobile-friendly, improving the user experience.'},
                                                    ]
                                                  },
                          
                                                  {
                                                    id: '3',
                                                    heading: 'Local SEO For HVAC Companies',
                                                    image: './../../../assets/images/services/service-138.webp',
                                                    paragraphs:[
                                                      {id:1, descrption: 'Local SEO is vital to a successful digital marketing strategy for HVAC companies that serve specific geographic areas. HVAC companies can optimize their website for local search by including local keywords, location-based content, and a clear description of their service area. Any internet reference of a company’s name, address, and phone number is referred to as a local citation. Building local citations on reputable business directories, such as Yelp, Yellow Pages, and Angie’s List, can help HVAC companies to improve their local search rankings. Digital Engage specializes in Local SEO for HVAC Companies. Our practices provide guaranteed growth in outreach for HVAC companies. Contact us today and book an appointment.'},
                                                    ]
                                                  },
                  
                                                  
                                                  
                                                  {
                                                    id: '4',
                                                    heading: 'Social Media Marketing For HVAC Businesses',
                                                    image: './../../../assets/images/services/service-139.webp',
                                                    paragraphs:[
                                                      {id:1, descrption: 'Social media marketing is essential for HVAC companies because it allows them to connect with their target audience, build relationships, and promote their products and services. Our social media marketing enables HVAC businesses to reach a larger audience and raise brand awareness. HVAC businesses may develop a solid online presence and position themselves as authorities in their industry by producing informative information and interacting with followers. We’ll provide your business with the best possible social media presence.'},
                                                    ]
                                                  },

                                                   
                                                  {
                                                    id: '5',
                                                    heading: 'Video & Photo Marketing For HVAC Businesses',
                                                    image: './../../../assets/images/services/service-140.webp',
                                                    paragraphs:[
                                                      {id:1, descrption: 'Video and photo marketing are potent tools from Digital Engage for HVAC companies to promote their products and services, showcase their expertise, and engage with their target audience. HVAC companies can use video and photo marketing to demonstrate their products in action, showcasing their features and benefits. This can help potential customers better understand what the product does and how it can benefit them. Before-and-after photos are a great way to demonstrate the effectiveness of HVAC services such as air duct cleaning, furnace repair, or AC installation. By showcasing the transformation, HVAC companies can build credibility and trust with potential customers.'},
                                                    ]
                                                  },
                                                ];
                                  
                                  
                                                this.tabLink = [
                                                  { id: '1', title: 'Top Rated Online Marketing For HVAC Companies' },
                                                  { id: '2', title: 'SEO Services For HVAC Companies' },
                                                  { id: '3', title: 'Local SEO For HVAC Companies' },
                                                  { id: '4', title: 'Social Media Marketing For HVAC Businesses' },
                                                  { id: '5', title: 'Video & Photo Marketing For HVAC Businesses' },
                                                ];
                                  
                                                break;
            
      

          case 'home':
          this.tabContents = [
            {
              id: '1',
              heading: 'Local Business SEO',
              image: './../../../assets/images/services/seo-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Search engine optimization is a critical component to any digital marketing strategy, but if you run a local business you also need to consider <a href="">localized SEO</a> services that can bring you hyper-targeted traffic right to your front door.'},
              ]
             },
            {
              id: '2',
              heading: 'Search Engine Optimization',
              image: './../../../assets/images/services/seo-1.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Over 80% of all buying decisions starting with a search on Google, Bing, or another search engine. Can your brand afford to sit back while the competition takes advantage of <a href="">this?</a>'},
                {
                  id:2,
                  descrption: 'On average, 68% of clicks belong to the first three results with less than 3% of traffic ever clicking through to page #2.'},
              ]
             },
            {
              id: '3',
              heading: 'PPC Management',
              image: './../../../assets/images/services/service-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Few digital marketing strategies have the potential to yield immediate ROI and scale in the way that pay <a href="">per click (PPC) management</a> services do. Our talented PPC optimization team can help devise, launch and optimize a PPC'},
              ]
             },
             {
              id: '4',
              heading: 'Reputation Management Services',
              image: './../../../assets/images/services/service-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'In today’s hyper-competitive landscape, few things can impact business as much as your reputation. That means having the ability to <a href="">control and narrate</a> your brand’s story in the way to effectively earn trust and establish authority.'},
              ]
             },
             {
              id: '5',
              heading: 'Google Maps Marketing',
              image: './../../../assets/images/services/service-2.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Few mediums can beat Google Maps or Google My Business (GMB) listings when it comes to local marketing. GMB properties are responsible for the majority of phone calls and walk-ins directly to local businesses. With competition in local markets heating up, optimizing and ranking these properties takes specialized knowledge along with careful strategy and implementation. We’ll help you claim and rank your GMB listing, driving laser focused localized traffic to your site and in your doors.'},
              ]
             },
             {
              id: '6',
              heading: 'Social Media Management',
              image: './../../../assets/images/services/service-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Second only to Google, <a hef="">social media</a> is a powerhouse of a marketing tool that can be leveraged to drive performance at your business. It’s a safe and effectively, powerful medium to promote your brand when utilized properly. Consumers on both the B2C and B2B spectrum now expect your brand to have a well-maintained social presence. Digital Engage will help you grow your audience and manage platforms so that your able to interact with prospects and customers in real time'},
              ]
             },
             {
              id: '7',
              heading: 'On-Page Optimization',
              image: './../../../assets/images/services/service-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'In 2018 and beyond, having a website isn’t enough. That website must be optimized to improve ranking, provide an excellent customer experience, and drive action (i.e. sales, clicks, and leads). Your website is your best employee, available 24/7/365. Let us help make sure it’s operating at peak performance, driving the results your brand expects and deserves.'},
              ]
             },
             {
              id: '8',
              heading: 'Website Design',
              image: './../../../assets/images/services/service-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Is your brand in need of a <a href="">website or web design update?</a> Digital Engage can help design a website for your company that effectively communicates your brand’s mission, values, benefits and connects with your audience while driving sales and growth. We have the experience to bring your vision to life, captivating specific target audiences with the experience you desire.'},
              ]
             },
          ];


          this.tabLink = [
            { id: '1', title: 'Local Business SEO' },
            { id: '2', title: 'Search Engine Optimization' },
            { id: '3', title: 'PPC Management' },
            { id: '4', title: 'Reputation Management Services' },
            { id: '5', title: 'Google Maps Marketing' },
            { id: '6', title: 'Social Media Management' },
            { id: '7', title: 'On-Page Optimization' },
            { id: '8', title: 'Website Design' },
          ];
          break;


          case 'about':
            this.tabContents = [
              {
                id: '1',
                heading: 'Local Business SEO',
                image: './../../../assets/images/services/seo-5.webp',
                paragraphs:[
                  {
                    id:1,
                    descrption: 'Search engine optimization is a critical component to any digital marketing strategy, but if you run a local business you also need to consider <a href="">localized SEO</a> services that can bring you hyper-targeted traffic right to your front door.'},
                ]
               },
              {
                id: '2',
                heading: 'Search Engine Optimization',
                image: './../../../assets/images/services/seo-1.webp',
                paragraphs:[
                  {
                    id:1,
                    descrption: 'Over 80% of all buying decisions starting with a search on Google, Bing, or another search engine. Can your brand afford to sit back while the competition takes advantage of <a href="">this?</a>'},
                  {
                    id:2,
                    descrption: 'On average, 68% of clicks belong to the first three results with less than 3% of traffic ever clicking through to page #2.'},
                ]
               },
              {
                id: '3',
                heading: 'PPC Management',
                image: './../../../assets/images/services/service-5.webp',
                paragraphs:[
                  {
                    id:1,
                    descrption: 'Few digital marketing strategies have the potential to yield immediate ROI and scale in the way that pay <a href="">per click (PPC) management</a> services do. Our talented PPC optimization team can help devise, launch and optimize a PPC'},
                ]
               },
               {
                id: '4',
                heading: 'Reputation Management Services',
                image: './../../../assets/images/services/service-5.webp',
                paragraphs:[
                  {
                    id:1,
                    descrption: 'In today’s hyper-competitive landscape, few things can impact business as much as your reputation. That means having the ability to <a href="">control and narrate</a> your brand’s story in the way to effectively earn trust and establish authority.'},
                ]
               },
               {
                id: '5',
                heading: 'Google Maps Marketing',
                image: './../../../assets/images/services/service-2.webp',
                paragraphs:[
                  {
                    id:1,
                    descrption: 'Few mediums can beat Google Maps or Google My Business (GMB) listings when it comes to local marketing. GMB properties are responsible for the majority of phone calls and walk-ins directly to local businesses. With competition in local markets heating up, optimizing and ranking these properties takes specialized knowledge along with careful strategy and implementation. We’ll help you claim and rank your GMB listing, driving laser focused localized traffic to your site and in your doors.'},
                ]
               },
               {
                id: '6',
                heading: 'Social Media Management',
                image: './../../../assets/images/services/service-5.webp',
                paragraphs:[
                  {
                    id:1,
                    descrption: 'Second only to Google, <a hef="">social media</a> is a powerhouse of a marketing tool that can be leveraged to drive performance at your business. It’s a safe and effectively, powerful medium to promote your brand when utilized properly. Consumers on both the B2C and B2B spectrum now expect your brand to have a well-maintained social presence. Digital Engage will help you grow your audience and manage platforms so that your able to interact with prospects and customers in real time'},
                ]
               },
               {
                id: '7',
                heading: 'On-Page Optimization',
                image: './../../../assets/images/services/service-5.webp',
                paragraphs:[
                  {
                    id:1,
                    descrption: 'In 2018 and beyond, having a website isn’t enough. That website must be optimized to improve ranking, provide an excellent customer experience, and drive action (i.e. sales, clicks, and leads). Your website is your best employee, available 24/7/365. Let us help make sure it’s operating at peak performance, driving the results your brand expects and deserves.'},
                ]
               },
               {
                id: '8',
                heading: 'Website Design',
                image: './../../../assets/images/services/service-5.webp',
                paragraphs:[
                  {
                    id:1,
                    descrption: 'Is your brand in need of a <a href="">website or web design update?</a> Digital Engage can help design a website for your company that effectively communicates your brand’s mission, values, benefits and connects with your audience while driving sales and growth. We have the experience to bring your vision to life, captivating specific target audiences with the experience you desire.'},
                ]
               },
            ];
  
  
            this.tabLink = [
              { id: '1', title: 'Local Business SEO' },
              { id: '2', title: 'Search Engine Optimization' },
              { id: '3', title: 'PPC Management' },
              { id: '4', title: 'Reputation Management Services' },
              { id: '5', title: 'Google Maps Marketing' },
              { id: '6', title: 'Social Media Management' },
              { id: '7', title: 'On-Page Optimization' },
              { id: '8', title: 'Website Design' },
            ];
            break;

         case '':
          this.tabContents = [
            {
              id: '1',
              heading: 'Local Business SEO',
              image: './../../../assets/images/services/seo-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Search engine optimization is a critical component to any digital marketing strategy, but if you run a local business you also need to consider <a href="">localized SEO</a> services that can bring you hyper-targeted traffic right to your front door.'},
              ]
             },
            {
              id: '2',
              heading: 'Search Engine Optimization',
              image: './../../../assets/images/services/seo-1.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Over 80% of all buying decisions starting with a search on Google, Bing, or another search engine. Can your brand afford to sit back while the competition takes advantage of <a href="">this?</a>'},
                {
                  id:2,
                  descrption: 'On average, 68% of clicks belong to the first three results with less than 3% of traffic ever clicking through to page #2.'},
              ]
             },
            {
              id: '3',
              heading: 'PPC Management',
              image: './../../../assets/images/services/service-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Few digital marketing strategies have the potential to yield immediate ROI and scale in the way that pay <a href="">per click (PPC) management</a> services do. Our talented PPC optimization team can help devise, launch and optimize a PPC'},
              ]
             },
             {
              id: '4',
              heading: 'Reputation Management Services',
              image: './../../../assets/images/services/service-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'In today’s hyper-competitive landscape, few things can impact business as much as your reputation. That means having the ability to <a href="">control and narrate</a> your brand’s story in the way to effectively earn trust and establish authority.'},
              ]
             },
             {
              id: '5',
              heading: 'Google Maps Marketing',
              image: './../../../assets/images/services/service-2.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Few mediums can beat Google Maps or Google My Business (GMB) listings when it comes to local marketing. GMB properties are responsible for the majority of phone calls and walk-ins directly to local businesses. With competition in local markets heating up, optimizing and ranking these properties takes specialized knowledge along with careful strategy and implementation. We’ll help you claim and rank your GMB listing, driving laser focused localized traffic to your site and in your doors.'},
              ]
             },
             {
              id: '6',
              heading: 'Social Media Management',
              image: './../../../assets/images/services/service-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Second only to Google, <a hef="">social media</a> is a powerhouse of a marketing tool that can be leveraged to drive performance at your business. It’s a safe and effectively, powerful medium to promote your brand when utilized properly. Consumers on both the B2C and B2B spectrum now expect your brand to have a well-maintained social presence. Digital Engage will help you grow your audience and manage platforms so that your able to interact with prospects and customers in real time'},
              ]
             },
             {
              id: '7',
              heading: 'On-Page Optimization',
              image: './../../../assets/images/services/service-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'In 2018 and beyond, having a website isn’t enough. That website must be optimized to improve ranking, provide an excellent customer experience, and drive action (i.e. sales, clicks, and leads). Your website is your best employee, available 24/7/365. Let us help make sure it’s operating at peak performance, driving the results your brand expects and deserves.'},
              ]
             },
             {
              id: '8',
              heading: 'Website Design',
              image: './../../../assets/images/services/service-5.webp',
              paragraphs:[
                {
                  id:1,
                  descrption: 'Is your brand in need of a <a href="">website or web design update?</a> Digital Engage can help design a website for your company that effectively communicates your brand’s mission, values, benefits and connects with your audience while driving sales and growth. We have the experience to bring your vision to life, captivating specific target audiences with the experience you desire.'},
              ]
             },
          ];
          this.tabLink = [
            { id: '1', title: 'Local Business SEO' },
            { id: '2', title: 'Search Engine Optimization' },
            { id: '3', title: 'PPC Management' },
            { id: '4', title: 'Reputation Management Services' },
            { id: '5', title: 'Google Maps Marketing' },
            { id: '6', title: 'Social Media Management' },
            { id: '7', title: 'On-Page Optimization' },
            { id: '8', title: 'Website Design' },
          ];
          break;
         default:
          // Default case or fallback content
          this.tabContents = [
            { id: '1', heading: 'Service 1', image: 'assets/images/service1.jpg', paragraphs: [{ description: 'Description of Service 1.' }] },
            { id: '2', heading: 'Service 2', image: 'assets/images/service2.jpg', paragraphs: [{ description: 'Description of Service 2.' }] }
          ];
          this.tabLink = [
            { id: '1', title: 'Service 1' },
            { id: '2', title: 'Service 2' }
          ];
          break;
    }

    // Automatically set the first tab as selected if it's not already set
    if (this.selectedTab === null || this.selectedTab === undefined) {
      this.selectedTab = 0;
    }
  }

  // Method to change the selected tab
  setSelectedTab(index: number): void {
    this.selectedTab = index;
  }
    // Method to navigate to the details page
    navigateToDetails(id: string): void {
      this.router.navigate([`/services/${id}`]);
    }
}
