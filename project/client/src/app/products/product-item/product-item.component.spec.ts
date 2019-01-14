import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter, Pipe, PipeTransform, Directive } from '@angular/core';

import { ProductItemComponent } from './product-item.component';
import { RouterLinkStubDirective } from '../../../../test/helpers/mocks/directives/router-link-stub.directive';
import { ShortTextStubPipe } from '../../../../test/helpers/mocks/pipes/short-text-stub.pipe';
import { BadWordsStubPipe } from '../../../../test/helpers/mocks/pipes/bad-words-stub.pipe';
import { LikesStubComponent } from '../../../../test/helpers/mocks/components/app-likes-stub.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductItemComponent,
        LikesStubComponent,
        ShortTextStubPipe,
        BadWordsStubPipe,
        RouterLinkStubDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.product = {
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
    };
    fixture.detectChanges();
  });
});
