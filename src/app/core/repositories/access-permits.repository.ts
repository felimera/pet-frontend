import { Observable } from "rxjs";
import { AccessPermits } from "../models/access-permits.model";

export abstract class AccessPermitsRepository {
  abstract getAccessPermitsByEmailCustomer(email: string): Observable<AccessPermits>;
}
