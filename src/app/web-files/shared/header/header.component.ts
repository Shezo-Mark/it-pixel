import { Component  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  is_loading = false;
    constructor(){
      this.is_loading = true;
      setTimeout(() => {
        this.is_loading = false;
      }, 1000);
    }
}
