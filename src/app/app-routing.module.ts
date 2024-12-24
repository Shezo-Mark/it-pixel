import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./web-files/web-files.module').then((m) => m.WebFilesModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'web-files',
    loadChildren: () => import('./web-files/web-files.module').then((m) => m.WebFilesModule),
  },
];
//
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled', // Restores the scroll position to the top
      anchorScrolling: 'enabled', // Allows scrolling to anchors
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
