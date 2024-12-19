import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardComponent } from './dashboard.component';
import { DHeaderComponent } from './shared/d-header/d-header.component';
import { DFooterComponent } from './shared/d-footer/d-footer.component';
import { DHomeComponent } from './components/d-home/d-home.component';
import { DAsideComponent } from './shared/d-aside/d-aside.component';
import { PagesComponent } from './components/pages/pages.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DHeaderComponent,
    DFooterComponent,
    DHomeComponent,
    DAsideComponent,
    PagesComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CarouselModule
  ]
})
export class DashboardModule { }
