import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './components/recetas/recetas.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "recetas", component: RecetasComponent },
  { path: "categorias", component: CategoriasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
