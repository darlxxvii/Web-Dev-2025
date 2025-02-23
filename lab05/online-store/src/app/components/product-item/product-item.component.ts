import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model'; // Проверь путь

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule] ,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})

export class ProductItemComponent {
  @Input() product!: Product;

  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
  
  share(product: Product, platform: 'whatsapp' | 'telegram') {
      let url = '';
      if (platform === 'whatsapp') {
        url = 'https://api.whatsapp.com/send?text=Check%20this%20out:%20${encodeURIComponent(product.link)}';
      } else {
        url = 'https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=Check%20this%20product%20out!';
      }
      window.open(url, '_blank');
    }
  
  selectedImage: string = '';

  changeImage(product: Product, image: string) {
    product.selectedImage = image;
  }

  trackByFn(index: number, item: any) {
    return item.id; 
  }
}
