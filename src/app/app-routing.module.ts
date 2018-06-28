import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TvShowComponent } from './tv-show/tv-show.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';

const routes = [
  { path: 'tv-shows', component: TvShowComponent },
  { path: 'tv-show-detail', component: TvShowDetailComponent },
  { path: 'movies', component: MovieComponent},
  { path: 'movieDetails/:id' , component: MovieDetailsComponent}
];

@NgModule({

  exports: [ RouterModule ],

  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
