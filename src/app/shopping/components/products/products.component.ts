import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart$: Observable<ShoppingCart>;
  category: string;
  // subscription: Subscription;

  constructor
    (private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService) { 

  }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.populateProducts();
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
    this.products.filter( p => p.category === this.category) : 
    this.products;
  }

  private populateProducts() {

    this.productService
      .getAll()
      .subscribe(products =>  { 
      this.products = products.map( product => {
          return <Product> {
            title: product.payload.val()['title'],
            category: product.payload.val()['category'],
            imageUrl: product.payload.val()['imageUrl'],
            price: product.payload.val()['price'],
            key: product.key
          }
        })

        this.route.queryParamMap.subscribe(params => {
          this.category = params.get('category');
          this.applyFilter();
        })
      })
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
