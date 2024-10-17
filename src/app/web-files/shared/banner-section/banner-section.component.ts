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
      home: {
        subTitle: 'ABOUT US',
        heading: 'We believe in building <br> high value',
        paragraph: 'We connect, explore, create, empower and grow together.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/home-banner.png', // Update with correct path
      },
      services: {
        subTitle: 'OUR SERVICES',
        heading: 'We provide excellent <br> solutions',
        paragraph: 'Our expertise is in delivering top-notch services.',
        buttonText: 'Learn More',
        imageUrl: '../../../../assets/images/banner-gif/services-banner.png', // Update with correct path
      },
      about: {
        subTitle: 'About Us',
        heading: 'We are born in a <br> connected world.',
        paragraph: 'We are here to assist you with your queries.',
        buttonText: 'Reach Out',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with correct path
      },
      contact: {
        subTitle: 'CONTACT US',
        heading: 'Let’s get in touch <br> today',
        paragraph: 'We are here to assist you with your queries.',
        buttonText: 'Reach Out',
        imageUrl: '../../../../assets/images/banner-gif/contact-banner.png', // Update with correct path
      }
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
