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
    { subject: 'Bulma', id: '7', title: 'Bean - Financial Management', image: 'assets/images/projects/Bean - Financial Management.jpg', ProjectImageDetails: 'assets/images/projects/Bean - Financial Management-d.jpg',},
    { subject: 'Bootstrap', id: '8', title: 'Revr - Residencial investment market', image: 'assets/images/projects/Revr - Residencial investment market.png', ProjectImageDetails: 'assets/images/projects/Revr - Residencial investment market-d.png',},
    { subject: 'Bootstrap', id: '9', title: 'Greeking', image: 'assets/images/projects/Greeking.jpg', ProjectImageDetails: 'assets/images/projects/Greeking-d.jpg',},
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
    // need to be change the tabs
    { subject: 'Sass', id: '23', title: 'TrueNAS - Software & Devices', image: 'assets/images/projects/TrueNAS - Software & Devices.png', ProjectImageDetails: 'assets/images/projects/TrueNAS - Software & Devices-d.jpg',},
    { subject: 'Sass', id: '24', title: 'Muso.ai - AI for Spotify', image: 'assets/images/projects/Muso.ai - AI for Spotify.png', ProjectImageDetails: 'assets/images/projects/Muso.ai - AI for Spotify-d.jpg',},
    { subject: 'Sass', id: '25', title: 'Neutrl - Environmental Sustainability', image: 'assets/images/projects/Neutrl - Environmental Sustainability.png', ProjectImageDetails: 'assets/images/projects/Neutrl - Environmental Sustainability-d.jpg',},
    { subject: 'Sass', id: '26', title: 'Backd - Cryptocurrencies & NFT', image: 'assets/images/projects/Backd - Cryptocurrencies & NFT.png', ProjectImageDetails: 'assets/images/projects/Backd - Cryptocurrencies & NFT-d.jpg',},
    { subject: 'Sass', id: '27', title: 'Erin - Job Search App', image: 'assets/images/projects/Erin - Job Search App.png', ProjectImageDetails: 'assets/images/projects/Erin - Job Search App-d.jpeg',},
    { subject: 'Sass', id: '28', title: 'Leosuva - Devices & Software', image: 'assets/images/projects/Leosuva - Devices & Software.png', ProjectImageDetails: 'assets/images/projects/Leosuva - Devices & Software-d.jpeg',},
    { subject: 'Sass', id: '29', title: 'EchoLimousine - Uber-like', image: 'assets/images/projects/EchoLimousine - Uber-like.png', ProjectImageDetails: 'assets/images/projects/EchoLimousine - Uber-like-d.jpg',},
    { subject: 'Sass', id: '30', title: 'Enlight - Educational Portal', image: 'assets/images/projects/Enlight - Educational Portal.png', ProjectImageDetails: 'assets/images/projects/Enlight - Educational Portal-d.jpg',},
    { subject: 'Sass', id: '31', title: 'FitFuel - Fitness & Healthcare', image: 'assets/images/projects/FitFuel - Fitness & Healthcare.png', ProjectImageDetails: 'assets/images/projects/FitFuel - Fitness & Healthcare-d.jpg',},
    { subject: 'Sass', id: '32', title: 'Luxsona - Beauty & Skincare', image: 'assets/images/projects/Luxsona - Beauty & Skincare.jpg', ProjectImageDetails: 'assets/images/projects/Luxsona - Beauty & Skincare-d.jpg',},
    { subject: 'Sass', id: '33', title: '.Fuse. - Network Management', image: 'assets/images/projects/.Fuse. - Network Management.png', ProjectImageDetails: 'assets/images/projects/.Fuse. - Network Management-d.jpg',},
    { subject: 'Bootstrap', id: '34', title: '4RX - Crypto Portfolio', image: 'assets/images/projects/4RX - Crypto Portfolio.png', ProjectImageDetails: 'assets/images/projects/4RX - Crypto Portfolio-d.jpeg',},
    { subject: 'Bootstrap', id: '35', title: 'T0urismo - Tourism & Flights', image: 'assets/images/projects/T0urismo - Tourism & Flights.png', ProjectImageDetails: 'assets/images/projects/T0urismo - Tourism & Flights-d.jpg',},
    { subject: 'Bootstrap', id: '36', title: 'Moonshot Academy - Education', image: 'assets/images/projects/Moonshot Academy - Education.jpg', ProjectImageDetails: 'assets/images/projects/Moonshot Academy - Education-d.jpg',},
    { subject: 'Bootstrap', id: '37', title: 'Hope&Go - Domain Hosting', image: 'assets/images/projects/Hope&Go - Domain Hosting.png', ProjectImageDetails: 'assets/images/projects/Hope&Go - Domain Hosting-d.jpg',},
    { subject: 'Bootstrap', id: '38', title: 'Shiba - Art Gallery', image: 'assets/images/projects/Shiba - Art Gallery.png', ProjectImageDetails: 'assets/images/projects/Shiba - Art Gallery-d.jpg',},
    { subject: 'Html', id: '39', title: 'Genius Media Group - Marketing & Creativity', image: 'assets/images/projects/Genius Media Group - Marketing & Creativity.jpg', ProjectImageDetails: 'assets/images/projects/Genius Media Group - Marketing & Creativity-d.jpg',},
    { subject: 'Html', id: '40', title: 'eNeighbr - Courier', image: 'assets/images/projects/eNeighbr - Courier.jpg', ProjectImageDetails: 'assets/images/projects/eNeighbr - Courier-d.jpg',},
    { subject: 'Html', id: '41', title: 'Acad. Sync - School Platform', image: 'assets/images/projects/Acad. Sync - School Platform.png', ProjectImageDetails: 'assets/images/projects/Acad. Sync - School Platform-d.jpg',},
    { subject: 'Html', id: '42', title: 'Dryve - Car Rental Platform', image: 'assets/images/projects/Dryve - Car Rental Platform.png', ProjectImageDetails: 'assets/images/projects/Dryve - Car Rental Platform-d.jpg',},
    { subject: 'Html', id: '43', title: 'Good Burger - Restaurant', image: 'assets/images/projects/Good Burger - Restaurant.jpg', ProjectImageDetails: 'assets/images/projects/Good Burger - Restaurant-d.jpg',},
    { subject: 'Html', id: '43', title: 'Pickapolicy - Insurances', image: 'assets/images/projects/Pickapolicy - Insurances.png', ProjectImageDetails: 'assets/images/projects/Pickapolicy - Insurances-d.jpg',},
    //  done need to changes below content are tabs
    { subject: 'Ui', id: '44', title: 'SimplyWise', image: 'assets/images/projects/ux/ux-1.jpg', ProjectImageDetails: 'assets/images/projects/ux/ux-d-1.jpg',},
    { subject: 'Ui', id: '45', title: 'Viirtue', image: 'assets/images/projects/ux/ux-2.jpg', ProjectImageDetails: 'assets/images/projects/ux/ux-d-2.jpg',},
    { subject: 'Ui', id: '46', title: 'We Make Websites', image: 'assets/images/projects/ux/ux-3.png', ProjectImageDetails: 'assets/images/projects/ux/ux-d-3.png',},
    { subject: 'Ui', id: '47', title: 'Pursuu - Flowcharts', image: 'assets/images/projects/ux/ux-4.png', ProjectImageDetails: 'assets/images/projects/ux/ux-d-4.png',},
    { subject: 'Ui', id: '48', title: 'H0celot (Step 1) - Data Management', image: 'assets/images/projects/ux/ux-5.png', ProjectImageDetails: 'assets/images/projects/ux/ux-d-5.jpg',},
    { subject: 'Ui', id: '49', title: 'Hocelot (Step 2) - Data Management', image: 'assets/images/projects/ux/ux-6.png', ProjectImageDetails: 'assets/images/projects/ux/ux-d-6.jpg',},
    { subject: 'Ui', id: '50', title: 'CTA', image: 'assets/images/projects/ux/ux-7.jpg', ProjectImageDetails: 'assets/images/projects/ux/ux-d-7.jpg',},
    { subject: 'Ui', id: '51', title: 'First CIass FIyer', image: 'assets/images/projects/ux/ux-8.jpg', ProjectImageDetails: 'assets/images/projects/ux/ux-d-8.jpg',},
    { subject: 'Ui', id: '52', title: 'Spark My Sport  (Flowchart) - Sports & Communication', image: 'assets/images/projects/ux/ux-9.png', ProjectImageDetails: 'assets/images/projects/ux/ux-d-9.png',},
    { subject: 'Ui', id: '53', title: 'Project U - Flowchart', image: 'assets/images/projects/ux/ux-10.png', ProjectImageDetails: 'assets/images/projects/ux/ux-d-10.jpg',},
    { subject: 'Ui', id: '54', title: 'Maj0r Brands - M0bile', image: 'assets/images/projects/ux/ux-11.png', ProjectImageDetails: 'assets/images/projects/ux/ux-d-11.jpg',},
    { subject: 'Ui', id: '55', title: 'Iuvo Platform', image: 'assets/images/projects/ux/ux-12.jpg', ProjectImageDetails: 'assets/images/projects/ux/ux-d-12.jpg',},
    { subject: 'Ui', id: '56', title: 'Construction Management - Mobile Wireframes', image: 'assets/images/projects/ux/ux-13.jpg', ProjectImageDetails: 'assets/images/projects/ux/ux-d-13.jpg',},
    { subject: 'Ui', id: '57', title: 'Zytara - Flowchart', image: 'assets/images/projects/ux/ux-14.png', ProjectImageDetails: 'assets/images/projects/ux/ux-d-14.png',},
    { subject: 'Ui', id: '58', title: 'Bl00my', image: 'assets/images/projects/ux/ux-15.jpg', ProjectImageDetails: 'assets/images/projects/ux/ux-d-15.jpg',},

  ];
  filterProject(isAllCase: boolean, subject: string) {
    if (isAllCase) {
      return this.projects;
    }
    return this.projects.filter(project => project.subject === subject);
  }

}
