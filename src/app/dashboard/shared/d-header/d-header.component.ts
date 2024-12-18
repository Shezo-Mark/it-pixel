import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-d-header',
  templateUrl: './d-header.component.html',
  styleUrls: ['./d-header.component.scss']
})
export class DHeaderComponent {
  isToggled = false;
  constructor(private toggleclass: SharedServiceService) {}
  toggleAside(): void {
    this.toggleclass.toggleAsideClass();
  }
  ngOnInit(): void {
    this.toggleclass.toggleClass$.subscribe(toggle => {
      this.isToggled = toggle;
    });
  }
}
