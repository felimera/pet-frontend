import { Observable } from "rxjs";
import { Color } from "../models/color.model";

export abstract class ColorRepository {
  abstract getAllColor(): Observable<Color[]>;
}
