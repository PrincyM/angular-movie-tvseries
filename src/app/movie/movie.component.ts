import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'; // import Movie service
import { Movie } from '../movie'; // import Movie model


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];

  setMovies(): void {

    this.movieService.getMovies().subscribe(data => this.movies = data);
  }

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {

    this.setMovies();
    console.log(this.movies);
  }

}