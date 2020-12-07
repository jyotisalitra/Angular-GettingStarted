import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import {ProductDetailGuard} from './product-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products' , component: ProductListComponent},
      {path: 'products/:id', 
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }