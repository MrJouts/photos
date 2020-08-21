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


@NgModule({
  declarations: [
    LayoutComponent,
    PerfilComponent,
    RecetasComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    UserPanelRoutingModule
  ]
})
export class UserPanelModule { }
