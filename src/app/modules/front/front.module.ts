import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from './material';
import { FrontRoutingModule } from './front-routing-module';

import { HomeComponent } from './home/home.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RecetaComponent } from './receta/receta.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    HomeComponent,
    RecetasComponent,
    RecetaComponent,
    CategoriasComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
