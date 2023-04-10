import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { productFeatureRouting } from './product-feature-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './containers/product-details-component/product-details-component.component';
import { ProductAddComponent } from './containers/product-add/product-add.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';

@NgModule({
  imports: [
     CommonModule,
     productFeatureRouting, 
     FormsModule,
     ReactiveFormsModule
    ],
  declarations: [
    ProductDetailsComponent,
    ProductAddComponent,
    ProductEditComponent,

  ],
})
export class ProductManagementProductFeaturesModule {}
