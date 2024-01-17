import { ColorDTO } from "src/app/infrastructure/dto/color.dto";
import { Color } from "../models/color.model";

export class ColorMapper {
  static fromApiToDomain(apiColorDTO: ColorDTO): Color {
    return {
      id: apiColorDTO.id,
      name: apiColorDTO.name,
      code: apiColorDTO.code,
      active: apiColorDTO.active
    };
  }

  static fromDomainToApi(domainColor: Color): ColorDTO {
    return {
      id: domainColor.id,
      name: domainColor.name,
      code: domainColor.code,
      active: domainColor.active
    };
  }
}
