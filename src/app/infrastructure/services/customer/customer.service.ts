import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/core/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:82/api/customer';
  // private apiUrl = '/api/customer';

  constructor(private http: HttpClient) { }

  getCustomerByEmail(email: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/user?email=${email}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  getAllCustomerByRole(role: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/filterrole?role=${role}`);
  }

  getCustumerMultipleParameter(firstName: string, lastName: string, phone: string, email: string, role: string): Observable<Customer[]> {
    let url = `${this.apiUrl}/searchparameter?`;
    if (firstName) {
      url = url + 'firstName=' + firstName;
    }
    if (lastName) {
      if (url)
        url = url + '&';
      url = url + 'lastName=' + lastName;
    }
    if (phone) {
      if (url)
        url = url + '&';
      url = url + 'phone=' + phone;
    }
    if (email) {
      if (url)
        url = url + '&';
      url = url + 'email=' + email;
    }
    if (role) {
      if (url)
        url = url + '&';
      url = url + 'role=' + role;
    }
    return this.http.get<Customer[]>(url)
  }
}
