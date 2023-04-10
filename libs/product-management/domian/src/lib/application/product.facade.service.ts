import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProductDataService } from '../infrastructure/product.data.service';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductFacadeService {
  private products: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>(this.products);
 products$ = this.productsSubject.asObservable();

 private productSubject = new BehaviorSubject<Product | undefined>({} as Product);
  singleproductSubject$ = this.productSubject.asObservable();

  constructor(private readonly productDataService: ProductDataService) {}

  loadProducts(): void {
    this.productDataService.loadProduct().subscribe({
      next: (products) => {
        this.products = products;
        this.productsSubject.next(this.products);
      },
      error: (err) => console.log(err)
    });
  }

  // addProduct(product: Product): void {
  //   this.productDataService.addProduct(product).subscribe({
  //     next: (products) => {
  //       this.products = products;
  //       this.productsSubject.next(this.products);
  //     },
  //     error: (err) => console.log(err)
  //   });
  // }

 
  // updateProduct(product: Product): void {
  //   this.productDataService.updateProduct(product).subscribe({
  //     next: (products) => {
  //       this.products = products;
  //       this.productsSubject.next(this.products);
  //     },
  //     error: (err) => console.log(err)
  //   });
  // }

  // deleteProduct(id: number): void {
  //   this.productDataService.deleteProduct(id).subscribe({
  //     next: (products) => {
  //       this.products = products;
  //       this.productsSubject.next(this.products);
  //     },
  //     error: (err) => console.log(err)
  //   });
  // }

  //==============================================================================
  addProduct(product: Product){
    this.productDataService.addNewProduct(product);
  }

  removeProduct(id: number){
    this.productDataService.removeProduct(id)
  }
  getProductForUpdate(id: number){
    this.productDataService.getProductForUpdate(id).subscribe(
      {
        next: (val: Product | undefined) => {
          this.productSubject.next(val);
        },
        error: (err) => console.log(err)
      }
    )
  }
  updateProduct(product?: Product){
    this.productDataService.updateProduct(product);
  }
}
