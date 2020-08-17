import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {
  topRecetas: any[] = [1, 2, 3, 4, 5, 6];
  dificultades = new FormControl();
  dificultadesList: string[] = ['Facil', 'Intermedio', 'Dificil'];

  porciones = new FormControl();
  porcionesList: string[] = ['1 persona', '2 personas', '3 personas', '4 personas', '+4 personas'];

  constructor() { }

  ngOnInit(): void {
  }

}
