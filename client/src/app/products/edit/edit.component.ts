import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: Product;
  productForm: FormGroup;
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.product = data.product);
    this.productForm = this.fb.group({
      title: ['', [], []],
      price: [0, [Validators.minLength(2)]]
    });

    this.route.url.subscribe(data => {
      this.editMode = data.some(item => item.path === 'edit');
    });

    this.productForm.patchValue(this.product);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
