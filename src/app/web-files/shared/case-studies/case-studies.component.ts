import { Component } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent{
  caseStudies = [
    { 
      id: 1,
      title: 'Mobile App Design',
      image: 'assets/images/site-images/case-1.jpg' 
    },
    { 
      id: 2,
      title: 'Mobile App Design', 
      image: 'assets/images/site-images/case-2.jpg' 
    },
    { 
      id: 3,
      title: 'Mobile App Design', 
      image: 'assets/images/site-images/case-3.jpg' 
    },
    { 
      id: 4,
      title: 'Mobile App Design', 
      image: 'assets/images/site-images/case-4.jpg' 
    },
    { 
      id: 5,
      title: 'Mobile App Design', 
      image: 'assets/images/site-images/case-5.jpg' 
    },
    { 
      id: 6,
      title: 'Mobile App Design', 
      image: 'assets/images/site-images/case-6.jpg' 
    }
  ];
}
