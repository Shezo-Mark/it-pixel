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

    { subject: 'Html', id: '2', title: 'Penrose', image: 'assets/images/projects/Penrose.jpg', ProjectImageDetails: 'assets/images/projects/Penrose-d.jpg', },
    { subject: 'Sass', id: '3', title: 'Fastpitch', image: 'assets/images/projects/Fastpitch.jpg', ProjectImageDetails: 'assets/images/projects/Fastpitch-d.jpg'},


    { subject: 'Sass', id: '4', title: 'Top10pokersites', image: 'assets/images/projects/Top10pokersites.jpg', ProjectImageDetails: 'assets/images/projects/Top10pokersites-d.jpg',},
    { subject: 'Tailwind', id: '5', title: 'eNeighbr - Courier', image: 'assets/images/projects/eNeighbr - Courier.jpg', ProjectImageDetails: 'assets/images/projects/eNeighbr - Courier-d.jpg'},
    { subject: 'Tailwind', id: '6', title: 'Zoplenti', image: 'assets/images/projects/Zoplenti.jpg', ProjectImageDetails: 'assets/images/projects/Zoplenti-d.jpg',},


    { subject: 'Bulma', id: '7', title: 'Bean - Financial Management', image: 'assets/images/projects/Bean - Financial Management.jpg', ProjectImageDetails: 'assets/images/projects/Bean - Financial Management-d.jpg',},
    { subject: 'Bootstrap', id: '8', title: 'Revr - Residencial investment market', image: 'assets/images/projects/Revr - Residencial investment market.png', ProjectImageDetails: 'assets/images/projects/Revr - Residencial investment market-d.png',},
    { subject: 'Ui', id: '9', title: 'Greeking', image: 'assets/images/projects/Greeking.jpg', ProjectImageDetails: 'assets/images/projects/Greeking-d.jpg',},
    { subject: 'Less', id: '10', title: 'Renno', image: 'assets/images/projects/Renno.jpg', ProjectImageDetails: 'assets/images/projects/Renno-d.jpg',},
    { subject: 'Php', id: '11', title: 'Milena Dubs', image: 'assets/images/projects/Milena Dubs.png', ProjectImageDetails: 'assets/images/projects/Milena Dubs-d.png',},
    { subject: 'Laravel', id: '12', title: 'Dispatch.d - Logistics', image: 'assets/images/projects/Dispatch.d - Logistics.png', ProjectImageDetails: 'assets/images/projects/Dispatch.d - Logistics-d.jpg',},
    { subject: 'Angular', id: '13', title: 'InAppChat - API', image: 'assets/images/projects/InAppChat - API.png', ProjectImageDetails: 'assets/images/projects/InAppChat - API-d.jpg',},
    { subject: 'Wix', id: '14', title: 'ALT - Advanced Lipedema Treatment', image: 'assets/images/projects/ALT - Advanced Lipedema Treatment.png', ProjectImageDetails: 'assets/images/projects/ALT - Advanced Lipedema Treatment-d.png',},
    { subject: 'WebFlow', id: '15', title: 'BOA - Chat & Tasks', image: 'assets/images/projects/BOA - Chat & Tasks.png', ProjectImageDetails: 'assets/images/projects/BOA - Chat & Tasks-d.jpg',},
    { subject: 'Wordpress', id: '16', title: 'Zada - Cryptocurrency & Blockchain', image: 'assets/images/projects/Zada - Cryptocurrency & Blockchain.png', ProjectImageDetails: 'assets/images/projects/Zada - Cryptocurrency & Blockchain-d.jpeg',},
    { subject: 'Custom_Theme', id: '17', title: 'ExpoParis - Art & Exhibitions', image: 'assets/images/projects/ExpoParis - Art & Exhibitions.png', ProjectImageDetails: 'assets/images/projects/ExpoParis - Art & Exhibitions-d.jpg',},
    { subject: 'Theme_Development', id: '18', title: 'Panacea - Cryptocurrency Wallet', image: 'assets/images/projects/Panacea - Cryptocurrency Wallet.jpg', ProjectImageDetails: 'assets/images/projects/Panacea - Cryptocurrency Wallet-d.jpg',},
    { subject: 'Theme_Customization', id: '19', title: 'Grow Online - Ad Platform', image: 'assets/images/projects/Grow Online - Ad Platform.png', ProjectImageDetails: 'assets/images/projects/Grow Online - Ad Platform-d.jpg',},
    { subject: 'Wordpress', id: '20', title: 'REN - Message Manager', image: 'assets/images/projects/REN - Message Manager.png', ProjectImageDetails: 'assets/images/projects/REN - Message Manager-d.jpg',},
    { subject: 'Angular', id: '21', title: 'Hyyer Creative - Creative Agency', image: 'assets/images/projects/Hyyer Creative - Creative Agency.jpg', ProjectImageDetails: 'assets/images/projects/Hyyer Creative - Creative Agency-d.jpg',},
    { subject: 'Angular', id: '22', title: 'First Phase Media - Investments', image: 'assets/images/projects/First Phase Media - Investments.png', ProjectImageDetails: 'assets/images/projects/First Phase Media - Investments-d.jpg',},
    { subject: 'Theme_Customization', id: '23', title: 'TrueNAS - Software & Devices', image: 'assets/images/projects/TrueNAS - Software & Devices.png', ProjectImageDetails: 'assets/images/projects/TrueNAS - Software & Devices-d.jpg',},
    { subject: 'Theme_Customization', id: '24', title: 'Muso.ai - AI for Spotify', image: 'assets/images/projects/Muso.ai - AI for Spotify.png', ProjectImageDetails: 'assets/images/projects/Muso.ai - AI for Spotify-d.jpg',},
    { subject: 'Theme_Customization', id: '25', title: 'Neutrl - Environmental Sustainability', image: 'assets/images/projects/Neutrl - Environmental Sustainability.png', ProjectImageDetails: 'assets/images/projects/Neutrl - Environmental Sustainability-d.jpg',}
  ];
  filterProject(isAllCase: boolean, subject: string) {
    if (isAllCase) {
      return this.projects;
    }
    return this.projects.filter(project => project.subject === subject);
  }

}
