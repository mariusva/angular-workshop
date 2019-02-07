import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { SharedModule } from "./../shared/shared.module";

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsService } from './products.service';
import { ProductsRoutingModule } from './products-routing.module';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CanActivateEditGuard } from './can-activate-edit.guard';
import { ProductsEditResolver } from "./products-edit.resolver";
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products.effects';
import { AddComponent } from './add/add.component';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products_state', reducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [ProductsListComponent, ProductItemComponent, DetailsComponent, EditComponent, AddComponent, AddFormComponent],
  exports: [ProductsListComponent],
  providers: [ProductsService, CanActivateEditGuard, ProductsEditResolver]
})
export class ProductsModule { }