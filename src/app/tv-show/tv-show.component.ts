import { Component, OnInit } from '@angular/core';
import { Tvshow } from '../tvshow';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  tvShow: Tvshow;
  tvShows: Tvshow[];

  constructor(
    private tvShowService: TvshowService
  ) { }


  ngOnInit() {
    this.tvShowService.getTvShows('','').subscribe(ts => this.tvShows = ts);
    
  }

}
