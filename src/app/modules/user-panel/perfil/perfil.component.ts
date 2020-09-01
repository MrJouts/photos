import { Component, OnInit, ViewChild, TemplateRef, ElementRef, Directive } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  @ViewChild('myTemplate') customTemplate: TemplateRef<any>;

  @ViewChild('eliminarPerfil', { read: MatDialog }) btn: MatDialog;

  @ViewChild('eliminarPerfil') btn2: ElementRef;


  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  verElement() {
    // this.btn.open(this.customTemplate, {
    //   width: '250px'
    // })
    // console.log(this.btn)
    console.log(this.btn2.nativeElement.style.color = "red")

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.customTemplate, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
