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
import { ProjectsComponent } from './shared/projects/projects.component';
import { ClientSliderComponent } from './shared/client-slider/client-slider.component';
import { DevelopmentProcessComponent } from './shared/development-process/development-process.component';
import { CaseStudyDetailsComponent } from './components/case-study-details/case-study-details.component';
import { WhyChooseUsComponent } from './shared/why-choose-us/why-choose-us.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestimonialsComponent } from './shared/testimonials/testimonials.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FormsModule } from '@angular/forms';
import { OtherServicesComponent } from './shared/other-services/other-services.component';
import { SearchEngineOptComponent } from './components/search-engine-opt/search-engine-opt.component';
import { AccordiansComponent } from './shared/accordians/accordians.component';
import { PaidSearchComponent } from './components/paid-search/paid-search.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogComponent } from './shared/blog/blog.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ServicesComponent } from './shared/services/services.component';
import { BannerSectionTwoComponent } from './shared/banner-section-two/banner-section-two.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';



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
    ProjectsComponent,
    ClientSliderComponent,
    DevelopmentProcessComponent,
    CaseStudiesComponent,
    CaseStudyDetailsComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    BlogsComponent,
    OtherServicesComponent,
    SearchEngineOptComponent,
    AccordiansComponent,
    PaidSearchComponent,
    BlogComponent,
    BlogDetailsComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    BannerSectionTwoComponent,
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    WebFilesRoutingModule,
    CarouselModule,
    FormsModule
  ]
})
export class WebFilesModule { }
