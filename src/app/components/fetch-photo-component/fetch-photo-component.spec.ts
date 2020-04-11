import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPhotoComponent } from './fetch-photo-component';

describe('FetchPhotoComponent', () => {
  let component: FetchPhotoComponent;
  let fixture: ComponentFixture<FetchPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
