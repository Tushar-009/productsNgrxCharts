import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectProducts, productStore } from '../../../store/product.store';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-table',
  standalone: true,
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  imports: [CommonModule],
})
export class ProductTableComponent {
  products = selectProducts;

  @Output() editProduct = new EventEmitter<Product>();

  delete(id: number) {
    productStore.remove(id);
  }

 edit(product: Product) {
  this.editProduct.emit(product);
}

}
