import { CanActivate } from "@angular/router";
import { of } from 'rxjs';

import { delay } from 'rxjs/operators';

export class CanActivateEditGuard implements CanActivate {
  canActivate() {
    return of(true)
      .pipe(delay(1000));
  }
}