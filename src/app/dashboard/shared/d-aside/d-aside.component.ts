import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-d-aside',
  templateUrl: './d-aside.component.html',
  styleUrls: ['./d-aside.component.scss']
})
export class DAsideComponent {
  isToggled = false;

  constructor(private toggleClass: SharedServiceService) {}

  ngOnInit(): void {
    this.toggleClass.toggleClass$.subscribe(toggle => {
      this.isToggled = toggle;
    });
  }
}
