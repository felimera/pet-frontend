import { Observable } from "rxjs";
import { PhotoPet } from "../models/photo-pet.model";

export abstract class PhotoPetRepository {
  abstract createPhotoPet(photoPet: PhotoPet): Observable<PhotoPet>;
}
