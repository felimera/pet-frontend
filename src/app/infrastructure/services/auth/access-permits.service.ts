import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessPermits } from 'src/app/core/models/access-permits.model';

@Injectable({
  providedIn: 'root'
})
export class AccessPermitsService {

  private apiUrl = 'http://localhost:8080/api/accesspermits';

  constructor(private http: HttpClient) { }

  getAccessPermitsByEmailCustomer(email: string): Observable<AccessPermits> {
    return this.http
      .get<AccessPermits>(`${this.apiUrl}/link?email=${email}`);
  }
}
