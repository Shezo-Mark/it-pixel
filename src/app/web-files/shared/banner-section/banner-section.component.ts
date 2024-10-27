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
        subTitle: 'OUR SERVICES',
        heading: 'We provide excellent <br> solutions',
        paragraph: 'Our expertise is in delivering top-notch services.',
        buttonText: 'Learn More',
        imageUrl: '../../../../assets/images/banner-gif/services-banner.png', // Update with correct path
      },
      about: {
        subTitle: 'ABOUT US',
        heading: 'We are born in a <br> connected world.',
        paragraph: 'And there’s almost nothing that we understand better.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with correct path
        buttonUrl:'/contact',
      },
      contact: {
        subTitle: 'CONTACT US',
        heading: 'Are you ready for a no <br> obligation quote?',
        buttonText: 'Email Us',
        imageUrl: '../../../../assets/images/banner-gif/contact-banner.png', // Update with correct path
        buttonUrl:'mailto:shehzadamin697@gmail',
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
