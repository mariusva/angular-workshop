import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesComponent } from './likes/likes.component';
import { BadwordsPipe, ShortTextPipe } from './pipes';
import { ZoomImageDirective } from './directives/zoom-image.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LikesComponent, ZoomImageDirective, BadwordsPipe, ShortTextPipe],
  exports: [CommonModule, LikesComponent, ZoomImageDirective, BadwordsPipe, ShortTextPipe]
})
export class SharedModule {}
