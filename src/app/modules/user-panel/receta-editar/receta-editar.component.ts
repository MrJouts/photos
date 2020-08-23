import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receta-editar',
  templateUrl: './receta-editar.component.html',
  styleUrls: ['./receta-editar.component.scss']
})
export class RecetaEditarComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}
