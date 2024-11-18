import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent {
  card: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    // Accessing the state passed from the previous route
    this.card = history.state;  // 'history.state' contains the state passed during navigation

    // You can check if tabContent is null in case there is no state
    if (!this.card) {
      console.log("No state was passed.");
    }
  }
  // cardId!: number;
  // card: any;

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.cardId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.card = this.getCardDetails(this.cardId);
  //   //
  // }

  // getCardDetails(id: number) {
  //   // This would typically come from a service
  //   const cards = [
  //     { id: 1, title: 'Card 1 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-1.jpg' },
  //     { id: 2, title: 'Card 2 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-2.jpg' },
  //     { id: 3, title: 'Card 3 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-3.jpg' },
  //     { id: 4, title: 'Card 4 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-4.jpg' },
  //     { id: 5, title: 'Card 5 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-5.jpg' },
  //     { id: 6, title: 'Card 6 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-6.jpg' },
  //     { id: 7, title: 'Card 7 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-7.jpg' },
  //     { id: 8, title: 'Card 8 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-8.jpg' },
  //     { id: 9, title: 'Card 9 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-9.jpg' },
  //     { id: 10, title: 'Card 10 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-10.jpg' },
  //     { id: 11, title: 'Card 11 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-11.jpg' },
  //     { id: 12, title: 'Card 12 Title', text: 'Some quick example text...', imgSrc: '../../../../assets/images/site-images/project-12.jpg' }
  //   ];


  //   return cards.find(card => card.id === id);
  // }
}
