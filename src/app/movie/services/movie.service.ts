import {Injectable} from '@angular/core';
import {Movie} from "../model/movie";
import {HttpClient} from "@angular/common/http";
import {first, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly API = 'api/movie'

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Movie[]>(this.API)
      .pipe(
        first(),
        tap(movie => console.log(movie))
      );
  }
}
