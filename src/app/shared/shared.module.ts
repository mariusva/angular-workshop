import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TagFilterComponent } from "./tag-filter/tag-filter.component";
import { BadwordsPipe } from './badwords.pipe';
import { ShortTextPipe } from "./short-text.pipe";
import { ZoomImageDirective } from "./zoom-image.directive";
import { LikesComponent } from "./likes/likes.component";

@NgModule({
  imports:[CommonModule],
  declarations: [TagFilterComponent, BadwordsPipe, ShortTextPipe, ZoomImageDirective, TagFilterComponent, LikesComponent],
  exports:[TagFilterComponent, BadwordsPipe, ShortTextPipe, ZoomImageDirective, TagFilterComponent, LikesComponent],
  providers:[{
    provide: 'API_URI',
    useValue: 'http://localhost:3000'
  }]
})
export class SharedModule {}