import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-6-datatable';
import { AppRoutingModule } from '../app-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    CommonModule
  ],
  providers: [
    AuthService, 
    AuthGuardService, 
    UserService,  
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
