import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/services/receta.service';
import { ActivatedRoute } from '@angular/router';

ActivatedRoute

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {
  receta: any = {};

  id: number;

  constructor(private recetaService: RecetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getById(this.id)
    });
  }

  getById(id) {
    this.receta = this.recetaService.getById(id)
  }
}
