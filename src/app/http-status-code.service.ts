import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Inject, Injectable, Optional } from '@angular/core';

/**
 * Status Code Service
 */

@Injectable({
  providedIn: 'root'
})
export class HttpStatusCodeService {

  /**
   * Load Depencies
   * @param response 
   */
  constructor(
    @Optional()
    @Inject(RESPONSE)
    private response: any,
  ) { }

  /**
   * HTTP Status return
   * @param code HTTP Response Code Number
   * @param message HTTP Response Message
   */
  public setStatus(code: number, message: string): void {
    if (this.response) {
        this.response.statusCode = code;
        this.response.statusMessage = message;
    }
}
}
