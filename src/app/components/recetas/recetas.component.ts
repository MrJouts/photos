import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecetaService } from '../../services/receta.service'

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {
  recetas: any[] = [];
  recetasFiltradas: any[] = [];

  searchText = new FormControl();


  dificultades = new FormControl();
  dificultadesList: string[] = ['facil', 'intermedia', 'dificil'];

  porciones = new FormControl();
  porcionesList: string[] = ['1 persona', '2 personas', '3 personas', '4 personas', '+4 personas'];



  constructor(private recetaService: RecetaService) { }

  ngOnInit(): void {
    this.getRecetas();
  }

  getRecetas() {
    this.recetaService.getAll().subscribe(recetas => {
      this.recetas = recetas
      this.recetasFiltradas = recetas
    });
  }

  dificultadChange() {
    this.recetasFiltradas = (this.dificultades.value.length > 0)
      ? this.recetas.filter(receta => this.dificultades.value.includes(receta.dificultad))
      : this.recetasFiltradas = this.recetas;
  }

}
