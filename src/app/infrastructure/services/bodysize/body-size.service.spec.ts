/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BodySizeService } from './body-size.service';

describe('Service: BodySize', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodySizeService]
    });
  });

  it('should ...', inject([BodySizeService], (service: BodySizeService) => {
    expect(service).toBeTruthy();
  }));
});
