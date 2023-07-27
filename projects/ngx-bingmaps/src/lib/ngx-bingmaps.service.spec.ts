import { TestBed } from '@angular/core/testing';

import { NgxBingmapsService } from './ngx-bingmaps.service';

describe('NgxBingmapsService', () => {
  let service: NgxBingmapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBingmapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
