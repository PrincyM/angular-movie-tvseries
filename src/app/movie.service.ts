import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'; // of is not required for HTTP requests
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'  // importing HTTP Client(for the user of calling API) and headers
import { catchError } from 'rxjs/operators';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  /// movie API endpoint
  apiUrl: string =  'http://princymascarenhas.com/emreji-angular/movieAPI.php?api_key=n01258381apikeycall';

  // error handler
  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('Something bad happened');
  }
  

   getMovies(movie?: Movie): Observable<Movie[]> { // getMovies is expecting an array of movies from observable array of movie

    if(movie) { 
    
      return this.http.get<Movie[]>(this.apiUrl + "&title=" + movie.title).pipe(catchError(this.handleError));
    }

   return this.http.get<Movie[]>(this.apiUrl).pipe(catchError(this.handleError));  // enter URL of API endpoint and return the movie array
  
   }

   getMovieById(id): Observable<Movie> { // getMovieById is expecting a single movie by id

   return this.http.get<Movie>(this.apiUrl + "&id=" + id).pipe(catchError(this.handleError));  // enter URL of API endpoint and return the movie array
 
   }

  constructor(
    private http: HttpClient // creating an instace of HTTP client in constructor
  ) { }
}
