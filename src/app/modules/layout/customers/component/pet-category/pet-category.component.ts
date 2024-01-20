import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { PetCategory } from 'src/app/core/models/pet-category.model';
import { PetCategoryDTO } from 'src/app/infrastructure/dto/pet-category.dto';
import { PetCategoryService } from 'src/app/infrastructure/services/petcategory/pet-category.service';

@Component({
  selector: 'app-pet-category',
  templateUrl: './pet-category.component.html',
  styleUrls: ['./pet-category.component.css']
})
export class PetCategoryComponent implements OnInit {

  @Output() mgPetCategoryEvent = new EventEmitter<number>();

  myControl = new FormControl('');
  petCategoryDTOs: PetCategoryDTO[] = [];
  filteredOptions!: Observable<PetCategoryDTO[]>;

  idPetCategoryValue: number | undefined;

  constructor(private petCategoryService: PetCategoryService) { }

  ngOnInit() {
    this.petCategoryService
      .getAllPetCategory()
      .subscribe({
        next: (petCategories: PetCategory[]) => {
          petCategories.forEach((data: PetCategory) => {
            this.petCategoryDTOs.push({ id: data.id, name: data.name, description: data.description, active: data.active });
          })

          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
          );
        },
        error: (res: any) => console.log("error", res)
      })
  }

  private _filter(value: string): PetCategoryDTO[] {
    const filterValue = value.toLowerCase();

    return this.petCategoryDTOs.filter((option: PetCategoryDTO) => option.name.toLowerCase().includes(filterValue));
  }

  selectedPetCategory(id: number): void {
    this.idPetCategoryValue = id;
    this.mgPetCategoryEvent.emit(this.idPetCategoryValue);
  }
}
