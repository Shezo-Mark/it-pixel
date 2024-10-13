import { Component, HostListener   } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  is_loading = false;
  headerClass: string = '';

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll: number = window.pageYOffset;
    const toggleClass = 'is-active';

    if (currentScroll > 75) {
      this.headerClass = toggleClass;
    } else {
      this.headerClass = '';
    }
  }

    constructor(){
      this.is_loading = true;
      setTimeout(() => {
        this.is_loading = false;
      }, 1000);
    }
}
