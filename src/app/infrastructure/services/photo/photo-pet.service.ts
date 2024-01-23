import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoPet } from 'src/app/core/models/photo-pet.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoPetService {

  private apiUrl = 'http://localhost:83/api/photo';

  constructor(private http: HttpClient) { }

  createPhotoPet(photoPet: PhotoPet): Observable<PhotoPet> {
    return this.http.post<PhotoPet>(this.apiUrl, photoPet);
  }
}
