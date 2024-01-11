import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/core/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:82/api/customer';

  constructor(private http: HttpClient) { }

  getCustomerByEmail(email: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/user?email=${email}`);
  }
}
