import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { _MatAutocompleteBase } from '@angular/material/autocomplete';
import { CustomerDTO } from 'src/app/infrastructure/dto/customer.dto';
import { CustomerService } from 'src/app/infrastructure/services/customer/customer.service';
import { Customer } from 'src/app/core/models/customer.model';

@Component({
  selector: 'app-search-pet-owner',
  templateUrl: './search-pet-owner.component.html',
  styleUrls: ['./search-pet-owner.component.css']
})
export class SearchPetOwnerComponent implements OnInit {

  valueRadio: string = 'G';

  myControl = new FormControl('');
  customerSearch: CustomerDTO[] = [];
  filteredOptions: Observable<string[]> | any;
  auto: _MatAutocompleteBase | any;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {

    this.customerService
      .getAllCustomerByRole(Role.U)
      .subscribe({
        next: (customers: Customer[]) => {
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
}
