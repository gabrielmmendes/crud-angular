import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {MovieService} from "../services/movie.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies$: Observable<Movie[]>;

  displayedColumns = ['title', 'image', 'imdbRating']

  constructor(private movieService: MovieService) {
    this.movies$ = this.movieService.findAll();
  }
  ngOnInit(): void {
  }
}
