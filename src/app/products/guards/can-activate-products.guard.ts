import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
// import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class CanActivateProducts implements CanActivate {
  canActivate() {
    const o$ = of(true).pipe(
      delay(2000)
    );

    return o$;
  }
}
