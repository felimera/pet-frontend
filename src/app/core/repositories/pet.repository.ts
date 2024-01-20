import { Observable } from "rxjs";
import { Pet } from "../models/pet.model";

export abstract class PetRepository {
  abstract createPet(pet: Pet): Observable<Pet>;
}
