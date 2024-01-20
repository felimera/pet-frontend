import { Observable } from "rxjs";
import { MassMeasurementUnits } from "../models/mass-measurement-units.model";

export abstract class MassMeasurementUnitsRepository {
  abstract getAllMassMeasurementUnits(): Observable<MassMeasurementUnits[]>;
}
