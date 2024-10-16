import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent {
  cardId!: number;
  card: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cardId = Number(this.route.snapshot.paramMap.get('id'));
    this.card = this.getCardDetails(this.cardId);
    // debugger;
  }

  getCardDetails(id: number) {
    // This would typically come from a service
    const cards = [
      { id: 1, title: 'Card 1 Title', text: 'Card 1 full content...', imgSrc: '../../../../assets/images/site-images/about.jpg' },
      { id: 2, title: 'Card 2 Title', text: 'Card 2 full content...', imgSrc: '../../../../assets/images/site-images/about.jpg' },
      { id: 3, title: 'Card 3 Title', text: 'Card 3 full content...', imgSrc: '../../../../assets/images/site-images/about.jpg' },
      { id: 4, title: 'Card 4 Title', text: 'Card 4 full content...', imgSrc: '../../../../assets/images/site-images/about.jpg' },
      { id: 5, title: 'Card 5 Title', text: 'Card 5 full content...', imgSrc: '../../../../assets/images/site-images/about.jpg' }
    ];

    return cards.find(card => card.id === id);
  }
}
