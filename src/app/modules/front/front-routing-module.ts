import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecetasComponent } from './recetas/recetas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { RecetaComponent } from './receta/receta.component';
import { RegistroComponent } from './registro/registro.component';
import { LayoutComponent } from './layout/layout.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [{
    path: '', component: LayoutComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: "recetas", component: RecetasComponent },
        { path: "receta/:id", component: RecetaComponent },
        { path: "categorias", component: CategoriasComponent },
        { path: "login", component: LoginComponent },
        { path: "registro", component: RegistroComponent },
        { path: "table", component: TableComponent },
    ]
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontRoutingModule { }