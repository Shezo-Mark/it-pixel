// import { Component } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-marketing-fields',
  templateUrl: './marketing-fields.component.html',
  styleUrls: ['./marketing-fields.component.scss']
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

export class MarketingFieldsComponent implements OnInit {
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
          { id: '1', heading: 'SEO SERVICES', image: './../../../assets/images/services/seo-1.webp',
            paragraphs:[
              {id:1, descrption: 'Effective SEO that turns your investment in marketing into more sales, more revenue and more customers for our clients. '},
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
          { id: '3', heading: 'Holistic SEO Strategies Custom Made to Perform', image: 'assets/images/services/seo-3.webp',
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

      case 'home':
        this.tabContents = [
          { id: '1', heading: 'Content Creation', image: 'assets/images/content-creation.jpg', paragraphs: [{ description: 'We create engaging and informative content that drives traffic.' }] },
          { id: '2', heading: 'Content Distribution', image: 'assets/images/content-distribution.jpg', paragraphs: [{ description: 'We distribute content across multiple platforms to increase reach.' }] },
          { id: '3', heading: 'Analytics & Reporting', image: 'assets/images/analytics.jpg', paragraphs: [{ description: 'We analyze and report on content performance to refine strategies.' }] }
        ];
        this.tabLink = [
          { id: '1', title: 'Content Creation' },
          { id: '2', title: 'Content Distribution' },
          { id: '3', title: 'Analytics & Reporting' }
        ];
        break;
        case '':
          this.tabContents = [
            { id: '1', heading: 'Content Creation', image: 'assets/images/content-creation.jpg', paragraphs: [{ description: 'We create engaging and informative content that drives traffic.' }] },
            { id: '2', heading: 'Content Distribution', image: 'assets/images/content-distribution.jpg', paragraphs: [{ description: 'We distribute content across multiple platforms to increase reach.' }] },
            { id: '3', heading: 'Analytics & Reporting', image: 'assets/images/analytics.jpg', paragraphs: [{ description: 'We analyze and report on content performance to refine strategies.' }] }
          ];
          this.tabLink = [
            { id: '1', title: 'Content Creation' },
            { id: '2', title: 'Content Distribution' },
            { id: '3', title: 'Analytics & Reporting' }
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
