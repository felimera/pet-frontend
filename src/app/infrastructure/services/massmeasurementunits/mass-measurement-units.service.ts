import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MassMeasurementUnits } from 'src/app/core/models/mass-measurement-units.model';

@Injectable({
  providedIn: 'root'
})
export class MassMeasurementUnitsService {

  private apiUrl = 'http://localhost:82/api/massunits';

  constructor(private http: HttpClient) { }

  getAllMassMeasurementUnits(): Observable<MassMeasurementUnits[]> {
    return this.http.get<MassMeasurementUnits[]>(this.apiUrl);
  }
}
