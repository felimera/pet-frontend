import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { TypeFigure } from 'src/app/core/models/type-figure.model';
import { TypeFigureDTO } from 'src/app/infrastructure/dto/type-figure.dto';
import { TypeFigureService } from 'src/app/infrastructure/services/typefigure/type-figure.service';

@Component({
  selector: 'app-type-figure',
  templateUrl: './type-figure.component.html',
  styleUrls: ['./type-figure.component.css']
})
export class TypeFigureComponent implements OnInit {

  @Output() mgTypeFigureEvent = new EventEmitter<number>();

  myControl = new FormControl('');
  typeFigureDTOs: TypeFigureDTO[] = [];
  filteredOptions!: Observable<TypeFigureDTO[]>;

  idTypeFigureValue: number | undefined;

  constructor(private typeFigureService: TypeFigureService) { }

  ngOnInit() {
    this.typeFigureService
      .getAllTypeFigure()
      .subscribe({
        next: (typeFigures: TypeFigure[]) => {
          typeFigures.forEach((data: TypeFigure) => {
            this.typeFigureDTOs.push({ id: data.id, name: data.name, description: data.description, active: data.active });
          })

          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
          );
        },
        error: (res: any) => console.log("error", res)
      })
  }

  private _filter(value: string): TypeFigureDTO[] {
    const filterValue = value.toLowerCase();

    return this.typeFigureDTOs.filter((option: TypeFigureDTO) => option.name.toLowerCase().includes(filterValue));
  }

  selectedTypeFigureValue(id: number): void {
    this.idTypeFigureValue = id;
    this.mgTypeFigureEvent.emit(this.idTypeFigureValue);
  }
}
