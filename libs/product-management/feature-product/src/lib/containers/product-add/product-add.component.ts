import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductFacadeService } from 'libs/product-management/domian/src/lib/application/product.facade.service';
import { Product } from 'libs/product-management/domian/src/lib/entities/product';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})


export class ProductAddComponent implements OnInit {

myForm:FormGroup;
product: Product ={} as Product

  constructor(private formBuilder:FormBuilder, private productFacade: ProductFacadeService,private router:Router ) {
    this.myForm = formBuilder.group(
      {
        ProductName :'',
        ProductDescription:'',
        QTY:'',
        Status:''
      }
    )
  }

  ngOnInit() {
    
  }
  addProduct(){
    this.product= this.myForm.value
    this.productFacade.addProduct(this.product);
    this.router.navigate(['/product-management']);
  }


}
