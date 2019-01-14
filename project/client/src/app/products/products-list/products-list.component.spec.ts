import { ProductsListComponent } from './products-list.component';
import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { ProductItemStubComponent } from '../../../../test/helpers/mocks/components/app-product-item.component';
import { TagFilterStubComponent } from '../../../../test/helpers/mocks/components/app-tag-filter-stub.component';
import { ProductsService } from '../products.service';
import { StubProductService } from '../../../../test/helpers/mocks/services/product-service-stub.service';

describe('ProductsListComponent', () => {
  let fixture: ComponentFixture<ProductsListComponent>;
  let component: ProductsListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsListComponent,
        ProductItemStubComponent,
        TagFilterStubComponent
      ],
      providers: [
        { provide: ProductsService, useClass: StubProductService }
      ]
    });

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-product-item component for each product in the list', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('app-product-item').length).toEqual(2);
  });

  it('shold render an error message if errorMessage is set', () => {
    component.errorMessage = 'Internal server error!';

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.alert-danger')).toBeTruthy();
  });
});
