import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-study-details',
  templateUrl: './case-study-details.component.html',
  styleUrls: ['./case-study-details.component.scss']
})
export class CaseStudyDetailsComponent implements OnInit{
  caseStudyId!: number;
  caseStudy: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.caseStudyId = Number(this.route.snapshot.paramMap.get('id')); // Get the case study ID from the URL
    this.caseStudy = this.getCaseStudyDetails(this.caseStudyId); // Fetch the details based on ID
  }

  getCaseStudyDetails(id: number) {
    // Hardcoded case studies data - can be fetched from a service
    const caseStudies = [
      { 
        id: 1,
        title: 'Mobile App Design',
        image: 'assets/images/site-images/case-1.jpg',
        text : 'text 1 here'
      },
      { 
        id: 2,
        title: 'Mobile App Design', 
        image: 'assets/images/site-images/case-2.jpg',
        text : 'text 2 here'
      },
      { 
        id: 3,
        title: 'Mobile App Design', 
        image: 'assets/images/site-images/case-3.jpg',
        text : 'text 3 here'
      },
      { 
        id: 4,
        title: 'Mobile App Design', 
        image: 'assets/images/site-images/case-4.jpg',
        text : 'text 4 here'
      },
      { 
        id: 5,
        title: 'Mobile App Design', 
        image: 'assets/images/site-images/case-5.jpg',
        text : 'text 5 here'
      },
      { 
        id: 6,
        title: 'Mobile App Design', 
        image: 'assets/images/site-images/case-6.jpg',
        text : 'text 6 here' 
      }
    ];

    return caseStudies.find(caseStudy => caseStudy.id === id);
  }
}
