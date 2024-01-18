import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeFigure } from 'src/app/core/models/type-figure.model';

@Injectable({
  providedIn: 'root'
})
export class TypeFigureService {

  private apiUrl = 'http://localhost:82/api/typefigure';

  constructor(private http: HttpClient) { }

  getAllTypeFigure(): Observable<TypeFigure[]> {
    return this.http.get<TypeFigure[]>(this.apiUrl);
  }
}
