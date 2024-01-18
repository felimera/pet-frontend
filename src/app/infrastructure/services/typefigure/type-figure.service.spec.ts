/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypeFigureService } from './type-figure.service';

describe('Service: TypeFigure', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeFigureService]
    });
  });

  it('should ...', inject([TypeFigureService], (service: TypeFigureService) => {
    expect(service).toBeTruthy();
  }));
});
