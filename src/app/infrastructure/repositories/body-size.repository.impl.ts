import { BodySizeRepository } from "src/app/core/repositories/body-size.repository";
import { BodySizeService } from "../services/bodysize/body-size.service";
import { Observable } from "rxjs";
import { BodySize } from "src/app/core/models/body-size.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class BodySizeRepositoryImpl implements BodySizeRepository {

  constructor(private bodySizeService: BodySizeService) { }

  getAllBodySize(): Observable<BodySize[]> {
    return this.bodySizeService.getAllBodySize();
  }
}
