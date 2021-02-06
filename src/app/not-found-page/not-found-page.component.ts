import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpStatusCodeService } from '../http-status-code.service';

/**
 * Not Found Page component
*/

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  /**
   * Load Depencies
   * @param titleService Load Tile
   * @param statusCodeService Load HttpStatusCode Service
   */
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private statusCodeService: HttpStatusCodeService
  ) { }

  /**
  * Set Title
  * 
  * Set StatusCode 404 and Not Found
  */
  ngOnInit(): void {

    this.titleService.setTitle('Not Found | MobileSpectrum');
    this.metaTagService.updateTag({ name: 'description', content: 'Check here your\'s country mobile network spectrum allocation' });

    this.metaTagService.updateTag({ property: 'og:title', content: 'Not Found | MobileSpectrum' });
    this.metaTagService.updateTag({ property: 'og:description', content: 'Check here your\'s country mobile network spectrum allocation'  });

    this.metaTagService.updateTag({ name: 'twitter:title', content: 'Not Found | MobileSpectrum' });
    this.metaTagService.updateTag({ name: 'twitter:description', content: 'Check here your\'s country mobile network spectrum allocation' });

    this.statusCodeService.setStatus(404, 'Not Found');
  }

}
