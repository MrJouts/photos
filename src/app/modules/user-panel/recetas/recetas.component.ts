import { Component, OnInit } from '@angular/core';
import { RecetaService } from '@core/services/receta.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {
  recetas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recetaService: RecetaService) { }

  ngOnInit(): void {
    this.getRecetas();
  }

  getRecetas() {
    this.recetaService.getAll().subscribe(recetas => {
      this.recetas = recetas
    });
  }

  deleteReceta(event, receta) {
    this.recetaService.deleteReceta(receta);
  }

}
