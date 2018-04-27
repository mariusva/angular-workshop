import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ShortTextPipe } from "./short-text.pipe";

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { BadwordsPipe } from './badwords.pipe';
import { ZoomImageDirective } from './zoom-image.directive';
import { LikesComponent } from './likes/likes.component';
import { TagFilterComponent } from './tag-filter/tag-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductItemComponent,
    ShortTextPipe,
    BadwordsPipe,
    ZoomImageDirective,
    LikesComponent,
    TagFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
