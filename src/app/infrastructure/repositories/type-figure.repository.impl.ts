import { TypeFigureRepository } from "src/app/core/repositories/type-figure.repository";
import { TypeFigureService } from "../services/typefigure/type-figure.service";
import { Observable } from "rxjs";
import { TypeFigure } from "src/app/core/models/type-figure.model";

export class TypeFigureRepositoryImpl implements TypeFigureRepository {

  constructor(private typeFigureService: TypeFigureService) { }

  getAllTypeFigure(): Observable<TypeFigure[]> {
    return this.typeFigureService.getAllTypeFigure();
  }
}
