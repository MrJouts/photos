import { Injectable } from '@angular/core';
import { RECETAS } from '../mocks/recetas-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor() { }

  getAll() {
    return of(RECETAS);
  }

  getById(id) {
    console.log('receta', RECETAS.find(receta => receta.id == id))
    return RECETAS.find(receta => receta.id == id);
  }
}
