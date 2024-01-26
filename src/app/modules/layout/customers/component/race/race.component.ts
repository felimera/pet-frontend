import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Race } from 'src/app/core/models/race.model';
import { RaceDTO } from 'src/app/infrastructure/dto/race.dto';
import { RaceService } from 'src/app/infrastructure/services/race/race.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  @Output() mgRaceEvent = new EventEmitter<number>();

  myControl = new FormControl('');
  raceDTOs: RaceDTO[] = [];
  filteredOptions!: Observable<RaceDTO[]>;

  idRaceValue: number | undefined;

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.raceService
      .getAllRace()
      .subscribe({
        next: (races: Race[]) => {
          races.forEach((data: Race) => {
            this.raceDTOs.push({ id: data.id, name: data.name, description: data.description, active: data.active });
          })

          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
          );
        },
        error: (res: any) => console.log("error", res)
      })
  }

  private _filter(value: string): RaceDTO[] {
    const filterValue = value.toLowerCase();

    return this.raceDTOs.filter((option: RaceDTO) => option.name.toLowerCase().includes(filterValue));
  }

  selectedRaceValue(id: number): void {
    this.idRaceValue = id;
    this.mgRaceEvent.emit(this.idRaceValue);
  }

}
