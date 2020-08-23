import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from './material';
import { UserPanelRoutingModule } from './user-panel-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecetasComponent } from './recetas/recetas.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AmigosComponent } from './amigos/amigos.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { RecetaCrearComponent } from './receta-crear/receta-crear.component';


@NgModule({
  declarations: [
    LayoutComponent,
    PerfilComponent,
    RecetasComponent,
    SidebarComponent,
    HeaderComponent,
    AmigosComponent,
    NovedadesComponent,
    ConfiguracionComponent,
    RecetaCrearComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    UserPanelRoutingModule
  ]
})
export class UserPanelModule { }
