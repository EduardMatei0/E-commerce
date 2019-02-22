import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  categories$;

  constructor(private categoryService: CategoryService, 
              private productService: ProductService) { 
    this.categories$ = categoryService.getAll();  
  }


}
