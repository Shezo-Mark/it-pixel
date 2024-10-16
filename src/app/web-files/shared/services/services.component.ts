import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  servicesCards = [
    {
      id: 1,
      title: 'Card 1 Title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: '../../../../assets/images/site-images/about.jpg'
    },
    {
      id: 2,
      title: 'Card 2 Title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: '../../../../assets/images/site-images/about.jpg'
    },
    {
      id: 3,
      title: 'Card 3 Title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: '../../../../assets/images/site-images/about.jpg'
    },
    {
      id: 4,
      title: 'Card 4 Title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: '../../../../assets/images/site-images/about.jpg'
    },
    {
      id: 5,
      title: 'Card 5 Title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: '../../../../assets/images/site-images/about.jpg'
    }
  ];
}
