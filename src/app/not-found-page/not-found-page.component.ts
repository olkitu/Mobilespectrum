import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpStatusCodeService } from '../http-status-code.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private statusCodeService: HttpStatusCodeService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Not Found | MobileSpectrum');
    this.statusCodeService.setStatus(404, 'Not Found');
  }

}
