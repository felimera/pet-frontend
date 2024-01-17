import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/core/models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiUrl = 'http://localhost:82/api/color';

  constructor(private http: HttpClient) { }

  getColorAll(): Observable<Color[]> {
    return this.http
      .get<Color[]>(this.apiUrl);
  }
}
