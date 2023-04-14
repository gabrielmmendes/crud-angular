import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {MovieService} from "../services/movie.service";
import {catchError, Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../shared/components/error-dialog/error-dialog.component";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies$: Observable<Movie[]>;

  displayedColumns = ['title', 'image', 'imdbRating']

  constructor(private movieService: MovieService,
              public dialog: MatDialog) {
    this.movies$ = this.movieService.findAll()
      .pipe(
        catchError(() => {
          this.onError('Não foi possível carregar filmes, tente novamente mais tarde.')
          return of([])
        }));
  }

  onError(errorMsg: string) {
     this.dialog.open(ErrorDialogComponent, {
       data: errorMsg
     })
  }

  ngOnInit(): void {
  }
}
