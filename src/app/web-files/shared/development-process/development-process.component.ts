import { Component } from '@angular/core';

@Component({
  selector: 'app-development-process',
  templateUrl: './development-process.component.html',
  styleUrls: ['./development-process.component.scss']
})
export class DevelopmentProcessComponent {
  processSteps = [
    {
      id: 1,
      title: 'Discovery & Planning',
      description: 'The first step in our web design process is discovery and planning. During this phase, we will learn more about your company, your goals, and your target audience. We will also start to plan out the structure and design of your website.'
    },
    {
      id: 2,
      title: 'Design & Prototyping',
      description: 'We will create design mockups and prototypes that show the look and feel of your new website. You will have the opportunity to provide feedback before we start the development phase.'
    },
    {
      id: 3,
      title: 'Development',
      description: 'During the development phase, we will turn the design mockups into a fully functional website. We will code your website using best practices to ensure it is fast, secure, and optimized for search engines.'
    },
    {
      id: 4,
      title: 'Testing & Launch',
      description: 'Before launching your website, we will perform thorough testing to ensure everything works as expected. Once the website is ready, we will launch it for the world to see.'
    },
    {
      id: 5,
      title: 'Post-Launch Support',
      description: 'After launch, we provide ongoing support and maintenance to ensure your website remains up to date, secure, and functioning properly.'
    }
  ];
}
