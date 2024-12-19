import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isAsideActive: boolean = false;

  // Listen to the event from header component and update aside state
  toggleAsideState(isActive: boolean): void {
    this.isAsideActive = isActive;
  }
}
