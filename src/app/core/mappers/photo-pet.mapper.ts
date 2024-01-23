import { PhotoPetDTO } from "src/app/infrastructure/dto/photo-pet.dto";
import { PhotoPet } from "../models/photo-pet.model";

export class PhotoPetMapper {
  static fromApiToDomain(apiPhotoPetDTO: PhotoPetDTO): PhotoPet {
    return {
      name: apiPhotoPetDTO.name,
      extension: apiPhotoPetDTO.extension,
      location: apiPhotoPetDTO.location,
      profilePicture: apiPhotoPetDTO.profilePicture,
      petId: apiPhotoPetDTO.petId,
      comment: apiPhotoPetDTO.comment,
      id: apiPhotoPetDTO.id
    };
  }

  static fromDomainToApi(domainPhotoPet: PhotoPet): PhotoPetDTO {
    return {
      name: domainPhotoPet.name,
      extension: domainPhotoPet.extension,
      location: domainPhotoPet.location,
      profilePicture: domainPhotoPet.profilePicture,
      petId: domainPhotoPet.petId,
      comment: domainPhotoPet.comment,
      id: domainPhotoPet.id
    };
  }
}
