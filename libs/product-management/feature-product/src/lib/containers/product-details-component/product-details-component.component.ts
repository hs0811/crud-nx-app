import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductFacadeService } from '../../../../../domian/src/lib/application/product.facade.service'
import { Product } from 'libs/product-management/domian/src/lib/entities/product';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductDetailsComponent implements OnInit {
  getloadproduct$ = this.productFacade.products$;
  myForm: FormGroup;
  product: Product = {} as Product;

  constructor(private formBuilder: FormBuilder, private productFacade: ProductFacadeService, private router: Router)
 { this.myForm = formBuilder.group({ ProductName: '', ProductDescription: '', ID: '', QTY: '', Status: '' }) }
  ngOnInit()
  { 
    this.productFacade.loadProducts();
  }
  addProduct() {
    this.product = this.myForm.value
    this.productFacade.addProduct(this.product);
    this.router.navigate(['/product-management']);
  }

  deleteProduct(id:number){
    this.productFacade.removeProduct(id);
}
updateProduct(id:number){
  this.productFacade.getProductForUpdate(id)
  this.router.navigate(['/product-management/products/productEdit'])
}
}