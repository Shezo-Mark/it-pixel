import { Component, HostListener   } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  is_loading = false;
  isVisible = false;
  headerClass: string = '';

  constructor() {
    this.is_loading = true;
    setTimeout(() => {
      this.is_loading = false;
    }, 1000);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll: number = window.pageYOffset;
    const toggleClass = 'is-active';

    if (currentScroll > 75) {
      this.headerClass = toggleClass;
      this.isVisible = true;
    } else {
      this.headerClass = '';
      this.isVisible = false;
    }
  }

  scrollToTop() {
    const scrollStep = -window.scrollY / (500 / 15); // Adjust duration here (500 ms)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
}
