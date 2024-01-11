import { CustomerDTO } from "src/app/infrastructure/dto/customer.dto";
import { Customer } from "../models/customer.model";

export class CustomerMapper {
  static fromApiToDomain(apiCustomerDTO: CustomerDTO): Customer {
    return {
      id: apiCustomerDTO.id,
      firstName: apiCustomerDTO.firstName,
      lastName: apiCustomerDTO.lastName,
      homeAddress: apiCustomerDTO.homeAddress,
      phone: apiCustomerDTO.phone,
      email: apiCustomerDTO.email,
      isOlder: apiCustomerDTO.isOlder,
      userId: apiCustomerDTO.userId
    };
  }

  static fromDomainToApi(domainCustomer: Customer): CustomerDTO {
    return {
      id: domainCustomer.id,
      firstName: domainCustomer.firstName,
      lastName: domainCustomer.lastName,
      homeAddress: domainCustomer.homeAddress,
      phone: domainCustomer.phone,
      email: domainCustomer.email,
      isOlder: domainCustomer.isOlder,
      userId: domainCustomer.userId
    };
  }
}
