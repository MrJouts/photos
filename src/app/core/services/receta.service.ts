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


  getFireBase() {
    return this.recetas;
  }

  addReceta(receta) {
    this.recetasCollection.add(receta);
  }

  updReceta(receta) {
    this.recetaDoc = this.db.doc(`recetas/${receta.id}`);

    this.recetaDoc.update(receta);
  }

  getByIdFire(id) {
    console.log('id r', id)
    // return this.recetasCollection.doc(id).snapshotChanges();

    this.recetaDoc = this.db.doc<any>(`recetas/${id}`);
    return this.receta = this.recetaDoc.valueChanges();

    this.recetaDoc = this.db.doc(`recetas/${id}`);
    return this.recetaDoc.valueChanges();
  }


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

    // console.log(id)
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

    // console.log('recestas', recetas)

    this.setLocal(recetas)

  }
}
