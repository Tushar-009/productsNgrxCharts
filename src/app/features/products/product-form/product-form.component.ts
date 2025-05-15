import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { productStore } from '../../../store/product.store';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class ProductFormComponent {
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id:[0, Validators.required],
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      price: [null, [Validators.required, Validators.min(1)]],
      status: ['', Validators.required],
    });
  }
  isEdit = false;
  @Input() set product(value: Product | null) {
    if (value) {
      console.log();
      
      this.isEdit = true;
      this.form.patchValue(value);
    }
  }
  // submit() {
  //   console.log(this.form.valid);
  //   console.log(this.form.value);
  //   if (this.form.valid) {
  //     productStore.add(this.form.value);
  //     this.form.reset();


  //   }
  // }
  submit() {
    console.log(this.form.valid);
    console.log(this.form.value);
    if (this.form.valid) {
      if (this.isEdit) {
        productStore.update(this.form.value)
      } else {
        productStore.add(this.form.value);
      }
      this.form.reset();
      this.isEdit = false;
    }
  }
}
