import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.scss']
})
export class OtherServicesComponent {
  OurTeam = [
    {
      id: '1',
      src: "../../../../assets/images/team-picture/team-3.jpg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Mubashir Rafique",
      roll:"Web Developer"
    },
    {
      id: '2',
      src: "../../../../assets/images/team-picture/team-5.jpg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Shehzad Amin",
      roll:"CEO - It-Pixel"
    },
    {
      id: '3',
      src: "../../../../assets/images/team-picture/team-1.jpg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Ismail Ahamad",
      roll:"Web Developer"
    },
    {
      id: '4',
      src: "../../../../assets/images/team-picture/team-2.jpg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Muhammad Amin",
      roll:"Web Developer"
    },
    {
      id: '5',
      src: "../../../../assets/images/team-picture/team-3.jpg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Ahmad Khalid",
      roll:"Web Developer"
    },
    {
      id: '6',
      src: "../../../../assets/images/team-picture/team-4.jpg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Shehzad Amin",
      roll:"Web Developer"
    },
    {
      id: '7',
      src: "../../../../assets/images/team-picture/team-1.jpg" ,
      alt: "upwork-logo" ,
      description:"At first, I wondered if the heavy use of technology might actually hamper their effectiveness, but my concerns were unfounded.",
      name: "Shehzad Amin",
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