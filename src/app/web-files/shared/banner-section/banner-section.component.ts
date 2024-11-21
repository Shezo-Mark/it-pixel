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
        heading: 'We are born in a <br> connected world.',
        paragraph: 'And there’s almost nothing that we understand better.',
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
        heading: 'High Performance SEO Services',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with correct path
        buttonUrl:'/contact',
      },
      'paid-search': {
        heading: 'Paid Search Marketing',
        paragraph: 'Pay Per Call Marketing is a performance-focused service we provide for our clients where we set up campaigns that generate actual inbound phone calls from interested prospects.',
        buttonText: 'Contact Us',
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
