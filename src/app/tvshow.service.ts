import { Injectable } from '@angular/core';
import { Tvshow } from './tvshow';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  apiUrl: string = "http://princymascarenhas.com/tvseriesAPI/seriesAPI.php?api_key=n01258381apikeycall";

  private handleError(error: HttpErrorResponse) {
    return throwError('Something bad happened!');
  }

  getTvShow(id: number) : Observable<Tvshow> {
      return this.http.get<Tvshow>(this.apiUrl + "&id=" + id);
  }

  getTvShows(tvShow?: Tvshow) : Observable<Tvshow[]> {
    
    if(tvShow) {
        return this.http.get<Tvshow[]>(this.apiUrl + "&genre=" + tvShow.genre)
        .pipe(catchError(this.handleError));
    }

    return this.http.get<Tvshow[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  constructor(
    private http: HttpClient
  ) { }
}
