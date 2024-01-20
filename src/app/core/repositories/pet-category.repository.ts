import { Observable } from "rxjs";
import { PetCategory } from "../models/pet-category.model";

export abstract class PetCategoryRepository {
  abstract getAllPetCategory(): Observable<PetCategory[]>;
}
