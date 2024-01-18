import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Color } from 'src/app/core/models/color.model';
import { ColorDTO } from 'src/app/infrastructure/dto/color.dto';
import { ColorService } from 'src/app/infrastructure/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  myControl = new FormControl('');
  colorDTOs: ColorDTO[] = [];
  filteredOptions!: Observable<ColorDTO[]>;

  constructor(private colorService: ColorService) { }

  ngOnInit() {

    this.colorService
      .getColorAll()
      .subscribe({
        next: (colors: Color[]) => {
          colors.forEach((data: Color) => {
            this.colorDTOs.push({ id: data.id, name: data.name, code: data.code, active: data.active });
          })

          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
          );
        },
        error: (res: any) => console.log("error", res)
      })

  }

  private _filter(value: string): ColorDTO[] {
    const filterValue = value.toLowerCase();

    return this.colorDTOs.filter((option: ColorDTO) => option.name.toLowerCase().includes(filterValue));
  }
}
