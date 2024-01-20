/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MassMeasurementUnitsService } from './mass-measurement-units.service';

describe('Service: MassMeasurementUnits', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MassMeasurementUnitsService]
    });
  });

  it('should ...', inject([MassMeasurementUnitsService], (service: MassMeasurementUnitsService) => {
    expect(service).toBeTruthy();
  }));
});
