import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieRoutingModule} from './movie-routing.module';
import {MovieComponent} from './movie/movie.component';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class MovieModule { }
