import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductFacadeService } from 'libs/product-management/domian/src/lib/application/product.facade.service';
import { Product } from 'libs/product-management/domian/src/lib/entities/product';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {

  private productId:number | undefined;
  myForm: FormGroup
  product: Product | undefined = {} as Product
  constructor(private formBuilder: FormBuilder, private productFacade: ProductFacadeService,private router:Router) {
    this.myForm = formBuilder.group(
      {
        ProductName: '',
        ProductDescription: '',
        QTY: '',
        Status: ''
      }
    )
  }
  ngOnInit(): void {
   
    const ProductData$ = this.productFacade.singleproductSubject$.subscribe(
      {
        next: (val) => {
          this.productId=val?.ID
          this.product = val;
          console.log(this.product);
          this.myForm.patchValue({
            ProductName: this.product?.ProductName,
            ProductDescription: this.product?.ProductDescription,
            QTY: this.product?.QTY,
            Status: this.product?.Status
          })
        },
        error: (err) => console.log(err)
      }

    )
  }
  updateProduct() {

    this.product = this.myForm.value;
    if(this.product && this.productId)
    {
      this.product.ID=this.productId;
    }
    this.productFacade.updateProduct(this.product);
    this.router.navigate(['product-management'])
  }
}


