import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, every, map, startWith } from 'rxjs';
import { _MatAutocompleteBase } from '@angular/material/autocomplete';
import { CustomerDTO } from 'src/app/infrastructure/dto/customer.dto';
import { CustomerService } from 'src/app/infrastructure/services/customer/customer.service';
import { Customer } from 'src/app/core/models/customer.model';
import { Role } from '../../../../../shared/enum/role-enum';

@Component({
  selector: 'app-search-pet-owner',
  templateUrl: './search-pet-owner.component.html',
  styleUrls: ['./search-pet-owner.component.css']
})
export class SearchPetOwnerComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<number>();

  valueRadio: string = 'G';

  myControl = new FormControl('');
  customerSearch: CustomerDTO[] = [];
  customerSearchList: CustomerDTO[] = [];
  filteredOptions: Observable<string[]> | any;
  auto: _MatAutocompleteBase | any;

  firstNameValue: string = '';
  lastNameValue: string = '';
  emailValue: string = '';
  phoneValue: string = '';

  idCustomerValue: number | undefined;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {

    this.customerService
      .getAllCustomerByRole(Role.U)
      .subscribe({
        next: (customers: Customer[]) => {
          this.customerSearch = [];
          customers.forEach(entity => {
            this.customerSearch.push({ firstName: entity.firstName, lastName: entity.lastName, email: entity.email, homeAddress: entity.homeAddress, phone: entity.phone, isOlder: entity.isOlder, userId: entity.userId, id: entity.id });
          });

          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
          );

        },
        error: (error: any) => console.log(error)
      });
  }

  private _filter(value: string): CustomerDTO[] {
    const filterValue = value.toLowerCase();

    return this.customerSearch.filter((option: CustomerDTO) => this.combineFirstAndLastName(option).toLowerCase().includes(filterValue));
  }

  public combineFirstAndLastName(customerDTO: CustomerDTO): string {
    return customerDTO.firstName + ' ' + customerDTO.lastName;
  }

  btnSearch(): void {
    this.customerService
      .getCustumerMultipleParameter(this.firstNameValue, this.lastNameValue, this.phoneValue, this.emailValue, Role.U)
      .subscribe({
        next: (customers: Customer[]) => {
          this.customerSearchList = [];
          customers.forEach(entity => {
            this.customerSearchList.push({ firstName: entity.firstName, lastName: entity.lastName, email: entity.email, homeAddress: entity.homeAddress, phone: entity.phone, isOlder: entity.isOlder, userId: entity.userId, id: entity.id });
          });
        },
        error: (error: any) => console.log('error', error)
      })
  }

  addSelectedCustomer(id: number | undefined): void {
    this.idCustomerValue = id;
    this.messageEvent.emit(this.idCustomerValue);
  }

  isValidIcon(customer: CustomerDTO): boolean {
    return customer.id === this.idCustomerValue;
  }
  
  selectCustomer(id: number): void {
    this.idCustomerValue = id;
    this.messageEvent.emit(this.idCustomerValue);
  }
}
