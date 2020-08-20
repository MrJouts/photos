import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './components/recetas/recetas.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { RecetaComponent } from './components/receta/receta.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "recetas", component: RecetasComponent },
  { path: "categorias", component: CategoriasComponent },
  { path: "receta/:id", component: RecetaComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
