import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { BodySize } from 'src/app/core/models/body-size.model';
import { BodySizeDTO } from 'src/app/infrastructure/dto/body-size.dto';
import { BodySizeService } from 'src/app/infrastructure/services/bodysize/body-size.service';

@Component({
  selector: 'app-body-size',
  templateUrl: './body-size.component.html',
  styleUrls: ['./body-size.component.css']
})
export class BodySizeComponent implements OnInit {

  @Output() mgBodySizeEvent = new EventEmitter<number>();

  myControl = new FormControl('');
  bodySizeDTOs: BodySizeDTO[] = [];
  filteredOptions!: Observable<BodySizeDTO[]>;

  idBodySizeValue: number | undefined;

  constructor(private bodySizeService: BodySizeService) { }

  ngOnInit() {
    this.bodySizeService
      .getAllBodySize()
      .subscribe({
        next: (bodySizes: BodySize[]) => {
          bodySizes.forEach((data: BodySize) => {
            this.bodySizeDTOs.push({ id: data.id, name: data.name, description: data.description, active: data.active });
          })

          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
          );
        },
        error: (res: any) => console.log("error", res)
      })
  }

  private _filter(value: string): BodySizeDTO[] {
    const filterValue = value.toLowerCase();

    return this.bodySizeDTOs.filter((option: BodySizeDTO) => option.name.toLowerCase().includes(filterValue));
  }

  selectedBodySize(id: number): void {
    this.idBodySizeValue = id;
    this.mgBodySizeEvent.emit(this.idBodySizeValue);
  }
}
