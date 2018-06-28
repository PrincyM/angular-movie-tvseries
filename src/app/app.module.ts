import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // for HTTP request. importing from angular's HTTP library
import { FormsModule } from '@angular/forms' // import form module here
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppComponent } from './app.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { AppRoutingModule } from './/app-routing.module';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailsComponent,
    TvShowComponent,
    TvShowDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }