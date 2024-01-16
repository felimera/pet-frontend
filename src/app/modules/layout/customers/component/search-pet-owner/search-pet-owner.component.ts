import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { _MatAutocompleteBase } from '@angular/material/autocomplete';
import { CustomerDTO } from 'src/app/infrastructure/dto/customer.dto';

@Component({
  selector: 'app-search-pet-owner',
  templateUrl: './search-pet-owner.component.html',
  styleUrls: ['./search-pet-owner.component.css']
})
export class SearchPetOwnerComponent implements OnInit {

  valueRadio: string = 'G';

  myControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three'];
  customerSearch: CustomerDTO[] = [
    { id: 1, firstName: 'Andres Felipe', lastName: 'Mera', homeAddress: '', phone: '', email: '', isOlder: false, userId: 0 },
    { id: 2, firstName: 'Manuela', lastName: 'Ramirez', homeAddress: '', phone: '', email: '', isOlder: false, userId: 0 }
  ];
  filteredOptions: Observable<string[]> | any;
  auto: _MatAutocompleteBase | any;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): CustomerDTO[] {
    const filterValue = value.toLowerCase();

    return this.customerSearch.filter(option => this.combineFirstAndLastName(option).toLowerCase().includes(filterValue));
  }

  public combineFirstAndLastName(customerDTO: CustomerDTO): string {
    return customerDTO.firstName + ' ' + customerDTO.lastName;
  }
}
