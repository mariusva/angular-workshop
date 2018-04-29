import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router'; 

import { TagFilterComponent } from "./tag-filter/tag-filter.component";
import { BadwordsPipe } from './badwords.pipe';
import { ShortTextPipe } from "./short-text.pipe";
import { ZoomImageDirective } from "./zoom-image.directive";
import { LikesComponent } from "./likes/likes.component";
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports:[CommonModule, RouterModule],
  declarations: [TagFilterComponent, BadwordsPipe, ShortTextPipe, ZoomImageDirective, TagFilterComponent, LikesComponent, NavbarComponent, DashboardComponent, NotFoundComponent],
  exports:[TagFilterComponent, BadwordsPipe, ShortTextPipe, ZoomImageDirective, TagFilterComponent, LikesComponent, NavbarComponent],
  providers:[{
    provide: 'API_URI',
    useValue: 'http://localhost:3000'
  }]
})
export class SharedModule {}