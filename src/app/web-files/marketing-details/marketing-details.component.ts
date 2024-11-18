import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marketing-details',
  templateUrl: './marketing-details.component.html',
  styleUrls: ['./marketing-details.component.scss']
})
export class MarketingDetailsComponent {
  tabContent: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Accessing the state passed from the previous route
    this.tabContent = history.state;  // 'history.state' contains the state passed during navigation

    // You can check if tabContent is null in case there is no state
    if (!this.tabContent) {
      console.log("No state was passed.");
    }
  }
}
