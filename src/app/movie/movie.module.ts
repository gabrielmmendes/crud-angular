import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieRoutingModule} from './movie-routing.module';
import {MovieComponent} from './movie/movie.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatTableModule
  ]
})
export class MovieModule { }
