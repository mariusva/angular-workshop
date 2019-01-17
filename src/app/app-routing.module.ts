import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CanActivateProducts } from "./products/guards/can-activate-products.guard";

export const routes: Routes = [
  {
    path: 'products/:name',
    canActivate: [CanActivateProducts],
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {}
