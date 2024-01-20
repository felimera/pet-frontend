import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MassMeasurementUnits } from 'src/app/core/models/mass-measurement-units.model';
import { MassMeasurementUnitsDTO } from 'src/app/infrastructure/dto/mass-measurement-units.dto';
import { MassMeasurementUnitsService } from 'src/app/infrastructure/services/massmeasurementunits/mass-measurement-units.service';

@Component({
  selector: 'app-mass-measurement-units',
  templateUrl: './mass-measurement-units.component.html',
  styleUrls: ['./mass-measurement-units.component.css']
})
export class MassMeasurementUnitsComponent implements OnInit {

  @Output() mgMassMeasurementUnitsEvent = new EventEmitter<number>();

  myControl = new FormControl('');
  massMeasurementUnitsDTOs: MassMeasurementUnitsDTO[] = [];
  filteredOptions!: Observable<MassMeasurementUnitsDTO[]>;

  idMassMeasurementUnitsValue: number | undefined;

  constructor(private massMeasurementUnitsService: MassMeasurementUnitsService) { }

  ngOnInit() {
    this.massMeasurementUnitsService
      .getAllMassMeasurementUnits()
      .subscribe({
        next: (massMeasurementUnits: MassMeasurementUnits[]) => {
          massMeasurementUnits.forEach((data: MassMeasurementUnits) => {
            this.massMeasurementUnitsDTOs.push({ id: data.id, name: data.name, description: data.description, active: data.active });
          })

          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
          );
        },
        error: (res: any) => console.log("error", res)
      });
  }
  private _filter(value: string): MassMeasurementUnitsDTO[] {
    const filterValue = value.toLowerCase();

    return this.massMeasurementUnitsDTOs.filter((option: MassMeasurementUnitsDTO) => option.name.toLowerCase().includes(filterValue));
  }

  selectedMassMeasurementUnits(id: number): void {
    this.idMassMeasurementUnitsValue = id;
    this.mgMassMeasurementUnitsEvent.emit(this.idMassMeasurementUnitsValue);
  }
}
