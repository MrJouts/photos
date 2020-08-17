import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './components/recetas/recetas.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { RecetaComponent } from './components/receta/receta.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "recetas", component: RecetasComponent },
  { path: "categorias", component: CategoriasComponent },
  { path: "receta", component: RecetaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
