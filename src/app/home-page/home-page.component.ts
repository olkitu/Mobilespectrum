import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/**
 * Home Page component
*/

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  /**
   * Load Depencies
   * @param titleService Load Title Service
   */
  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  /**
   * Set Title
  */
  ngOnInit(): void {
    this.titleService.setTitle('MobileSpectrum');
    this.metaTagService.updateTag({ name: 'description', content: 'Check here your country\'s mobile network spectrum allocation' });

    this.metaTagService.updateTag({ property: 'og:title', content: 'MobileSpectrum' });
    this.metaTagService.updateTag({ property: 'og:description', content: 'Check here your country\'s mobile network spectrum allocation'  });

    this.metaTagService.updateTag({ name: 'twitter:title', content: 'MobileSpectrum' });
    this.metaTagService.updateTag({ name: 'twitter:description', content: 'Check here your country\'s mobile network spectrum allocation' });
  }

}
