import { Injectable } from '@angular/core';
import { RECETAS } from '../mocks/recetas-mock';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  recetasCollection: AngularFirestoreCollection;
  recetas: Observable<any[]>;
  receta: Observable<any>;
  recetaDoc: AngularFirestoreDocument;

  constructor(private db: AngularFirestore) {
    this.recetasCollection = this.db.collection('recetas');
    this.recetas = this.recetasCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  getAll() {
    return this.recetas;
  }

  addReceta(receta) {
    this.recetasCollection.add(receta);
  }

  updateReceta(receta) {
    this.recetaDoc = this.db.doc(`recetas/${receta.id}`);

    this.recetaDoc.update(receta);
  }

  deleteReceta(receta) {
    this.recetaDoc = this.db.doc(`recetas/${receta.id}`);
    this.recetaDoc.delete();
  }

  getRecetaById(id) {
    this.recetaDoc = this.db.doc<any>(`recetas/${id}`);
    return this.receta = this.recetaDoc.valueChanges();
  }

  setLocal(item) {
    localStorage.setItem('cook-app-recetas', JSON.stringify(item))
  }

}
