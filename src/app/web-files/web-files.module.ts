import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebFilesRoutingModule } from './web-files-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WebFilesComponent } from './web-files.component';
import { BannerSectionComponent } from './shared/banner-section/banner-section.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ConsultationComponent } from './shared/consultation/consultation.component';
import { CaseStudiesComponent } from './shared/case-studies/case-studies.component';
import { ServicesComponent } from './shared/services/services.component';
import { ProjectsComponent } from './shared/projects/projects.component';
import { ClientSliderComponent } from './shared/client-slider/client-slider.component';
import { DevelopmentProcessComponent } from './shared/development-process/development-process.component';
import { MarketingFieldsComponent } from './shared/marketing-fields/marketing-fields.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { CaseStudyDetailsComponent } from './components/case-study-details/case-study-details.component';


@NgModule({
  declarations: [
    WebFilesComponent,
    BannerSectionComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ConsultationComponent,
    CaseStudiesComponent,
    ServicesComponent,
    ProjectsComponent,
    ClientSliderComponent,
    DevelopmentProcessComponent,
    MarketingFieldsComponent,
    ServicesDetailsComponent,
    CaseStudyDetailsComponent,
  ],
  imports: [
    CommonModule,
    WebFilesRoutingModule
  ]
})
export class WebFilesModule { }
