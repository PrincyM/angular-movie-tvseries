import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';
import { Movie } from '../movie'; 

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  num: number;
  movieDetails: Movie;

  getNum(): void {
    this.num = +this.route.snapshot.paramMap.get('id'); // num will return the column id returned
    console.log(this.num);
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService
  ) { }

  ngOnInit() {

    this.getNum();
    this.movieService.getMovieById(this.num).subscribe(data => this.movieDetails = data);
  }

}
