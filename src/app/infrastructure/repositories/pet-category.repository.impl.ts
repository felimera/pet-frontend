import { Observable } from "rxjs";
import { PetCategory } from "src/app/core/models/pet-category.model";
import { PetCategoryService } from "../services/petcategory/pet-category.service";
import { PetCategoryRepository } from "src/app/core/repositories/pet-category.repository";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class PetCategoryRepositoryImpl implements PetCategoryRepository {

  constructor(private petCategoryService: PetCategoryService) { }

  getAllPetCategory(): Observable<PetCategory[]> {
    return this.petCategoryService.getAllPetCategory();
  }
}
