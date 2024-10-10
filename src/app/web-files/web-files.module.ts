import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebFilesRoutingModule } from './web-files-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WebFilesComponent } from './web-files.component';
import { BannerSectionComponent } from './shared/banner-section/banner-section.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    WebFilesComponent,
    BannerSectionComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    WebFilesRoutingModule
  ]
})
export class WebFilesModule { }
