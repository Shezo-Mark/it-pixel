import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isAllCase: boolean = true;
  projectLinks: boolean = false;
  Subject: string = '';
  // Define filter options
  filterOptions = [
    { name: 'All Case Studies', subject: '' },
    { name: 'Html & Css', subject: 'Html' },
    { name: 'Scss & Sass', subject: 'Sass' },
    { name: 'Less', subject: 'Less' },
    { name: 'Bootstrap', subject: 'Bootstrap' },
    { name: 'Tailwind Css', subject: 'Tailwind' },
    { name: 'Bulma Css', subject: 'Bulma' },
    { name: 'Php MySql', subject: 'Php' },
    { name: 'Laravel', subject: 'Laravel' },
    { name: 'Angular', subject: 'Angular' },
    { name: 'Wix', subject: 'Wix' },
    { name: 'Ui/Ux', subject: 'Ui' },
    { name: 'WebFlow', subject: 'WebFlow' },
    { name: 'Wordpress', subject: 'Wordpress' },
    { name: 'Wordpress Builders', subject: 'Custom_Theme' },
    { name: 'Wordpress Custom Theme Development', subject: 'Theme_Development' },
    { name: 'Wordpress Theme Customization', subject: 'Theme_Customization' }
  ];
  // Define project data
  projects = [
    { subject: 'Html', title: 'Html Here', image: 'assets/images/site-images/project-1.jpg' },
    { subject: 'Sass', title: 'Sass Here', image: 'assets/images/site-images/project-2.jpg' },
    { subject: 'Tailwind', title: 'Tailwind Here', image: 'assets/images/site-images/project-3.jpg' },
    { subject: 'Bulma', title: 'Bulma Here', image: 'assets/images/site-images/project-4.jpg' },
    { subject: 'Bootstrap', title: 'Bootstrap Here', image: 'assets/images/site-images/project-5.jpg' },
    { subject: 'Ui', title: 'Ui/Ux Here', image: 'assets/images/site-images/project-6.jpg' },
    { subject: 'Less', title: 'Less Here', image: 'assets/images/site-images/project-7.jpg' },
    { subject: 'Php', title: 'Php Here', image: 'assets/images/site-images/project-8.jpg' },
    { subject: 'Laravel', title: 'Laravel Here', image: 'assets/images/site-images/project-9.jpg' },
    { subject: 'Angular', title: 'Angular Here', image: 'assets/images/site-images/project-10.jpg' },
    { subject: 'Wix', title: 'Wix Here', image: 'assets/images/site-images/project-11.jpg' },
    { subject: 'WebFlow', title: 'WebFlow Here', image: 'assets/images/site-images/project-12.jpg' },
    { subject: 'Wordpress', title: 'Wordpress Here', image: 'assets/images/site-images/project-13.jpg' },
    { subject: 'Custom_Theme', title: 'Custom_Theme Here', image: 'assets/images/site-images/project-14.png' },
    { subject: 'Theme_Development', title: 'Theme_Development Here', image: 'assets/images/site-images/project-15.jpg' },
    { subject: 'Theme_Customization', title: 'Theme_Customization Here', image: 'assets/images/site-images/project-16.jpg' },
    { subject: 'Wordpress', title: 'Wordpress Here', image: 'assets/images/site-images/project-17.jpg' },
    { subject: 'Angular', title: 'Angular Here', image: 'assets/images/site-images/project-18.jpg' },
    { subject: 'Angular', title: 'Angular Here', image: 'assets/images/site-images/project-19.jpg' },
    { subject: 'Theme_Customization', title: 'Theme_Customization Here', image: 'assets/images/site-images/project-20.jpg' },
    { subject: 'Theme_Customization', title: 'Theme_Customization Here', image: 'assets/images/site-images/project-21.jpg' },
    { subject: 'Theme_Customization', title: 'Theme_Customization Here', image: 'assets/images/site-images/project-22.jpg' }
  ];
  filterProject(isAllCase: boolean, subject: string) {
    if (isAllCase) {
      return this.projects;
    }
    return this.projects.filter(project => project.subject === subject);
  }

}
