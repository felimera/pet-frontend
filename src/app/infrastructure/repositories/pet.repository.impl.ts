import { PetRepository } from "src/app/core/repositories/pet.repository";
import { PetService } from "../services/pet/pet.service";
import { Pet } from "src/app/core/models/pet.model";
import { Observable } from "rxjs";

export class PetRepositoryImpl implements PetRepository {

  constructor(private petService: PetService) { }

  createPet(pet: Pet): Observable<Pet> {
    return this.petService.createPet(pet);
  }
}
