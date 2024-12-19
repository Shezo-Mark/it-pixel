import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PagesComponent } from './components/pages/pages.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {path:'pages', component: PagesComponent},
      {path:'posts', component: PostComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
