import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-d-header',
  templateUrl: './d-header.component.html',
  styleUrls: ['./d-header.component.scss']
})
export class DHeaderComponent {
  AsideToggler = false;
  @Output() asideToggled = new EventEmitter<boolean>();
  toggleAside(): void {
    this.AsideToggler = this.AsideToggler ? false : true ;
    this.asideToggled.emit(this.AsideToggler);  // Emit event when button is clicked
  }
}
