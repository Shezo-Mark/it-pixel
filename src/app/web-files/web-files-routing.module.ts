import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebFilesComponent } from './web-files.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CaseStudiesComponent } from './shared/case-studies/case-studies.component';
import { CaseStudyDetailsComponent } from './components/case-study-details/case-study-details.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SearchEngineOptComponent } from './components/search-engine-opt/search-engine-opt.component';
import { PaidSearchComponent } from './components/paid-search/paid-search.component';
import { BlogComponent } from './shared/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ServicesComponent } from './shared/services/services.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ReputationManagementComponent } from './components/reputation-management/reputation-management.component';
import { BrandingLogoComponent } from './components/branding-logo/branding-logo.component';
import { WebsiteHostingComponent } from './components/website-hosting/website-hosting.component';
import { WebSupportComponent } from './components/web-support/web-support.component';
import { LocalSeoComponent } from './components/local-seo/local-seo.component';



const routes: Routes = [
  {
    path:'',
    component:WebFilesComponent,
  children:[
    {
      path:'',
      component:HomeComponent,
    },
    {
      path:'home',
      component:HomeComponent,
    },
    {
      path:'contact',
      component:ContactComponent,
    },
    {
      path:'about',
      component:AboutComponent,
    },
    {
      path:'blog',
      component:BlogComponent,
    },
    {
      path:'blog-details/:id',
      component: BlogDetailsComponent,
    },
    {
      path: 'case-study',
      component: CaseStudiesComponent
    },
    {
      path: 'case-study-details/:id',
      component: CaseStudyDetailsComponent
    },
    {
      path: 'blogs',
      component: BlogsComponent
    },
    {
      path: 'seo',
      component: SearchEngineOptComponent
    },
    {
      path: 'paid-search',
      component: PaidSearchComponent
    },
    {
      path: 'services',
      component: ServicesComponent
    },
    {
      path: 'service-detail/:id',
      component: ServiceDetailsComponent
    },
    {
      path: 'social-media',
      component: SocialMediaComponent
    },
    {
      path: 'reputation-management',
      component: ReputationManagementComponent
    },
    {
      path: 'branding-logo',
      component: BrandingLogoComponent
    },
    {
      path: 'website-hosting',
      component: WebsiteHostingComponent
    },
    {
      path: 'web-support',
      component: WebSupportComponent
    },
    {
      path: 'local-seo',
      component: LocalSeoComponent
    },


  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebFilesRoutingModule { }
