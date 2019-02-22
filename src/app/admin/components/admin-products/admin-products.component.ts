import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService) { 
     this.subscription = this.productService.getAll()
      .subscribe(products => this.filteredProducts = this.products = products.map(
          product => { 
            return <Product> {
              title: product.payload.val()['title'],
              category: product.payload.val()['category'],
              imageUrl: product.payload.val()['imageUrl'],
              price: product.payload.val()['price'],
              key: product.key
            }
          }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query:string) {
    this.filteredProducts = (query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;
  }

}