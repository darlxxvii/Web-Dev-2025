import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Product {
  images: string[];
  name: string;
  description: string;
  rating: number;
  link: string;
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h2d/86258013274142.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h61/86258013339678.jpg?format=gallery-large',
      ],
      name: 'молоко Lactel',
      description: 'с витамином D3 молоко 2.5% 1000 мл',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/lactel-s-vitaminom-d3-moloko-2-5-1000-ml-100223139/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/p55/11814863.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/p55/11814865.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/p55/11814866.jpg?format=gallery-medium'
      ],
      name: 'Snickers шоколадный батончик ',
      description: 'Snickers Карамель и нуга шоколадный батончик молочный 50.5 г',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/snickers-karamel-i-nuga-shokoladnyi-batonchik-molochnyi-50-5-g-100801723/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3c/h2c/86609939333150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h11/86609937596446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h11/86609937596446.jpg?format=gallery-medium'
      ],
      name: 'AXIS-Y сыворотка ',
      description: 'Dark Spot Correcting Glow для лица 50 мл',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-104067981/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/p88/18255090.jpg?format=gallery-large'
      ],
      name: 'MISS TAIS ',
      description: 'Mauve карандаш коричневый №765',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/miss-tais-mauve-karandash-korichnevyi-765-100155528/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p80/p22/17173988.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p64/p22/17173989.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/p1f/17173990.jpg?format=gallery-medium'
      ],
      name: 'Gabrini гель',
      description: ' Brow Fixing & Soap effect прозрачный 8 мл',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/gabrini-gel-brow-fixing-soap-effect-prozrachnyi-8-ml-105169657/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p20/pb5/21586296.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p03/pb5/21586297.jpg?format=gallery-medium'
      ],
      name: 'Ollin Professional',
      description: 'Perfect Hair 15 в 1 крем-спрей 250 мл',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-krem-sprei-250-ml-100008645/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/pdb/18363782.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbf/pdb/18363783.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/pdb/18363785.jpg?format=gallery-medium'
      ],
      name: 'Groinneya ',
      description: 'TJ01 пучковые C 0.03 мм черный 10 мм, 16 мм',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/groinneya-tj01-puchkovye-c-0-03-mm-chernyi-10-mm-16-mm-122310719/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h54/86777155158046.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hc0/hcb/86777155256350.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h23/hbb/86777155354654.jpg?format=gallery-medium'
      ],
      name: 'SPLAT',
      description: 'зубная паста Биокальций 100 мл',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/splat-zubnaja-pasta-biokal-tsii-100-ml-100194771/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pe8/10711556.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p62/pe8/10711559.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pce/pea/10711560.png?format=gallery-medium'
      ],
      name: 'Тушь для ресниц ',
      description: 'Vivienne Sabo Cabaret для объема черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/vivienne-sabo-cabaret-dlja-ob-ema-chernyi-17400135/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h8c/86638998585374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h39/86638998650910.png?format=gallery-medium'
      ],
      name: 'Eveline Cosmetics Wonder Match ',
      description: 'тональный крем 05 Light Porcelain 30 мл',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/eveline-cosmetics-wonder-match-tonal-nyi-krem-05-light-porcelain-30-ml-104989360/?c=750000000'
    },

  ];

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

  changeImage(image: string) {
    this.selectedImage = image;
  }
}