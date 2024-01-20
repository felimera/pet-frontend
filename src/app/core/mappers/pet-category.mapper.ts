import { PetCategoryDTO } from "src/app/infrastructure/dto/pet-category.dto";
import { PetCategory } from "../models/pet-category.model";

export class PetCategoryMapper {
  static fromApiToDomain(apiPetCategoryDTO: PetCategoryDTO): PetCategory {
    return {
      id: apiPetCategoryDTO.id,
      name: apiPetCategoryDTO.name,
      description: apiPetCategoryDTO.description,
      active: apiPetCategoryDTO.active
    };
  }

  static fromDomainToApi(domainPetCategory: PetCategory): PetCategoryDTO {
    return {
      id: domainPetCategory.id,
      name: domainPetCategory.name,
      description: domainPetCategory.description,
      active: domainPetCategory.active
    };
  }
}
