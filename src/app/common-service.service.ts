import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface Provider2 {
  name: string;
  longName: string;
  homePage: string;
  backgroundColor: string;
  textColor: string;
}

export interface DownLink {
  start: number;
  end: number;
}

export interface UpLink {
  start: number;
  end: number;
}

export interface Frequency {
  downLink: DownLink;
  upLink: UpLink;
}

export interface Provider {
  provider: Provider2;
  frequency: Frequency;
  technology?: string[];
  source?: Source[];
  valid?: Valid;
}

export interface Source {
  name: string;
  url:  string;
}

export interface Valid {
  start: string;
  end:   string;
}

export interface Frequencies {
  band: number;
  providers: Provider[];
}


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  apiUrl = environment.api_url;

  constructor(
    private http: HttpClient,
  ) { }


  doGetFrequencyData(country: string, region?: string): Observable<Frequencies[]> {
    let frequencyData = this.http.get<Frequencies[]>(this.apiUrl + '/countries/' + country +  '.json');
    if(region != null) {
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


