import { MassMeasurementUnitsRepository } from "src/app/core/repositories/mass-measurement-units.repository";
import { MassMeasurementUnitsService } from "../services/massmeasurementunits/mass-measurement-units.service";
import { Observable } from "rxjs";
import { MassMeasurementUnits } from "src/app/core/models/mass-measurement-units.model";

export class MassMeasurementUnitsRepositoryImpl implements MassMeasurementUnitsRepository {

  constructor(private massMeasurementUnitsService: MassMeasurementUnitsService) { }

  getAllMassMeasurementUnits(): Observable<MassMeasurementUnits[]> {
    return this.massMeasurementUnitsService.getAllMassMeasurementUnits();
  }
}
