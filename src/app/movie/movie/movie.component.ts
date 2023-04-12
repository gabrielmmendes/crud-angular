import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie[] = [
    {
      id: '12313131',
      title: 'Shrek',
      image: 'shrek.com',
      imdbRating: 10.0
    },
    {
      id: '1231313174567567',
      title: 'Shrek 2',
      image: 'shrek2.com',
      imdbRating: 10.0
    }
  ];

  displayedColumns = ['title', 'image', 'imdbRating']

  constructor( ) { }
  ngOnInit(): void {
  }
}
