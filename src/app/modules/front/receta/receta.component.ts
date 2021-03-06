import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from '@core/services/receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {
  receta: any = {};
  id: any;

  constructor(private recetaService: RecetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getById(this.id)
    });
  }

  getById(id) {
    this.recetaService.getRecetaById(id).subscribe(receta => {
      this.receta = receta
    })
  }
}
