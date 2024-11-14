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
          { id: 1, title: 'SEO Strategy', expanded: true, body: 'Details about SEO strategy.' },
          { id: 2, title: 'Keyword Research', expanded: false, body: 'Details about keyword research.' },
          { id: 3, title: 'On-page SEO', expanded: false, body: 'Details about on-page SEO.' }
        ];
        break;
      case 'content-marketing':
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
