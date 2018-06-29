import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TvShowComponent } from './tv-show/tv-show.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';

const routes = [
  { path: 'tv-shows', component: TvShowComponent },
  { path: 'tv-show/:id', component: TvShowDetailComponent },
  { path: 'movies', component: MovieComponent},
  { path: 'movieDetails/:id' , component: MovieDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent}
];

@NgModule({

  exports: [ RouterModule ],

  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
