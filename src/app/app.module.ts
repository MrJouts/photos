import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material';

import { HeaderComponent } from './components/header/header.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RecetaComponent } from './components/receta/receta.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommentsPipe } from './pipes/comments.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { GdmFormatPipe } from './pipes/gdm-format.pipe';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasComponent,
    RecetaComponent,
    CategoriasComponent,
    HomeComponent,
    FooterComponent,
    CommentsPipe,
    SearchFilterPipe,
    GdmFormatPipe,
    LocalDatePipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
