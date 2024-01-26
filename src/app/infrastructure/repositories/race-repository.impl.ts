import { RaceRepository } from "src/app/core/repositories/race.repository";
import { RaceService } from "../services/race/race.service";
import { Observable } from "rxjs";
import { Race } from "src/app/core/models/race.model";

export class RaceRepositoryImpl implements RaceRepository {

  constructor(private raceService: RaceService) { }

  getAllRace(): Observable<Race[]> {
    return this.raceService.getAllRace();
  }
}
