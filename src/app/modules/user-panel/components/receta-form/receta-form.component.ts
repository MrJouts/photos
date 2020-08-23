import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { RecetaService } from '@core/services/receta.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';

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
    private renderer: Renderer2) { }

  ngOnInit(): void {

    this.recetaForm = this.fb.group({
      title: [''],
      description: [''],
      dificultad: ['intermedia'],
      porciones: [2],
      ingredientes: new FormArray([])
    });

    this.t.push(
      this.fb.group({
        ingrediente: ''
      })
    )

    this.t.push(
      this.fb.group({
        ingrediente: ''
      })
    )

    if (this.id) {
      this.getReceta()
      this.setForm()
    }
  }

  getReceta() {
    this.receta = this.recetaService.getById(this.id);
  }

  setForm() {
    this.recetaForm.setValue({
      title: this.receta.title,
      description: this.receta.description,
      dificultad: this.receta.dificultad,
      porciones: this.receta.porciones,
      ingredientes: []
    });

  }

  onSubmit(e) {

    e.preventDefault();
    console.log(this.recetaForm.value);

    if (!this.id) {
      this.recetaService.createReceta(this.recetaForm.value)
    } else {
      this.recetaService.updateReceta(this.id, this.recetaForm.value)
    }


    // this.router.navigate(['panel/recetas'], { state: { title: 'hola' } });
  }

  get f() { return this.recetaForm.controls; }
  get t() { return this.f.ingredientes as FormArray; }

  addIngrediente() {
    this.t.push(
      this.fb.group({
        ingrediente: ''
      })
    )

    // Autofocus en el ultimo elemento del array
    setTimeout(() => {
      let elem = this.renderer.selectRootElement('#i-' + (this.t.length - 1));
      elem.focus();
    }, 0);


    console.log(this.recetaForm.value)
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
    setTimeout(() => {
      let elem = this.renderer.selectRootElement('#i-' + (index + 1));
      elem.focus()
    }, 0);

  }
}
