import { CanActivate } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export class CanActivateEditGuard implements CanActivate {
  canActivate() {
    return Observable.of(true).delay(1000);
  }
}