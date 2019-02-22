import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DataTableModule } from 'angular-6-datatable';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  imports: [
    SharedModule
  ],
  providers: [
    AdminAuthGuardService
  ]
})
export class AdminModule { }
