import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-d-aside',
  templateUrl: './d-aside.component.html',
  styleUrls: ['./d-aside.component.scss']
})
export class DAsideComponent {
 // Data structure for the dynamic aside menu
 activeDropdown: number | null = null;
 activeSubDropdown: number | null = null;
 @Input() isAsideActive: boolean = false;

 asideMenu = [
  {
    type: 'dropdown',
    label: 'Check Out',
    icon: 'fa-solid fa-link',
    is_Active: false,
    items: [
      { label: 'View Site', link: '#', is_Active: false, },
    ]
  },
  {
    type: 'link',
    label: 'Dashboard',
    icon: 'fa-solid fa-house',
    link: 'post',
    is_Active: false,
  },
  {
    type: 'link',
    label: 'Post',
    icon: 'fa-solid fa-signs-post',
    link: 'posts',
    is_Active: false,
  },
  {
    type: 'link',
    label: 'Pages',
    icon: 'fa-regular fa-file',
    link: 'pages',
    is_Active: false,
  },
  {
    type: 'dropdown',
    label: 'Users Rolls',
    icon: 'fa-solid fa-users',
    is_Active: false,
    items: [
      { label: 'Add New User', link: 'add-user',is_Active: false, },
      { label: 'Administrator', link: '#',is_Active: false, },
      { label: 'Users', link: '#',is_Active: false, }
    ]
  },
  {
    type: 'dropdown',
    label: 'Our Team',
    icon: 'fa-solid fa-people-group',
    is_Active: false,
    items: [
      { label: 'View Site', link: '#',is_Active: false, },
      { label: 'View Dashboard', link: '#',is_Active: false, }
    ]
  },
  {
    type: 'dropdown',
    label: 'Testimonials',
    icon: 'fa-solid fa-ranking-star',
    is_Active: false,
    items: [
      { label: 'View Site', link: '#',is_Active: false, },
      { label: 'View Dashboard', link: '#',is_Active: false, }
    ]
  },
];
// Toggle dropdown visibility
toggleDropdown(menu:any, index: number): void {
  // debugger
 // menu.is_Active= true;
 debugger
  this.asideMenu.forEach((m, i) => {
    m.is_Active = i === index; // Only set true for the clicked menu
  });
  // if(menu.type === 'dropdown'){
  //   this.activeDropdown = this.activeDropdown === index ? null : index;
  // }else{
  //   this.activeDropdown = this.activeDropdown === index ? index : index;

  // }
}
subItemToggle(menu: any, menuIndex: any,subItem: any, subItemIndex: any): void {
  // Iterate through all menus

  this.asideMenu.forEach((m, i) => {
    if (i === menuIndex) {
      // Activate the clicked menu
      m.is_Active = true;

      // Handle subitems within the active menu
      if (m.items) {
        m.items.forEach((s, si) => {
          // Activate the clicked subItem and deactivate others
          s.is_Active = si === subItemIndex;
        });
      }
    }
  });

  // Explicitly ensure the clicked menu and subItem are active
  //menu.is_Active = true;
  //subItem.is_Active = true;
}

}
