import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent implements OnInit {
    bannerContent: any;
    backgroundImage: string = '';

    // Define banner content for different routes
    private bannerData: { [key: string]: any } = {
      services: {
        heading: 'We provide excellent <br> solutions',
        paragraph: 'Our expertise is in delivering top-notch services.',
        buttonText: 'Learn More',
        imageUrl: '../../../../assets/images/banner-gif/services-banner.png', // Update with correct path
      },
      about: {
        heading: 'We believe in building high value',
        paragraph: 'We connect, explore, create, empower and grow together.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with correct path
        buttonUrl:'/contact',
      },

      contact: {
        heading: 'Are you ready for a no <br> obligation quote?',
        buttonText: 'Email Us',
        imageUrl: '../../../../assets/images/banner-gif/contact-banner.png', // Update with correct path
        buttonUrl:'mailto:shehzadamin697@gmail',
      },
      seo: {
        heading: 'Elevate Your Online <br> Presence',
        paragraph: 'Your digital success starts here. Let IT-Pixel transform your online visibility.',
        buttonText: 'Get Started Now',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with correct path
        buttonUrl:'/contact',
      },
      'paid-search': {
        heading: 'Boost Your ROI with <br> Cutting-Edge PPC Services',
        paragraph: 'Drive results, maximize your ROI, and dominate your market with IT-Pixels tailored PPC solutions.',
        buttonText: 'Claim Your Free PPC Audit Now',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'social-media': {
        heading: 'Social Ad Marketing',
        paragraph: 'The rules of engagement have changed & we can help you stay on top of your game.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'reputation-management': {
        heading: 'Reputation Management',
        paragraph: 'Reputation management, also known as ORM (online reputation management) <br> or rep management is the art and science of molding the public’s or your target <br> market’s perception and opinion of you or your business.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'branding-logo': {
        heading: 'Branding and Logo Creation',
        paragraph: 'Digital Engage provides comprehensive branding and logo services that capture your vision and message for quick customer recognition.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'website-hosting': {
        heading: 'Website Hosting Services',
        paragraph: 'Digital Engage offers website hosting services that are safe, secure, <br> and staffed by experts, 24/7.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'web-support': {
        heading: 'Top-Notch Website Support Services',
        paragraph: 'Digital Engage has a team of niche experts ready to provide all-inclusive web <br> support services for our clients.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'local-seo': {
        heading: 'What Is Local Search Engine Optimization',
        paragraph: 'In addition to non-digital methods of local advertising—local circulars, direct mailing, billboards, and the like—these businesses have internet tools available to detect and respond to searches within their geographic area. Digital Engage offers local search engine optimization service and other design services to assist businesses within their local area.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'word-press': {
        heading: 'Custom WordPress Web Design',
        paragraph: 'Our dedicated team of WordPress web developers can help businesses of any size expand their online presence. Our team will collaborate with you to create a web page that you can be proud of no matter the scope or specialty of your business.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'woo-commerce': {
        heading: 'WooCommerce Website Design & Development Services',
        paragraph: 'Get a beautiful, custom WooCommerce website that converts visitors into customers. Our team of expert WooCommerce web designers and developers will create a site that’s perfect for your business.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'shopify': {
        heading: 'Shopify Experts',
        paragraph: 'Digital Engage helps you build your custom Shopify Store and provides complete Shopify solutions. From Shopify website design to Shopify apps, we take care of it all!',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'wix-developer': {
        heading: 'Wix Website Design & Development Services',
        paragraph: 'At Wix, we know that a great website is a key to success online. That’s why we offer professional, high-quality website design and development services to help you get the most out of your Wix website.s',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'magento': {
        heading: 'Magento Website Design & Development Services',
        paragraph: 'Get the best Magento website design & development services from our team of Magento experts. Build your perfect Magento store today!',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'square-space': {
        heading: 'Squarespace Development & Design Services',
        paragraph: 'We Offer Complete Squarespace Web Design and Development Services. Our team of Expert Squarespace web developers & Designers helps you create a unique website on the Squarespace platform.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'big-commerce': {
        heading: 'BigCommerce Website Design & Development Services ',
        paragraph: 'Whether you’re just getting started with BigCommerce or looking to take your existing store to the next level, our experienced BigCommerce designers and developers can help.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
       'drupal': {
        heading: 'Drupal Website Design & Development Services',
        paragraph: 'Our Drupal web designers and expert developers can help you create a website that is both beautiful and functional. Drupal is a powerful content management system that is perfect for creating custom websites.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'joomla': {
        heading: 'Expert Joomla Web Designers & Developers',
        paragraph: 'Get the best Joomla design development services from expert Joomla developers at Digital Engage. We offer custom Joomla development, Joomla template design, and Joomla extension development.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'hubspot': {
        heading: 'HubSpot Website Design & Development Services',
        paragraph: 'Get the best HubSpot website design and development services from one of the best HubSpot web design firms. HubSpot is a powerful platform that helps businesses grow their online presence. With our Hubspot Agency in Nashville of web designers and developers, you can create a beautiful and effective website that will help you reach your goals including inbound marketing services, search engine marketing, email marketing, social media marketing and others.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'Os-Commerce': {
        heading: 'OsCommerce Website Design & Development Services',
        paragraph: 'Get ahead of the competition with a custom OsCommerce website designed and developed by our team of experts. Our services include everything from custom OsCommerce design to development and integration of third-party software.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'prestashop': {
        heading: 'Prestashop Website Design & Development Services',
        paragraph: 'Prestashop is a popular eCommerce platform that helps businesses create professional online stores. Our team of Prestashop web designers and developers can help you create a custom Prestashop store that is tailored to your specific business needs.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'case-study': {
        heading: 'Prestashop Website Design & Development Services',
        paragraph: 'Prestashop is a popular eCommerce platform that helps businesses create professional online stores. Our team of Prestashop web designers and developers can help you create a custom Prestashop store that is tailored to your specific business needs.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'medical': {
        heading: 'Digital Marketing For Medical',
        paragraph: 'Increase service line revenue through innovative digital marketing strategies',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'finacial': {
        heading: 'SEO Marketing For Financial Services',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'local-business': {
        heading: 'Local SEO Helps Businesses',
        paragraph: 'Local SEO helps businesses promote their products and services to local prospects and customers',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'eCommerce': {
        heading: 'Ecommerce SEO online',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'legal-marketing': {
        heading: 'Legal Marketing',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'home-services': {
        heading: 'Digital Marketing for Home Services',
        paragraph: 'At Digital Engage, we offer professional digital marketing services for home services. Our team of digital marketers has helped numerous home service business owners elevate their digital marketing campaigns.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'health-fitness': {
        heading: 'Digital Marketing for Health & Fitness Companies',
        paragraph: 'Are you a health and fitness company looking to expand your online establishment and increase your customer base? Look no further than Digital Engage! Our team of experts specializes in Digital Marketing for Health & Fitness service Companies, including online media marketing and various effective marketing strategies.  Get in touch with us to learn more about our service.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },
      'hvac': {
        heading: 'Digital Marketing For HVAC Companies',
        paragraph: 'Digital Marketing for HVAC companies is highly crucial. If you have an HVAC company and want to promote its growth, digital marketing techniques from Digital Engage will greatly benefit you. Make an appointment with one of our professionals by contacting us right away.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with the correct path
        buttonUrl: '/contact',
      },


    };

    constructor(private router: Router) {}

    ngOnInit(): void {
      this.setBannerContent();
    }

    private setBannerContent(): void {
      const currentPage: string = this.router.url.split('/').pop() || 'about'; // Get the last part of the URL or default to 'home'
      this.bannerContent = this.bannerData[currentPage] || this.bannerData['about']; // Default to home if not found
      this.backgroundImage = this.bannerContent.imageUrl; // Set the background image
    }
}
