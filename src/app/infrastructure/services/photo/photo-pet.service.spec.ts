/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotoPetService } from './photo-pet.service';

describe('Service: PhotoPet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoPetService]
    });
  });

  it('should ...', inject([PhotoPetService], (service: PhotoPetService) => {
    expect(service).toBeTruthy();
  }));
});
