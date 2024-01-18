import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BodySize } from 'src/app/core/models/body-size.model';

@Injectable({
  providedIn: 'root'
})
export class BodySizeService {

  private apiUrl = 'http://localhost:82/api/bodysize';

  constructor(private http: HttpClient) { }

  getAllBodySize(): Observable<BodySize[]> {
    return this.http.get<BodySize[]>(this.apiUrl);
  }
}
