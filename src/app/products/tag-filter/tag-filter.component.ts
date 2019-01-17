import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.css']
})
export class TagFilterComponent implements OnChanges {

  @Input()
  set products(products: Product[]) {
    products.forEach(product => {
      if (!this.tags.includes(product.category)) {
        this.tags.push(product.category);
      }
    });
  }

  @Output() tagSelected: EventEmitter<string> = new EventEmitter();

  tags: string[] = [];
  selectedTag: string = "";

  constructor() { }

  ngOnChanges() {
    // this.products.forEach(product => {
    //   if(!this.tags.includes(product.category)) {
    //     this.tags.push(product.category);
    //   }
    // })
  }

  onSelectTag(tag: string) {
    this.selectedTag = tag;
    this.tagSelected.emit(tag);
  }
}
