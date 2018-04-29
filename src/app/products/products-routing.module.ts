import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsListComponent } from "./products-list/products-list.component";

const ProductsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
    data: { pageTitle: "Products" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}