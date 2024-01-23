import { PhotoPet } from "src/app/core/models/photo-pet.model";
import { PhotoPetService } from "../services/photo/photo-pet.service";
import { Observable } from "rxjs";
import { PhotoPetRepository } from "src/app/core/repositories/photo-pet.repository";

export class PhotoPetRepositoryImpl implements PhotoPetRepository {

  constructor(private photoPetService: PhotoPetService) { }

  createPhotoPet(photoPet: PhotoPet): Observable<PhotoPet> {
    return this.photoPetService.createPhotoPet(photoPet);
  }
}
