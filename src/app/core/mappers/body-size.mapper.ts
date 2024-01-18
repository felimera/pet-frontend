import { BodySizeDTO } from "src/app/infrastructure/dto/body-size.dto";
import { BodySize } from "../models/body-size.model";

export class BodySizeMapper {
  static fromApiToDomain(apiBodySizeDTO: BodySizeDTO): BodySize {
    return {
      id: apiBodySizeDTO.id,
      name: apiBodySizeDTO.name,
      description: apiBodySizeDTO.description,
      active: apiBodySizeDTO.active
    };
  }

  static fromDomainToApi(domainBodySize: BodySize): BodySizeDTO {
    return {
      id: domainBodySize.id,
      name: domainBodySize.name,
      description: domainBodySize.description,
      active: domainBodySize.active
    };
  }
}
