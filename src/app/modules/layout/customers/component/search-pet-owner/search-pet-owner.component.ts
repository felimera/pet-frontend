import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { _MatAutocompleteBase } from '@angular/material/autocomplete';
import { CustomerDTO } from 'src/app/infrastructure/dto/customer.dto';

interface CustomerSearch {
  id: number,
  name: string
}

@Component({
  selector: 'app-search-pet-owner',
  templateUrl: './search-pet-owner.component.html',
  styleUrls: ['./search-pet-owner.component.css']
})
export class SearchPetOwnerComponent implements OnInit {

  valueRadio: string = 'G';

  myControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three'];
  customerSearch: CustomerSearch[] = [
    { id: 1, name: 'Andres Felipe Mera' },
    { id: 2, name: 'Manuela Ramirez' }
  ];
  filteredOptions: Observable<string[]> | any;
  auto: _MatAutocompleteBase | any;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): CustomerSearch[] {
    const filterValue = value.toLowerCase();

    return this.customerSearch.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
