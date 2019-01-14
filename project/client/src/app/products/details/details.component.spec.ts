import { async, ComponentFixture, TestBed, flush, fakeAsync, tick } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../../../test/helpers/mocks/services/activated-route-stub.service';
import { ProductsService } from '../products.service';
import { StubProductService } from '../../../../test/helpers/mocks/services/product-service-stub.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let productService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: ProductsService, useClass: StubProductService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    productService = TestBed.get(ProductsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the getProducts method on the ProductService', () => {
    expect(productService.getProduct).toHaveBeenCalledTimes(1);
  });

  it('should set the product on the product property', () => {
    expect(component.product).toEqual({
      'id': 1400,
      'title': 'Product title',
      'price': 150,
      'imageSrc': 'https://images.pexels.com/photos/1549702/pexels-photo-1549702.jpeg?auto=compress&cs=tinysrgb&h=250&w=350',
      'description':
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries`,
      'likesNo': 32,
      'liked': true,
      'commentsNo': 12,
      'category': 'tech'
    });
  });
});
