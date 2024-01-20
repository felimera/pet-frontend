import { PetDTO } from "src/app/infrastructure/dto/pet.dto";
import { Pet } from "../models/pet.model";

export class PetMapper {
  static fromApiToDomain(apiPetDTO: PetDTO): Pet {
    return {
      id: apiPetDTO.id,
      name: apiPetDTO.name,
      gender: apiPetDTO.gender,
      race: apiPetDTO.race,
      characteristicsExtremities: apiPetDTO.characteristicsExtremities,
      idCustomerEntity: apiPetDTO.idCustomerEntity,
      weightValue: apiPetDTO.weightValue,
      idMassMeasurementUnitsEntity: apiPetDTO.idMassMeasurementUnitsEntity,
      idHairColorEntity: apiPetDTO.idHairColorEntity,
      idBodySizeEntity: apiPetDTO.idBodySizeEntity,
      idTypeFigureEntity: apiPetDTO.idTypeFigureEntity,
      idEyeColorEntity: apiPetDTO.idEyeColorEntity,
      idPetCategoryEntity: apiPetDTO.idPetCategoryEntity,
      photo: apiPetDTO.photo,
      birthdate: apiPetDTO.birthdate,
      age: apiPetDTO.age
    };
  }

  static fromDomainToApi(domainPet: Pet): PetDTO {
    return {
      id: domainPet.id,
      name: domainPet.name,
      gender: domainPet.gender,
      race: domainPet.race,
      characteristicsExtremities: domainPet.characteristicsExtremities,
      idCustomerEntity: domainPet.idCustomerEntity,
      weightValue: domainPet.weightValue,
      idMassMeasurementUnitsEntity: domainPet.idMassMeasurementUnitsEntity,
      idHairColorEntity: domainPet.idHairColorEntity,
      idBodySizeEntity: domainPet.idBodySizeEntity,
      idTypeFigureEntity: domainPet.idTypeFigureEntity,
      idEyeColorEntity: domainPet.idEyeColorEntity,
      idPetCategoryEntity: domainPet.idPetCategoryEntity,
      photo: domainPet.photo,
      birthdate: domainPet.birthdate,
      age: domainPet.age
    };
  }
}
