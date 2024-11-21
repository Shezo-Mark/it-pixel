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
