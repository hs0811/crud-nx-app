import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductFacadeService } from '../../../../../domian/src/lib/application/product.facade.service'
import { Product } from 'libs/product-management/domian/src/lib/entities/product';

@Component({
  selector: 'product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductDetailsComponent implements OnInit {
  getloadproduct$ = this.productFacade.products$;
  productName = '';
  productDescription = '';
  quantity = 0;
  status = 'In Stock';
  editMode = false;
  productId: number | null = null;

  constructor(private productFacade: ProductFacadeService) {}

  ngOnInit() {
    this.productFacade.loadProducts();
  }
  addProduct(product: Product): void {
    this.productFacade.addProduct(product);
  }

  // updateProduct(product: Product): void {
  //   this.productFacade.updateProduct(product);
  // }

  saveProduct() {
    const product: Product = {
      ProductName: this.productName,
      ProductDescription: this.productDescription,
      QTY: this.quantity,
      Status: this.status,
      ID: this.editMode ? this.productId! : Math.floor(Math.random() * 1000000)
    };
    if (this.editMode) {
      this.productFacade.updateProduct(product);
    } else {
      this.productFacade.addProduct(product);
    }
    this.clearForm();
  }

  editProduct(product: Product) {
    this.productName = product.ProductName;
    this.productDescription = product.ProductDescription;
    this.quantity = product.QTY;
    this.status = product.Status;
    this.editMode = true;
    this.productId = product.ID;
  }

  deleteProduct(id: number) {
    this.productFacade.deleteProduct(id);
  }

  clearForm() {
    this.productName = '';
    this.productDescription = '';
    this.quantity = 0;
    this.status = 'In Stock';
    this.editMode = false;
    this.productId = null;
  }
}