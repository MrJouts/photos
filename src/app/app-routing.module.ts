import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/front/front.module').then(m => m.FrontModule)
  },
  {
    path: 'panel',
    loadChildren: () => import('./modules/user-panel/user-panel.module').then(m => m.UserPanelModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
