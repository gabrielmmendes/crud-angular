import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieRoutingModule} from './movie-routing.module';
import {MovieComponent} from './movie/movie.component';
import {AppMaterialModule} from "../shared/app-material/app-material.module";


@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    AppMaterialModule
  ]
})
export class MovieModule { }
