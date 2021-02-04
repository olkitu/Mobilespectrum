import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
    private titleService: Title
  ) { }

  /**
   * Set Title
  */
  ngOnInit(): void {
    this.titleService.setTitle('MobileSpectrum');
  }

}
