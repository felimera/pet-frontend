import { Observable } from "rxjs";
import { TypeFigure } from "../models/type-figure.model";

export abstract class TypeFigureRepository {
  abstract getAllTypeFigure(): Observable<TypeFigure[]>;
}
