import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import Isotope from 'isotope-layout';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent  implements AfterViewInit, OnDestroy{
  private isotope!: Isotope;
  isChecked: boolean = false;

  toggleCheck() {
    this.isChecked = !this.isChecked;
  }
  ngAfterViewInit() {
    // Initialize Isotope after the view has been initialized
    this.isotope = new Isotope('.grid', {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows', // You can choose different layout modes
    });
  }

  ngOnDestroy() {
    // Clean up Isotope instance when the component is destroyed
    this.isotope.destroy();
  }

  filterItems(filter: string) {
    this.isotope.arrange({ filter: filter });
  }


}
