
import {of as observableOf,  Observable } from 'rxjs';

import {delay} from 'rxjs/operators';
import { CanActivate } from "@angular/router";




export class CanActivateEditGuard implements CanActivate {
  canActivate() {
    return observableOf(true).pipe(delay(1000));
  }
}