import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { RecetaService } from '@core/services/receta.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-receta-form',
  templateUrl: './receta-form.component.html',
  styleUrls: ['./receta-form.component.scss']
})
export class RecetaFormComponent implements OnInit {
  @Input() id: any;
  receta;
  recetaForm: FormGroup;

  dificultadList: any[] = ['facil', 'intermedia', 'dificil'];
  porcionesList: any[] = [1, 2, 3, 4];

  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recetaService: RecetaService,
    private fb: FormBuilder,
    private renderer: Renderer2,
    private storage: AngularFireStorage,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.recetaForm = this.fb.group({
      title: [''],
      description: [''],
      dificultad: ['intermedia'],
      porciones: [2],
      ingredientes: new FormArray([])
    });



    this.loadIngredientes(2);

    if (this.id) {
      this.getReceta()
    }
  }

  getReceta() {
    this.recetaService.getRecetaById(this.id).subscribe(receta => {
      this.receta = receta
      this.setForm()
    })
  }

  setForm() {
    this.recetaForm = this.fb.group({
      title: [this.receta.title],
      description: [this.receta.description],
      dificultad: [this.receta.dificultad],
      porciones: [this.receta.porciones],
      ingredientes: new FormArray([])
    });

    if (this.receta.ingredientes) {
      for (let i = 0; i < this.receta.ingredientes.length; i++) {
        this.t.push(
          this.fb.group({
            ingrediente: this.receta.ingredientes[i].ingrediente
          })
        )
      }
    } else {

      this.loadIngredientes(2);
    }
  }

  loadIngredientes(x) {
    while (x) {
      this.t.push(
        this.fb.group({
          ingrediente: ''
        })
      )
      x--;
    }
  }

  onSubmit(e) {
    console.log(this.recetaForm.value);

    if (!this.id) {
      // this.recetaService.createReceta(this.recetaForm.value);
      this.recetaService.addReceta(this.recetaForm.value);
    } else {
      this.receta = this.recetaForm.value;

      this.receta.id = this.id;

      // console.log('re', this.receta)
      // this.recetaService.updateReceta(this.id, this.recetaForm.value);
      this.recetaService.updateReceta(this.receta)
    }

    this.router.navigate(['panel/recetas'], { state: { title: 'hola' } });
  }

  get f() { return this.recetaForm.controls; }
  get t() { return this.f.ingredientes as FormArray; }

  addItem() {
    this.loadIngredientes(1);

    // Autofocus en el ultimo elemento del array
    this.focusInput(this.t.length, -1);
  }

  removeItem(index) {
    this.t.removeAt(index)
  }

  insertItem(index, event) {
    this.t.insert(
      index + 1,
      this.fb.group({
        ingrediente: ''
      })
    )

    // Autofocus en el elemento siguiente
    this.focusInput(index, 1);
  }

  focusInput(index, x) {
    setTimeout(() => {
      let elem = this.renderer.selectRootElement('#i-' + (index + x));
      elem.focus()
    }, 0);
  }


  title = "cloudsSorage";
  selectedFile: File = null;
  fire;
  downloadURL: Observable<string>;

  imgUrl;


  onFileSelected(event) {
    let name = Date.now();
    const file = event.target.files[0];
    const filePath = `recetas/${name}`;
    
    var reader = new FileReader();

    reader.readAsDataURL(file); 

    let url = URL.createObjectURL(file);
    reader.onload = (_event) => { 
      this.imgUrl = reader.result; 
    }
    // this.imgUrl = reader.result;

    // console.log('url', url);
    // let src = this.sanitizer.bypassSecurityTrustStyle(url);


    // console.log('src', src);
    // this.imgUrl = src;


    // const fileRef = this.storage.ref(filePath);
    // const task = this.storage.upload(`recetas/${name}`, file);
    // task
    //   .snapshotChanges()
    //   .pipe(
    //     finalize(() => {
    //       this.downloadURL = fileRef.getDownloadURL();
    //       this.downloadURL.subscribe(url => {
    //         if (url) {
    //           this.fire = url;
    //         }
    //         console.log(this.fire);
    //       });
    //     })
    //   )
    //   .subscribe(url => {
    //     if (url) {
    //       console.log('url', url);
    //       this.imgUrl = url;
    //     }
    //   });
  }

  quitarImagen() {
    this.imgUrl = null;
  }

}
