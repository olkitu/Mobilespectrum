import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectrumPagesComponent } from './spectrum-pages.component';

describe('SpectrumPagesComponent', () => {
  let component: SpectrumPagesComponent;
  let fixture: ComponentFixture<SpectrumPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
