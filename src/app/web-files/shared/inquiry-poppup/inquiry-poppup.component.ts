import { Component } from '@angular/core';

@Component({
  selector: 'app-inquiry-poppup',
  templateUrl: './inquiry-poppup.component.html',
  styleUrls: ['./inquiry-poppup.component.scss']
})
export class InquiryPoppupComponent {
  isModalShow: boolean = false;
  ngOnInit(): void {
    this.isModalShow = false;
  }
  closeModal(): void {
    this.isModalShow = false;
  }
}
