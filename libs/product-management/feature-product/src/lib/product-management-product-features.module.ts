import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { productFeatureRouting } from './product-feature-routing';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './containers/product-details-component/product-details-component.component';

@NgModule({
  imports: [CommonModule, productFeatureRouting,  FormsModule],
  declarations: [
    ProductDetailsComponent,

  ],
})
export class ProductManagementProductFeaturesModule {}
