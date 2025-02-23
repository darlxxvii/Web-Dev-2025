import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-root',
  imports: [ ProductListComponent, CommonModule ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Nazerke's online-store";
  categories = ['Продукты питания', 'Косметика', 'Уход', 'Парфюмерия'];
  products: Record<string, { 
    id: number,
    images: string[];
    name: string;
    description: string;
    rating: number;
    likes: number;
    link: string;
  }[]> = {
    'Продукты питания': [
      {
        id: 1,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h2f/hcc/65753894486046.jpg?format=gallery-medium'
        ],
        name: 'Adal молоко ',
        description: 'Продукты наших ферм 3.2% 925 мл',
        rating: 4.8,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/adal-moloko-produkty-nashih-ferm-3-2-925-ml-100982670/?c=750000000'
      },
      {
        id: 2,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pec/p3e/5871312.jpg?format=gallery-medium'
        ],
        name: 'Borjomi ',
        description: 'лечебно-столовая газированная 0.5 л',
        rating: 5.0,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/borjomi-lechebno-stolovaja-gazirovannaja-0-5-l-100803209/?c=750000000'
      },
      {
        id: 3,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h33/h93/63892439203870.jpg?format=gallery-medium'
        ],
        name: 'Gracio ',
        description: 'нектар вишня 0.95 л',
        rating: 5.0,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/gracio-nektar-vishnja-0-95-l-100217456/?c=750000000'
      },
      {
        id: 4,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h77/h2d/86258013274142.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/h68/h61/86258013339678.jpg?format=gallery-large',
        ],
        name: 'молоко Lactel',
        description: 'с витамином D3 молоко 2.5% 1000 мл',
        rating: 5.0,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/lactel-s-vitaminom-d3-moloko-2-5-1000-ml-100223139/?c=750000000'
      },
      {
        id: 5,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pd4/p55/11814863.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p9b/p55/11814865.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p7f/p55/11814866.jpg?format=gallery-medium'
        ],
        name: 'Snickers шоколадный батончик ',
        description: 'Snickers Карамель и нуга шоколадный батончик молочный 50.5 г',
        rating: 4.9,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/snickers-karamel-i-nuga-shokoladnyi-batonchik-molochnyi-50-5-g-100801723/?c=750000000'
      }
    ],
    'Косметика': [
      {
        id: 6,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/pa6/p88/18255090.jpg?format=gallery-large'
        ],
        name: 'MISS TAIS ',
        description: 'Mauve карандаш коричневый №765',
        rating: 4.9,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/miss-tais-mauve-karandash-korichnevyi-765-100155528/?c=750000000'
      },
      {
        id: 7,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p80/p22/17173988.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p64/p22/17173989.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf8/p1f/17173990.jpg?format=gallery-medium'
        ],
        name: 'Gabrini гель',
        description: ' Brow Fixing & Soap effect прозрачный 8 мл',
        rating: 4.6,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/gabrini-gel-brow-fixing-soap-effect-prozrachnyi-8-ml-105169657/?c=750000000'
      },
      {
        id: 8,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pa3/pdb/18363782.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pbf/pdb/18363783.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf8/pdb/18363785.jpg?format=gallery-medium'
        ],
        name: 'Groinneya ',
        description: 'TJ01 пучковые C 0.03 мм черный 10 мм, 16 мм',
        rating: 4.7,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/groinneya-tj01-puchkovye-c-0-03-mm-chernyi-10-mm-16-mm-122310719/?c=750000000'
      },
      {
        id: 9,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p0d/pe8/10711556.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p62/pe8/10711559.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pce/pea/10711560.png?format=gallery-medium'
        ],
        name: 'Тушь для ресниц ',
        description: 'Vivienne Sabo Cabaret для объема черный',
        rating: 4.8,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/vivienne-sabo-cabaret-dlja-ob-ema-chernyi-17400135/?c=750000000'
      },
      {
        id: 10,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h15/h8c/86638998585374.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hf7/h39/86638998650910.png?format=gallery-medium'
        ],
        name: 'Eveline Cosmetics Wonder Match ',
        description: 'тональный крем 05 Light Porcelain 30 мл',
        rating: 4.7,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/eveline-cosmetics-wonder-match-tonal-nyi-krem-05-light-porcelain-30-ml-104989360/?c=750000000'
      }
    ],
    'Уход': [
      {
        id: 11,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hef/h6e/86640643702814.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h1d/h3b/86640324083742.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hd5/h66/86640324116510.jpg?format=gallery-medium'
        ],
        name: 'Celimax тонер',
        description: ' Dual Barrier 150 мл',
        rating: 5.0,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/celimax-toner-dual-barrier-150-ml-108098827/?c=750000000'
      },
      {
        id: 12,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hd3/hb9/86726530433054.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc5/h5c/86726530465822.jpg?format=gallery-medium'
        ],
        name: 'Dr. Althea крем',
        description: ' 345 Relief для лица 50 мл',
        rating: 5.0,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000'
      },
      {
        id: 13,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p20/pb5/21586296.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p03/pb5/21586297.jpg?format=gallery-medium'
        ],
        name: 'Ollin Professional',
        description: 'Perfect Hair 15 в 1 крем-спрей 250 мл',
        rating: 4.9,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-krem-sprei-250-ml-100008645/?c=750000000'
      },
      {
        id: 14,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h3c/h2c/86609939333150.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h88/h11/86609937596446.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h88/h11/86609937596446.jpg?format=gallery-medium'
        ],
        name: 'AXIS-Y сыворотка ',
        description: 'Dark Spot Correcting Glow для лица 50 мл',
        rating: 4.7,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-104067981/?c=750000000'
      },
      {
        id: 15,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hf4/h54/86777155158046.jpg?format=gallery-medium', 
          'https://resources.cdn-kaspi.kz/img/m/p/hc0/hcb/86777155256350.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h23/hbb/86777155354654.jpg?format=gallery-medium'
        ],
        name: 'SPLAT',
        description: 'зубная паста Биокальций 100 мл',
        rating: 5.0,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/splat-zubnaja-pasta-biokal-tsii-100-ml-100194771/?c=750000000'
      }
    ],
    'Парфюмерия': [
      {
        id: 16, 
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p1e/p1d/2324495.jpg?format=gallery-large',
          'https://resources.cdn-kaspi.kz/img/m/p/pda/p2d/2324504.jpg?format=gallery-large'
        ],
        name: 'Boadicea the Victorious Hasu ',
        description: 'духи PARFUM 100 мл',
        rating: 4.8,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/boadicea-the-victorious-hasu-duhi-parfum-100-ml-uniseks-128322628/?c=750000000'
      },
      {
        id: 17,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h7f/h3c/85223894253598.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h61/h2c/85223894319134.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p72/pff/23867533.jpg?format=gallery-medium'
        ],
        name: 'Tiziana Terenzi Tyl assoluto',
        description: 'Tiziana Terenzi Tyl assoluto',
        rating: 4.7,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/tiziana-terenzi-tyl-assoluto-ekstrakt-duhov-extrait-de-parfum-100-ml-uniseks-116788113/?c=750000000'
      },
      {
        id: 18,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha7/h32/64307031900190.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc7/hbc/81690557349918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p1a/pa6/24678126.jpg?format=gallery-medium'
        ],
        name: 'GUCCI 1921 ',
        description: 'парфюмерная вода EDP 100 мл',
        rating: 5.0,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/gucci-1921-parfjumernaja-voda-edp-100-ml-uniseks-103627121/?c=750000000'
      },
      {
        id: 19,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hc5/h4e/86330777272350.jpg?format=gallery-large'
        ],
        name: 'Louis Vuitton Symphony ',
        description: 'Louis Vuitton Symphony ',
        rating: 4.95,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/louis-vuitton-symphony-parfjumernaja-voda-edp-100-ml-dlja-zhenschin-120620335/?c=750000000'
      },
      {
        id: 20,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pda/p9b/11288113.jpg?format=gallery-medium',
        ],
        name: 'Louis Vuitton Afternoon ',
        description: 'Swim парфюмерная вода EDP 200 мл',
        rating: 4.9,
        likes: 0,
        link: 'https://kaspi.kz/shop/pf/louis-vuitton-afternoon-swim-parfjumernaja-voda-edp-200-ml-uniseks-130885493/?c=750000000'
      }
    ]
  }
  selectedCategory: string = this.categories[0];

  selectCategory(category: string) {
    this.selectedCategory = category;
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

  trackByFn(index: number, product: Product) {
    return product.name;
  }

}
