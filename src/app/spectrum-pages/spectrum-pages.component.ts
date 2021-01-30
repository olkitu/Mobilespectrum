import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonServiceService, Frequencies } from '../common-service.service';

export interface Bands {
  band: number;
  type: 'FDD' | 'TDD' | 'SDL' | 'SUL';
  frequency: number;
  name: string;
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
    private router: Router,
    private titleService: Title,
    private modalService: NgbModal
  ) {
  }


  loaded: boolean = false;
  country: string = "";
  region: string = "";
  frequencies: Frequencies[] = [];
  error: string = "";


  ngOnInit(): void {
    this.titleService.setTitle('MobileSpectrum');
    this.route.params.subscribe(params => {
      this.country = params['country'];
      this.region = params['region'];
      this.doGetCountryData(this.country, this.region);
      if (this.country != null) {
        this.country = this.country.split('_').join(' ');
        this.country = this.country.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
        this.titleService.setTitle(this.country + ' | MobileSpectrum');
        if(this.region != null) {
          this.region = this.region.split('_').join(' ');
          this.region = this.region.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
          this.titleService.setTitle(this.country + ' / ' + this.region + ' | MobileSpectrum');
        }
      }
    })
  }

  test: string = "";

  band: Bands[] = [
    { band: 1, type: 'FDD', frequency: 2100, name: '2100 MHz' },
    { band: 2, type: 'FDD', frequency: 1900, name: '1900 MHz' },
    { band: 3, type: 'FDD', frequency: 1800, name: '1800 MHz' },
    { band: 4, type: 'FDD', frequency: 1700, name: '1700/2100 MHz' },
    { band: 5, type: 'FDD', frequency: 850, name: '850 MHz' },
    { band: 7, type: 'FDD', frequency: 2600, name: '2600 MHz' },
    { band: 8, type: 'FDD', frequency: 900, name: '900 MHz' },
    { band: 12, type: 'FDD', frequency: 700, name: '700 MHz' },
    { band: 13, type: 'FDD', frequency: 700, name: '700 MHz' },
    { band: 14, type: 'FDD', frequency: 700, name: '700 MHz' },
    { band: 17, type: 'FDD', frequency: 700, name: '700 MHz' },
    { band: 18, type: 'FDD', frequency: 800, name: '800 MHz' },
    { band: 19, type: 'FDD', frequency: 900, name: '900 MHz' },
    { band: 20, type: 'FDD', frequency: 800, name: '800 MHz' },
    { band: 25, type: 'FDD', frequency: 1900, name: '1900 MHz' },
    { band: 26, type: 'FDD', frequency: 850, name: '850 MHz' },
    { band: 28, type: 'FDD', frequency: 700, name: '700 MHz' },
    { band: 29, type: 'SDL', frequency: 700, name: '700 MHz' },
    { band: 31, type: 'FDD', frequency: 450, name: '450 MHz' },
    { band: 32, type: 'SDL', frequency: 1500, name: '1500 MHz' },
    { band: 38, type: 'TDD', frequency: 2600, name: '2600 MHz' },
    { band: 39, type: 'TDD', frequency: 1900, name: '1900 MHz' },
    { band: 40, type: 'TDD', frequency: 2300, name: '2300 MHz' },
    { band: 41, type: 'TDD', frequency: 2500, name: '2500 MHz' },
    { band: 42, type: 'TDD', frequency: 3500, name: '3500 MHz' },
    { band: 43, type: 'TDD', frequency: 3700, name: '3700 MHz' },
    { band: 66, type: 'FDD', frequency: 1700, name: '1700/2100 MHz' },
    { band: 71, type: 'FDD', frequency: 600, name: '600 MHz' },
    { band: 77, type: 'TDD', frequency: 3700, name: '3.7 GHz' },
    { band: 78, type: 'TDD', frequency: 3500, name: '3.5 GHz' },
    { band: 79, type: 'TDD', frequency: 4700, name: '4.7 GHz' },
    { band: 257, type: 'TDD', frequency: 28000, name: '28 GHz' },
    { band: 258, type: 'TDD', frequency: 26000, name: '26 GHz' }
  ]

  closeResult = '';

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  doGetCountryData(country: string, region?: string) {
    this.loaded = false;
    this.commonService.doGetFrequencyData(country, region).subscribe(data => {
      this.frequencies = data.sort((a, b) => this.getFrequencyFromBand(a.band) - this.getFrequencyFromBand(b.band));
      this.loaded = true;
    }, error => {
      this.error = error
      console.log(error)
      if (error instanceof HttpErrorResponse && error.status == 404) { }
      this.router.navigateByUrl('/404', { replaceUrl: true });
    }
    )
  }

  getBandName(band: number) {
    let bandName = this.band.find((item) => item.band == band)
    return bandName?.name;
  }

  getBandType(band: number) {
    let bandType = this.band.find((item) => item.band == band)
    return bandType?.type;
  }

  getFrequencyFromBand(band: number) {
    let bandFrequency = this.band.find((item) => item.band == band)
    if(bandFrequency?.frequency == null) {
      return 0;
    }
    return bandFrequency?.frequency
  }

}
