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
  filterText:string='Filter Project By Category';
  searchText: string = '';
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
    { subject: 'Html', id: '1', title: 'Successfundtrader', image: 'assets/images/projects/Successfundtrader.jpg', ProjectImageDetails: 'assets/images/projects/Successfundtrader-d.jpg'},

    { subject: 'Html', id: '2', title: 'The Runner', image: 'assets/images/projects/the-runner.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg', },
    { subject: 'Sass', id: '3', title: 'Sass Here', image: 'assets/images/site-images/project-2.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg'},


    { subject: 'Sass', id: '4', title: 'Top10pokersites', image: 'assets/images/projects/Top10pokersites.jpg', ProjectImageDetails: 'assets/images/projects/Top10pokersites-d.jpg',},
    { subject: 'Tailwind', id: '5', title: 'Tailwind Here', image: 'assets/images/site-images/project-3.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg'},
    { subject: 'Tailwind', id: '6', title: 'Zoplenti', image: 'assets/images/projects/Zoplenti.jpg', ProjectImageDetails: 'assets/images/projects/Zoplenti-d.jpg',},


    { subject: 'Bulma', id: '7', title: 'Bulma Here', image: 'assets/images/site-images/project-4.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Bootstrap', id: '8', title: 'Bootstrap Here', image: 'assets/images/site-images/project-5.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Ui', id: '9', title: 'Ui/Ux Here', image: 'assets/images/site-images/project-6.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Less', id: '10', title: 'Less Here', image: 'assets/images/site-images/project-7.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Php', id: '1', title: 'Php Here', image: 'assets/images/site-images/project-8.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Laravel', id: '1', title: 'Laravel Here', image: 'assets/images/site-images/project-9.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Angular', id: '1', title: 'Angular Here', image: 'assets/images/site-images/project-10.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Wix', id: '1', title: 'Wix Here', image: 'assets/images/site-images/project-11.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'WebFlow', id: '1', title: 'WebFlow Here', image: 'assets/images/site-images/project-12.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Wordpress', id: '1', title: 'Wordpress Here', image: 'assets/images/site-images/project-13.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Custom_Theme', id: '1', title: 'Custom_Theme Here', image: 'assets/images/site-images/project-14.png', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Theme_Development', id: '1', title: 'Theme_Development Here', image: 'assets/images/site-images/project-15.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Theme_Customization', id: '1', title: 'Theme_Customization Here', image: 'assets/images/site-images/project-16.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Wordpress', id: '1', title: 'Wordpress Here', image: 'assets/images/site-images/project-17.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Angular', id: '1', title: 'Angular Here', image: 'assets/images/site-images/project-18.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Angular', id: '1', title: 'Angular Here', image: 'assets/images/site-images/project-19.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Theme_Customization', id: '1', title: 'Theme_Customization Here', image: 'assets/images/site-images/project-20.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Theme_Customization', id: '1', title: 'Theme_Customization Here', image: 'assets/images/site-images/project-21.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',},
    { subject: 'Theme_Customization', id: '1', title: 'Theme_Customization Here', image: 'assets/images/site-images/project-22.jpg', ProjectImageDetails: 'assets/images/projects/the-runner-d.jpg',}
  ];
  filterProject(isAllCase: boolean, subject: string) {
    if (isAllCase) {
      return this.projects;
    }
    return this.projects.filter(project => project.subject === subject);
  }

}
