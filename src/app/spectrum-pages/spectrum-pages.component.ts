import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonServiceService, Frequencies } from '../common-service.service';

export interface Bands {
  band: number;
  type: 'FDD' | 'TDD' | 'SDL' | 'SUL';
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
    private titleService: Title,
    private modalService: NgbModal
  ) {
  }


  loaded: boolean = false;
  country: string = "";
  frequencies: Frequencies[] = [];
  

  ngOnInit(): void {
    this.titleService.setTitle('MobileSpectrum');
    this.route.params.subscribe(params => {
      this.country = params['country'];
      this.doGetCountryData(this.country);
      if(this.country != null) {
        this.country = this.country.split('_').join(' ');
        this.country = this.country.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
        this.titleService.setTitle(this.country + ' | MobileSpectrum');
      }  
    })
  }

  test: string = "";

  band: Bands[] = [
    {band: 1, type: 'FDD', name: '2100 MHz'},
    {band: 2, type: 'FDD', name: '1900 MHz'},
    {band: 3, type: 'FDD', name: '1800 MHz'},
    {band: 4, type: 'FDD', name: '1700/2100 MHz'},
    {band: 5, type: 'FDD', name: '850 MHz'},
    {band: 7, type: 'FDD', name: '2600 MHz'},
    {band: 8, type: 'FDD', name: '900 MHz'},
    {band: 12, type: 'FDD', name: '700 MHz'},
    {band: 13, type: 'FDD', name: '700 MHz'},
    {band: 14, type: 'FDD', name: '700 MHz'},
    {band: 17, type: 'FDD', name: '700 MHz'},
    {band: 18, type: 'FDD', name: '800 MHz'},
    {band: 19, type: 'FDD', name: '900 MHz'},
    {band: 20, type: 'FDD', name: '800 MHz'},
    {band: 25, type: 'FDD', name: '1900 MHz'},
    {band: 26, type: 'FDD', name: '850 MHz'},
    {band: 28, type: 'FDD', name: '700 MHz'},
    {band: 29, type: 'SDL', name: '700 MHz'},
    {band: 31, type: 'FDD', name: '450 MHz'},
    {band: 32, type: 'SDL', name: '1500 MHz'},
    {band: 38, type: 'TDD', name: '2600 MHz'},
    {band: 39, type: 'TDD', name: '1900 MHz'},
    {band: 40, type: 'TDD', name: '2300 MHz'},
    {band: 41, type: 'TDD', name: '2500 MHz'},
    {band: 42, type: 'TDD', name: '3500 MHz'},
    {band: 43, type: 'TDD', name: '3700 MHz'},
    {band: 66, type: 'FDD', name: '1700/2100 MHz'},
    {band: 71, type: 'FDD', name: '600 MHz'},
    {band: 77, type: 'TDD', name: '3.7 GHz'},
    {band: 78, type: 'TDD', name: '3.5 GHz'},
    {band: 79, type: 'TDD', name: '4.7 GHz'},
    {band: 257, type: 'TDD', name: '28 GHz'},
    {band: 258, type: 'TDD', name: '26 GHz'}
  ]
    
  closeResult = '';

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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


  doGetCountryData(country: string) {
    this.loaded = false;
    this.commonService.doGetFrequencyData(country).subscribe(data => 
      {
        this.frequencies = data;
        this.loaded = true;
      }
    )
  }

  getBandName(band: number) {
    let bandName = this.band.find((item) => item.band == band)
    return bandName?.name;
  }

  getBandType(band: number) {
    let bandName = this.band.find((item) => item.band == band)
    return bandName?.type;
  }

}
