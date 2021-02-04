import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

/**
 * Details of Providers
 */

export interface Provider2 {
  /**
   * Short Name
   */
  name: string;
  /**
   * Long Name
   */
  longName: string;
  /**
   * Home Page
   */
  homePage: string;
  /**
   * Background Color
   */
  backgroundColor: string;
  /**
   * Text Color
   */
  textColor: string;
}

/**
 * DownLink Frequency
 */

export interface DownLink {
  /**
   * Start Download Frequency
   */
  start: number;
  /**
   * End Download Frequency
   */
  end: number;
}

/**
 * Uplink Frequency
 */

export interface UpLink {
  /**
   * Start Uplink Frequency
   */
  start: number;
  /**
   * End Uplink Frequency
   */
  end: number;
}

/**
 * Frequencies
 */

export interface Frequency {
  /** Downlink Frequency */
  downLink: DownLink;
  /** Uplink Frequency */
  upLink: UpLink;
}

/**
 * Provider Inteface, contains data of provider
 */

export interface Provider {
  /**
   * Provider Object
   */
  provider: Provider2;
  /**
   * Frequency Object
   */
  frequency: Frequency;
  /**
   * Technology Array
   * example: ["NR", "LTE"]
   */
  technology?: string[];
  /**
   * Source Array
   */
  source: Source[];
  /**
   * Valid date Object
   */
  valid?: Valid;
}

/**
 * Source of Data
 */

export interface Source {
  /**
   * Source link name shown as link text
   */
  name: string;
  /**
   * Source link url
   */
  url: string;
}

/**
 * Spectrum valid time
 */
export interface Valid {
  /**
   * Start date, in #RFC3339 compliant format
   */
  start: string;
  /**
   * End date, in #RFC3339 compliant format
   */
  end: string;
}

/**
 * Frequencies
 */
export interface Frequencies {
  /**
   * Band Number
   */
  band: number;
  /**
   * Providers in Array
   */
  providers: Provider[];
}

/**
 * Common Service
 */

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  /** API URL depends environment */
  apiUrl = environment.api_url;

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Get JSON formated data
   * @param {string} country Country Name
   * @param {string} [region] Region Name
   * @returns {Array} Country or Region Frequency Data
   */

  doGetFrequencyData(country: string, region?: string): Observable<Frequencies[]> {
    let frequencyData = this.http.get<Frequencies[]>(this.apiUrl + '/countries/' + country + '.json');
    if (region != null) {
      frequencyData = this.http.get<Frequencies[]>(this.apiUrl + '/countries/' + country + '/' + region + '.json');
    }
    return frequencyData
      .pipe(
        catchError(this.handleError())
      );
  }

  /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
  private handleError() {
    return (error: any): Observable<any> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      return throwError(
        'Something bad happened; please try again later.');
    };
  }

  /** Log a ApiService message with the MessageService */
  private log(message: string) {
    console.log(`ApiService: ${message}`);
  }

}


