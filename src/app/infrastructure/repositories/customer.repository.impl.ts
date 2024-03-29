import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "src/app/core/models/customer.model";
import { CustomerRepository } from "src/app/core/repositories/customer.repository";
import { CustomerService } from "../services/customer/customer.service";

@Injectable({
  providedIn: 'root',
})

export class CustomerRepositoryImpl implements CustomerRepository {

  constructor(private customerService: CustomerService) { }

  getCustomerByEmail(email: string): Observable<Customer> {
    return this.customerService.getCustomerByEmail(email);
  }

  createCustomer(customer: Customer) {
    return this.customerService.createCustomer(customer);
  }

  getAllCustomerByRole(role: string): Observable<Customer[]> {
    return this.customerService.getAllCustomerByRole(role);
  }

  getCustumerMultipleParameter(firstName: string, lastName: string, phone: string, email: string, role: string): Observable<Customer[]> {
    return this.customerService.getCustumerMultipleParameter(firstName, lastName, phone, email, role);
  }
}
