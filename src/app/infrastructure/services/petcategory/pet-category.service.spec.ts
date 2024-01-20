/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PetCategoryService } from './pet-category.service';

describe('Service: PetCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetCategoryService]
    });
  });

  it('should ...', inject([PetCategoryService], (service: PetCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
