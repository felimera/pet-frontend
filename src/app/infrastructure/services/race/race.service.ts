import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from 'src/app/core/models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private apiUrl = 'http://localhost:82/api/race';

  constructor(private http: HttpClient) { }

  getAllRace(): Observable<Race[]> {
    return this.http.get<Race[]>(this.apiUrl);
  }
}
