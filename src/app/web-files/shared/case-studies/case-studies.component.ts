import { Component } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent{
  caseStudies = [
    { title: 'Mobile App Design', image: 'assets/images/site-images/case-1.jpg' },
    { title: 'Mobile App Design', image: 'assets/images/site-images/case-2.jpg' },
    { title: 'Mobile App Design', image: 'assets/images/site-images/case-3.jpg' },
    { title: 'Mobile App Design', image: 'assets/images/site-images/case-4.jpg' },
    { title: 'Mobile App Design', image: 'assets/images/site-images/case-5.jpg' },
    { title: 'Mobile App Design', image: 'assets/images/site-images/case-6.jpg' }
  ];
}
