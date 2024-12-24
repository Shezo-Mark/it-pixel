import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  project:any;
  constructor(){
    debugger
    this.project = history.state;
    if (!this.project) {
      console.log("No state was passed.");
    }
  }
}
