import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonServiceService, Frequencies, Provider } from '../common-service.service';

/**
 * Bands Interface
 */

export interface Bands {
  /**
   * Band Number
   */
  band: number;
  /**
   * Band Type
   */
  type: 'FDD' | 'TDD' | 'SDL' | 'SUL';
  /**
   * Band Frequency
   */
  frequency: number;
  /**
   * Band Name
   */
  name: string;
}

/**
 * Spectum Page component
*/

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
    private metaTagService: Meta,
    private modalService: NgbModal
  ) {
  }

  /** Website loading boolean */
  loaded: boolean = false;
  /** country variable from request_uri */
  country: string = "";
  /** region variable from request_uri   */
  region: string = "";
  /** Frequencies Array. Save data to this varialble after data loaded */
  frequencies: Frequencies[] = [];
  /** Error Message String */
  error: string = "";

  /**
   * Run functions when site loads
   * * Subscribe from site_url: {country} and {region}
   * * Load then doGetCountryData() to get country data 
   */
  ngOnInit(): void {
    this.titleService.setTitle('MobileSpectrum');
    this.metaTagService.updateTag({ name: 'description', content: 'Check here your country\'s mobile network spectrum allocation' });

    this.metaTagService.updateTag({ property: 'og:title', content: 'MobileSpectrum' });
    this.metaTagService.updateTag({ property: 'og:description', content: 'Check here your countryr\'s mobile network spectrum allocation' });

    this.metaTagService.updateTag({ name: 'twitter:title', content: 'MobileSpectrum' });
    this.metaTagService.updateTag({ name: 'twitter:description', content: 'Check here your country\'s mobile network spectrum allocation' });
    this.route.params.subscribe(params => {
      this.country = params['country'];
      this.region = params['region'];
      this.doGetCountryData(this.country, this.region);
      if (this.country != null) {
        this.country = this.country.split('_').join(' ');
        this.country = this.country.replace(/(^.|\s\w)/g, m => m.toUpperCase());

        this.titleService.setTitle(this.country + ' | MobileSpectrum');
        this.metaTagService.updateTag({ name: 'description', content: 'Mobile Spectrum allocation of ' + this.country});

        this.metaTagService.updateTag({ property: 'og:title', content: this.country + ' | MobileSpectrum' });
        this.metaTagService.updateTag({ property: 'og:description', content: 'Mobile Spectrum allocation of ' + this.country });

        this.metaTagService.updateTag({ name: 'twitter:title', content: this.country + ' | MobileSpectrum'  });
        this.metaTagService.updateTag({ name: 'twitter:description', content: 'Mobile Spectrum allocation of ' + this.country });

        if (this.region != null) {
          this.region = this.region.split('_').join(' ');
          this.region = this.region.replace(/(^.|\s\w)/g, m => m.toUpperCase());

          this.titleService.setTitle(this.country + ' / ' + this.region + ' | MobileSpectrum');
          this.metaTagService.updateTag({ name: 'description', content: 'Mobile Spectrum allocation of ' + this.country + ' / ' + this.region});

          this.metaTagService.updateTag({ property: 'og:title', content: this.country + ' / ' + this.region + ' | MobileSpectrum' });
          this.metaTagService.updateTag({ property: 'og:description', content: 'Mobile Spectrum allocation of ' + this.country + ' / ' + this.region});

          this.metaTagService.updateTag({ name: 'twitter:title', content: this.country + ' / ' + this.region + ' | MobileSpectrum'  });
          this.metaTagService.updateTag({ name: 'twitter:description', content: 'Mobile Spectrum allocation of ' + this.country + ' /( ' + this.region});
        }
      }
    })
  }

  /**
   * List of Bands in Array
   */
  band: Bands[] = [
    { band: 1, type: 'FDD', frequency: 2100, name: '2100 MHz' },
    { band: 2, type: 'FDD', frequency: 1900, name: '1900 MHz' },
    { band: 3, type: 'FDD', frequency: 1800, name: '1800 MHz' },
    { band: 4, type: 'FDD', frequency: 1700, name: '1700/2100 MHz' },
    { band: 5, type: 'FDD', frequency: 850, name: '850 MHz' },
    { band: 7, type: 'FDD', frequency: 2600, name: '2600 MHz' },
    { band: 8, type: 'FDD', frequency: 900, name: '900 MHz' },
    { band: 9, type: 'FDD', frequency: 1800, name: '1800 MHz' },
    { band: 11, type: 'FDD', frequency: 1500, name: '1500 MHz'},
    { band: 12, type: 'FDD', frequency: 700, name: '700 MHz' },
    { band: 13, type: 'FDD', frequency: 700, name: '700 MHz' },
    { band: 14, type: 'FDD', frequency: 700, name: '700 MHz' },
    { band: 17, type: 'FDD', frequency: 700, name: '700 MHz' },
    { band: 18, type: 'FDD', frequency: 800, name: '800 MHz' },
    { band: 19, type: 'FDD', frequency: 800, name: '800 MHz' },
    { band: 20, type: 'FDD', frequency: 800, name: '800 MHz' },
    { band: 21, type: 'FDD', frequency: 1500, name: '1500 MHz'},
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
    { band: 75, type: 'SDL', frequency: 1500, name: '1500 MHz'},
    { band: 77, type: 'TDD', frequency: 3700, name: '3.7 GHz' },
    { band: 78, type: 'TDD', frequency: 3500, name: '3.5 GHz' },
    { band: 79, type: 'TDD', frequency: 4700, name: '4.7 GHz' },
    { band: 257, type: 'TDD', frequency: 28000, name: '28 GHz' },
    { band: 258, type: 'TDD', frequency: 26000, name: '26 GHz' },
    { band: 260, type: 'TDD', frequency: 39000, name: '39 GHz' },
    { band: 261, type: 'TDD', frequency: 28000, name: '28 GHz'}
  ]

  /** Modal Close Result String */
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

 /**
 * Get Country Data from CommonService.
 * If not found, return 404
 * @param {string} country Country Name
 * @param {string} [region] Region Name
 */

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

/**
 * Get BandName from Band Number
 * @param {number} band Band Number
*/

  getBandName(band: number) {
    let bandName = this.band.find((item) => item.band == band)
    return bandName?.name;
  }

/**
 * Get BandType from Band Number
 * @param {number} band Band Number
*/

  getBandType(band: number) {
    let bandType = this.band.find((item) => item.band == band)
    return bandType?.type;
  }

  /**
   * Get Frequency from Band Number
   * @param band Banmd Number
   */

  getFrequencyFromBand(band: number) {
    let bandFrequency = this.band.find((item) => item.band == band)
    if (bandFrequency?.frequency == null) {
      return 0;
    }
    return bandFrequency?.frequency
  }

/**
 * Sort Providers
 * @param {Array} data Array of Providers
 * @param {string} bandType BandType
*/

  sortProviders(data: Provider[], bandType: string = "") {
    if (bandType == "SUL") {
      data.sort((a, b) => a.frequency.upLink.start - b.frequency.upLink.start)
    }
    else {
      data.sort((a, b) => a.frequency.downLink.start - b.frequency.downLink.start)
    }
    return data;
  }
}