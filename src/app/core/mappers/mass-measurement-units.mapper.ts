import { MassMeasurementUnitsDTO } from "src/app/infrastructure/dto/mass-measurement-units.dto";
import { MassMeasurementUnits } from "../models/mass-measurement-units.model";

export class MassMeasurementUnitsMapper {
  static fromApiToDomain(apiMassMeasurementUnitsDTO: MassMeasurementUnitsDTO): MassMeasurementUnits {
    return {
      id: apiMassMeasurementUnitsDTO.id,
      name: apiMassMeasurementUnitsDTO.name,
      description: apiMassMeasurementUnitsDTO.description,
      active: apiMassMeasurementUnitsDTO.active
    };
  }

  static fromDomainToApi(domainMassMeasurementUnits: MassMeasurementUnits): MassMeasurementUnitsDTO {
    return {
      id: domainMassMeasurementUnits.id,
      name: domainMassMeasurementUnits.name,
      description: domainMassMeasurementUnits.description,
      active: domainMassMeasurementUnits.active
    };
  }
}
