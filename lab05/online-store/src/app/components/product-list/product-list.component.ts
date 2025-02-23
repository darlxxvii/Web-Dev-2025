import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model'; 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  removeProduct(productId: number) {  
    console.log(`Before removal:`, this.products);
    this.products = this.products.filter(product => product.id !== productId);
    console.log(`After removal:`, this.products);
  }
  
  
}
