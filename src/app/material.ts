import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';




const components = [
    MatButtonModule, MatIconModule, MatDividerModule, MatToolbarModule, MatCardModule
]

@NgModule({
    imports: components,
    exports: components
})
export class MaterialModule { }