import { Component, OnInit } from '@angular/core';
import { Tvshow } from '../tvshow';
import { TvshowService } from '../tvshow.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  tvShows: Tvshow[];
  showSearch: Tvshow = new Tvshow();

  findTvShow() {
    this.tvShowService.getTvShows(this.showSearch).subscribe(ts => this.tvShows = ts);
  }

  constructor(
    private tvShowService: TvshowService
  ) { }

  ngOnInit() {
    this.tvShowService.getTvShows().subscribe(ts => this.tvShows = ts);
  }

}
