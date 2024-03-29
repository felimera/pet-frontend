import { Observable } from "rxjs";
import { Customer } from "../models/customer.model";

export abstract class CustomerRepository {
  abstract getCustomerByEmail(email: string): Observable<Customer>;
  abstract createCustomer(customer: Customer): Observable<Customer>;
  abstract getAllCustomerByRole(role: string): Observable<Customer[]>;
  abstract getCustumerMultipleParameter(firstName: string, lastName: string, phone: string, email: string, role: string): Observable<Customer[]>;
}
