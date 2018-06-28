import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'; // import Movie service
import { Movie } from '../movie'; // import Movie model


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  // define movieSearch

  movieSearch: Movie = new Movie(); 

  movies: Movie[];

  // method findMoviesByGenre

  findMovies() : void {
    this.movieService.getMovies(this.movieSearch).subscribe(data => this.movies = data);
  }

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