import { Component, OnInit } from '@angular/core';

import { SeriesService } from './../core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  private series;

  constructor(private seriesSrv: SeriesService) { }

  ngOnInit() {
    this.seriesSrv.getSeries()
      .subscribe((res) => { this.series = res.json(); });
  }

}
