import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RecetaService } from '@core/services/receta.service';

@Component({
  selector: 'app-receta-crear',
  templateUrl: './receta-crear.component.html',
  styleUrls: ['./receta-crear.component.scss']
})
export class RecetaCrearComponent implements OnInit {
  title = new FormControl('');

  recetaForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    dificultad: new FormControl('intermedia'),
    porciones: new FormControl(2)
  })

  dificultadList: any[] = ['facil', 'intermedia', 'dificil'];
  porcionesList: any[] = [1, 2, 3, 4];

  constructor(private recetaService: RecetaService) { }

  ngOnInit(): void {
  }

  updateTitle() {
    this.title.setValue('Pollo al horno')
  }

  onSubmit() {
    this.recetaService.createReceta(this.recetaForm.value)

    // TODO: Use EventEmitter with form value
    console.warn(this.recetaForm.value);

  }

}
