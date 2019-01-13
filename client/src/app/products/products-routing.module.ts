import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsListComponent } from "./products-list/products-list.component";
import { DetailsComponent } from "../products/details/details.component";
import { EditComponent } from "./edit/edit.component";
import { CanActivateEditGuard } from "./can-activate-edit.guard";
import { ProductsEditResolver } from "./products-edit.resolver";

const ProductsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
    data: { pageTitle: "Products" }
  },
  {
    path: 'products/:id',
    component: DetailsComponent
  },
  {
    path: 'products/:id/edit',
    component: EditComponent,
    resolve: { product: ProductsEditResolver },
    canActivate: [CanActivateEditGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}