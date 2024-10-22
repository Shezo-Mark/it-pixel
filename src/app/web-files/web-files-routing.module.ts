import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebFilesComponent } from './web-files.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './shared/services/services.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { CaseStudiesComponent } from './shared/case-studies/case-studies.component';
import { CaseStudyDetailsComponent } from './components/case-study-details/case-study-details.component';



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
      path:'services',
      component:ServicesComponent,
    },
    {
      path:'services-details/:id',
      component: ServicesDetailsComponent,
    },
    { 
      path: 'case-study', 
      component: CaseStudiesComponent 
    },
    { 
      path: 'case-study-details/:id', 
      component: CaseStudyDetailsComponent 
    }, 
    
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebFilesRoutingModule { }
