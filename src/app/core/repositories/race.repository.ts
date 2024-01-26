import { Observable } from "rxjs";
import { Race } from "../models/race.model";

export abstract class RaceRepository {
  abstract getAllRace(): Observable<Race[]>;
}
