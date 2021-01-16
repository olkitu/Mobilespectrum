import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService, Frequencies } from '../common-service.service';


@Component({
  selector: 'app-spectrum-pages',
  templateUrl: './spectrum-pages.component.html',
  styleUrls: ['./spectrum-pages.component.css']
})
export class SpectrumPagesComponent implements OnInit {

  constructor(
    private commonService: CommonServiceService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
  }

  country: string = "";
  frequencies: Frequencies[] = [];

  ngOnInit(): void {
    this.titleService.setTitle('MobileSpectrum');
    this.route.params.subscribe(params => {
      this.country = params['country'];
      this.titleService.setTitle(this.country + ' | MobileSpectrum');
      this.doGetCountryData(this.country);
    })
  }

  test: string = "";


  doGetCountryData(country: string) {
    this.commonService.doGetFrequencyData(country).subscribe(data => 
      {
        this.frequencies = data;
      }
    )
  }
}
