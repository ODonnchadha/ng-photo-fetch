import { TestBed } from '@angular/core/testing';

import { FetchPhotoService } from './fetch-photo.service';

describe('FetchPhotoServiceService', () => {
  let service: FetchPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
