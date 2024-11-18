import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accordians',
  templateUrl: './accordians.component.html',
  styleUrls: ['./accordians.component.scss']
})
export class AccordiansComponent {
  accordionItems: any[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.setAccordionItems();

    // You can subscribe to route changes if needed
    this.router.events.subscribe(() => {
      this.setAccordionItems();  // Update accordion content based on the route
    });
  }

  setAccordionItems(): void {
    const route = this.activatedRoute.snapshot.routeConfig?.path;

    switch(route) {
      case 'seo':
        this.accordionItems = [
          { id: 2, title: '1. 93% Of Experiences Had Online Start with a Search Engine', expanded: true,
            body: [
              {
                id:1, descrption: 'Let that sink in. 93% of ALL online experiences take place first on a search engine. Can your business afford to lose out on being in front of 93% of the market online?'
              },
            ]

        },
          { id: 3, title: '2. Google Has a Firm Grip on Over 90% of the Search Market', expanded: false,
            body:
            [
              {id:1, descrption: 'When it comes to appeasing a master, Google is the one we all answer to. With over 90% of the search market and with 93% of all online experiences happening on a search engine, having top rankings on Google has never been as important for the sustainability and growth of a business than it is today.'},
            ]
          },
          { id: 4, title: '3. 75% of People NEVER Scroll Past the First Page of Google', expanded: false,
            body:
            [
              {id:1, descrption: 'If you’re not on page #1, you’re already losing out on 75% of potential sales going to your competitors who are no doubt investing into making sure you stay out of sight and out of mine.'},
            ]
          },
        ];
        break;
      case 'paid-search':
        this.accordionItems = [
          { id: 1, title: 'Content Strategy', expanded: true, body: 'Details about content strategy.' },
          { id: 2, title: 'Content Creation', expanded: false, body: 'Details about content creation.' },
          { id: 3, title: 'Content Distribution', expanded: false, body: 'Details about content distribution.' }
        ];
        break;
      default:
        this.accordionItems = [
          { id: 1, title: 'Default Item 1', expanded: true, body: 'Default content.' },
          { id: 2, title: 'Default Item 2', expanded: false, body: 'Default content.' },
          { id: 3, title: 'Default Item 3', expanded: false, body: 'Default content.' }
        ];
        break;
    }
  }
}
