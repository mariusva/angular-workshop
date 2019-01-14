import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-likes',
  template: ``
})
export class LikesStubComponent {
  @Input() liked;
  @Input() likesNo;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onToggleLike = new EventEmitter();
}
