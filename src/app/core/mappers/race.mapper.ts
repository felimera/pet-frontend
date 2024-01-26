import { RaceDTO } from "src/app/infrastructure/dto/race.dto";
import { Race } from "../models/race.model";

export class RaceMapper {
  static fromApiToDomain(apiRaceDTO: RaceDTO): Race {
    return {
      id: apiRaceDTO.id,
      name: apiRaceDTO.name,
      description: apiRaceDTO.description,
      active: apiRaceDTO.active
    };
  }

  static fromDomainToApi(domainRace: Race): RaceDTO {
    return {
      id: domainRace.id,
      name: domainRace.name,
      description: domainRace.description,
      active: domainRace.active
    };
  }
}
