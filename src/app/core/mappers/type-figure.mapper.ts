import { TypeFigureDTO } from "src/app/infrastructure/dto/type-figure.dto";
import { TypeFigure } from "../models/type-figure.model";

export class TypeFigureMapper {
  static fromApiToDomain(apiTypeFigureDTO: TypeFigureDTO): TypeFigure {
    return {
      id: apiTypeFigureDTO.id,
      name: apiTypeFigureDTO.name,
      description: apiTypeFigureDTO.description,
      active: apiTypeFigureDTO.active
    };
  }

  static fromDomainToApi(domainTypeFigure: TypeFigure): TypeFigureDTO {
    return {
      id: domainTypeFigure.id,
      name: domainTypeFigure.name,
      description: domainTypeFigure.description,
      active: domainTypeFigure.active
    };
  }
}
