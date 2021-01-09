import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService, Frequency, Network } from '../common-service.service';

export interface BandData {
  band: number;
}

@Component({
  selector: 'app-spectrum-pages',
  templateUrl: './spectrum-pages.component.html',
  styleUrls: ['./spectrum-pages.component.css']
})
export class SpectrumPagesComponent implements OnInit {

  constructor(
    private commonService: CommonServiceService,
    private route: ActivatedRoute,
  ) {
  }

  country: string = "";
  networks: Network[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.country = params['country'];
      this.doGetCountryData(this.country);
    })
  }

  test: string = "";


  doGetCountryData(country: string) {
    this.commonService.doGetNetworkData(country).subscribe(data => 
      {
        this.networks = data;
      })
  }

}
