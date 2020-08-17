import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './components/recetas/recetas.component';

const routes: Routes = [
  { path: "", component: RecetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
