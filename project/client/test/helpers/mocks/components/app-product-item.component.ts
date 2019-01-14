import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  template: `
    {{ product }}
  `
})
export class ProductItemStubComponent {
  @Input() product;
}
