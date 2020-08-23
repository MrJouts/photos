import { Injectable } from '@angular/core';
import { RECETAS } from '../mocks/recetas-mock';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor() { }

  getLocal() {
    return JSON.parse(localStorage.getItem('cook-app-recetas'));
  }

  setLocal(item) {
    localStorage.setItem('cook-app-recetas', JSON.stringify(item))
  }

  getAll() {
    if (!this.getLocal()) {
      this.setLocal(RECETAS);
      return of(RECETAS);
    } else {
      return of(this.getLocal());
    }
  }

  getById(id) {
    let recetas = this.getLocal();

    console.log(id)
    return recetas.find(receta => receta.id == id);
  }

  createReceta(newReceta) {
    let recetas = this.getLocal()
    newReceta.id = uuidv4();
    recetas.push(newReceta);
    this.setLocal(recetas);
  }

  updateReceta(id, recetaData) {
    let recetas = this.getLocal();
    let objIndex = recetas.findIndex((receta => receta.id == id));

    //Update object's name property.
    recetas[objIndex] = recetaData
    recetas[objIndex].id = id

    console.log('recestas', recetas)

    this.setLocal(recetas)

  }
}
