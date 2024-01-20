import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetCategory } from 'src/app/core/models/pet-category.model';

@Injectable({
  providedIn: 'root'
})
export class PetCategoryService {

  private apiUrl = 'http://localhost:82/api/petcategory';

  constructor(private http: HttpClient) { }

  getAllPetCategory(): Observable<PetCategory[]> {
    return this.http.get<PetCategory[]>(this.apiUrl);
  }
}
