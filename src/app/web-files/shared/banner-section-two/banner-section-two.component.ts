import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-section-two',
  templateUrl: './banner-section-two.component.html',
  styleUrls: ['./banner-section-two.component.scss']
})
export class BannerSectionTwoComponent {
  bannerContent: any;
    backgroundImage: string = '';

    // Define banner content for different routes
    private bannerData: { [key: string]: any } = {
      blogs: {
        subTitle: 'Blogs',
        heading: 'Our Blogs',
        paragraph: 'Our expertise is in delivering top-notch services.',
        buttonText: 'Contact Us',
        imageUrl: '../../../../assets/images/banner-gif/blogs-banner.png', // Update with correct path
        buttonUrl:'/contact',
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
