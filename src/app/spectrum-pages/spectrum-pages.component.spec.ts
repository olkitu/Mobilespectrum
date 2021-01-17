import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SpectrumPagesComponent } from './spectrum-pages.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SpectrumPagesComponent', () => {
  let component: SpectrumPagesComponent;
  let fixture: ComponentFixture<SpectrumPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ SpectrumPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectrumPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
