import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class DummyService {
  canDoSmth$: Observable<boolean> = of(true);
  canDoSmthElse$: Observable<boolean> = of(false);
}
