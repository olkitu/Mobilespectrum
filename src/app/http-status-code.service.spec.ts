import { TestBed } from '@angular/core/testing';

import { HttpStatusCodeService } from './http-status-code.service';

describe('HttpStatusCodeService', () => {
  let service: HttpStatusCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpStatusCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
