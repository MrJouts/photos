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
}
