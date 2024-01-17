import { Injectable } from "@angular/core";
import { ColorRepository } from "src/app/core/repositories/color.repository";
import { ColorService } from "../services/color/color.service";
import { Observable } from "rxjs";
import { Color } from "src/app/core/models/color.model";

@Injectable({
  providedIn: 'root',
})

export class ColorRepositoryImpl implements ColorRepository {
  constructor(private colorService: ColorService) { }

  getAllColor(): Observable<Color[]> {
    return this.colorService.getColorAll();
  }
}
