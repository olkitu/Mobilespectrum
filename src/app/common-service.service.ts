import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface DownLink {
  start: number;
  end: number;
}

export interface UpLink {
  start: number;
  end: number;
}

export interface Frequency {
  band: number;
  downLink: DownLink;
  upLink: UpLink;
}

export interface Data {
  frequencies: Frequency[];
}

export interface Network {
  shortName: string;
  longName: string;
  homePage: string;
  backgroundColor: string;
  textColor: string;
  Data: Data;
}

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  apiUrl = "/data";

  constructor(
    private http: HttpClient,
  ) { }


  doGetNetworkData(country: string): Observable<Network[]> {
    return this.http.get<Network[]>(this.apiUrl + '/countries/' + country +  '.json')
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


