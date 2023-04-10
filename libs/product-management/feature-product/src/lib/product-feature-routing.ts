import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './containers/product-details-component/product-details-component.component';
import { ProductAddComponent } from './containers/product-add/product-add.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';



const routes: Routes = [
    {
      path: '',
      component: ProductDetailsComponent, 
    },
    {
        path:'productEdit',
        component:ProductEditComponent
    },
    {
        path:'productAdd',
        component:ProductAddComponent
        
    }

];

@NgModule({
    imports: [CommonModule,
      RouterModule.forChild(routes),
    ],  
    exports: [RouterModule],
  })

export class productFeatureRouting {}