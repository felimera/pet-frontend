import { Observable } from "rxjs";
import { BodySize } from "../models/body-size.model";

export abstract class BodySizeRepository {
  abstract getAllBodySize(): Observable<BodySize[]>;
}
