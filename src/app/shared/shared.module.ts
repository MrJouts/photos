import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsPipe } from '@shared/pipes/comments.pipe';
import { SearchFilterPipe } from '@shared/pipes/search-filter.pipe';

@NgModule({
  declarations: [
    CommentsPipe,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommentsPipe,
    SearchFilterPipe
  ]
})

export class SharedModule { }
