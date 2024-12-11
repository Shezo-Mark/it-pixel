import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-paid-search',
  templateUrl: './paid-search.component.html',
  styleUrls: ['./paid-search.component.scss']
})
export class PaidSearchComponent {
  slidesStore = [
    {
      id: '1',
      src: "../../../../assets/images/site-images/upwork-logo.svg" ,
      alt: "upwork-logo" ,
      description:"IT-Pixel turned our PPC campaigns into a powerhouse for lead generation. Our ROI has never been better!” - Jennifer L., Small Business Owner Their landing page designs are a game-changer. Conversion rates skyrocketed!",
      name: "Mark T",
      roll:"Marketing Manager"
    },
    {
      id: '2',
      src: "../../../../assets/images/site-images/upwork-logo.svg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Shehzad Amin",
      roll:"CEO - It-Pixel"
    },
    {
      id: '3',
      src: "../../../../assets/images/site-images/upwork-logo.svg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Ismail Ahamad",
      roll:"Web Developer"
    },
    {
      id: '4',
      src: "../../../../assets/images/site-images/upwork-logo.svg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Muhammad Amin",
      roll:"Web Developer"
    },
    {
      id: '5',
      src: "../../../../assets/images/site-images/upwork-logo.svg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Ahmad Khalid",
      roll:"Web Developer"
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    nav: true,
    center: true, // Enable center mode
    // margin: 20,
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3.5
      },
    },

  }

}
