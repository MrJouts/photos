import { Injectable } from '@angular/core';
import { RECETAS } from '../mocks/recetas-mock';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor() { }

  getLocal(item) {
    return JSON.parse(localStorage.getItem(item));
  }

  setLocal(place, item) {
    localStorage.setItem(place, JSON.stringify(item))
  }

  getAll() {
    if (!this.getLocal('cook-app-recetas')) {
      this.setLocal('cook-app-recetas', RECETAS);
      return of(RECETAS);
    } else {
      return of(this.getLocal('cook-app-recetas'));
    }
  }

  getById(id) {
    let recetas = this.getLocal('cook-app-recetas');

    console.log(id)
    return recetas.find(receta => receta.id == id);
  }

  createReceta(newReceta) {
    let recetas = this.getLocal('cook-app-recetas')
    newReceta.id = uuidv4();
    recetas.push(newReceta);
    this.setLocal('cook-app-recetas', recetas);
  }
}
