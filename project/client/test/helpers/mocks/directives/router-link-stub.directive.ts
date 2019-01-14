import { Input, Directive } from '@angular/core';

@Directive({ selector: '[routerLink]' })
export class RouterLinkStubDirective {
  @Input() routerLink: string;
}