import { Component, OnInit } from '@angular/core';
import { RecetaService } from '@core/services/receta.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topRecetas: any[] = [];

  constructor(private recetaService: RecetaService) { }

  ngOnInit(): void {
    this.getRecetas();
  }

  getRecetas() {
    this.recetaService.getAll().subscribe(recetas => {
      this.topRecetas = recetas.slice(0, 6);

    });
  }

}
