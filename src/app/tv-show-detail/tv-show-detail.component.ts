import { Component, OnInit } from '@angular/core';
import { Tvshow } from '../tvshow';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TvShowDetailComponent implements OnInit {

  id: number;
  tvShow: Tvshow;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tvShowService: TvshowService
  ) { }

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('id');
    this.tvShowService.getTvShow(this.id).subscribe(result => this.tvShow = result);
    
  }

}
