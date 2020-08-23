import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecetasComponent } from './recetas/recetas.component';
import { AmigosComponent } from './amigos/amigos.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { RecetaCrearComponent } from './receta-crear/receta-crear.component';
import { RecetaEditarComponent } from './receta-editar/receta-editar.component';


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: 'perfil', component: PerfilComponent },
    { path: 'recetas', component: RecetasComponent },
    { path: 'recetas/crear', component: RecetaCrearComponent },
    { path: 'recetas/editar/:id', component: RecetaEditarComponent },
    { path: 'amigos', component: AmigosComponent },
    { path: 'novedades', component: NovedadesComponent },
    { path: 'configuracion', component: ConfiguracionComponent },
    { path: '', redirectTo: 'perfil', pathMatch: 'full' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule { }
