import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './containers/product-details-component/product-details-component.component';



const routes: Routes = [
    {
      path: 'products',
      component: ProductDetailsComponent,
      data: {
        title: null
      }, 
    },
    {
        path:'',
        redirectTo:'products',
        pathMatch:'full'
    }

];

@NgModule({
    imports: [CommonModule,
      RouterModule.forChild(routes),
    ],  
    exports: [RouterModule],
  })

export class productFeatureRouting {}