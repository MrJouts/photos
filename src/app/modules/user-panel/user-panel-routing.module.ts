import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: '', component: PerfilComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule { }
