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
  errorMessage: string;
  showSearch: Tvshow = new Tvshow();
  isValid = true;

  findTvShow() {
    this.tvShowService.getTvShows(this.showSearch).subscribe(ts => this.tvShows = ts);
  }

  constructor(
    private tvShowService: TvshowService
  ) { }

  ngOnInit() {
    this.tvShowService.getTvShows().subscribe(ts => this.tvShows = ts, error => {
      console.log("error");
    });
  }

}
