import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-d-aside',
  templateUrl: './d-aside.component.html',
  styleUrls: ['./d-aside.component.scss']
})
export class DAsideComponent {
 // Data structure for the dynamic aside menu
 activeDropdown: number | null = null;

 @Input() isAsideActive: boolean = false;

 asideMenu = [
  {
    type: 'dropdown',
    label: 'Check Out',
    icon: 'fa-solid fa-link',
    items: [
      { label: 'View Site', link: '#' },
    ]
  },
  {
    type: 'link',
    label: 'Dashboard',
    icon: 'fa-solid fa-house',
    link: 'post'
  },
  {
    type: 'link',
    label: 'Post',
    icon: 'fa-solid fa-signs-post',
    link: 'posts'
  },
  {
    type: 'link',
    label: 'Pages',
    icon: 'fa-regular fa-file',
    link: 'pages'
  },
  {
    type: 'dropdown',
    label: 'Users Rolls',
    icon: 'fa-solid fa-users',
    items: [
      { label: 'Add New User', link: 'add-user' },
      { label: 'Administrator', link: '#' },
      { label: 'Users', link: '#' }
    ]
  },
  {
    type: 'dropdown',
    label: 'Our Team',
    icon: 'fa-solid fa-people-group',
    items: [
      { label: 'View Site', link: '#' },
      { label: 'View Dashboard', link: '#' }
    ]
  },
  {
    type: 'dropdown',
    label: 'Testimonials',
    icon: 'fa-solid fa-ranking-star',
    items: [
      { label: 'View Site', link: '#' },
      { label: 'View Dashboard', link: '#' }
    ]
  },
];
// Toggle dropdown visibility
toggleDropdown(index: number): void {
  this.activeDropdown = this.activeDropdown === index ? null : index;
}
}
