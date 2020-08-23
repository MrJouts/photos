import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RecetaService } from '@core/services/receta.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-receta-form',
  templateUrl: './receta-form.component.html',
  styleUrls: ['./receta-form.component.scss']
})
export class RecetaFormComponent implements OnInit {

  @Input() id: any;
  receta;

  recetaForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    dificultad: new FormControl('intermedia'),
    porciones: new FormControl(2)
  })

  dificultadList: any[] = ['facil', 'intermedia', 'dificil'];
  porcionesList: any[] = [1, 2, 3, 4];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recetaService: RecetaService) { }

  ngOnInit(): void {
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
      porciones: this.receta.porciones
    });
  }

  onSubmit() {
    if (!this.id) {
      this.recetaService.createReceta(this.recetaForm.value)
    } else {
      this.recetaService.updateReceta(this.id, this.recetaForm.value)
    }

    this.router.navigate(['panel/recetas'], { state: { title: 'hola' } });
  }

}
