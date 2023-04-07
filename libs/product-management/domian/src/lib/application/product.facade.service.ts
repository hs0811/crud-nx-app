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

  addProduct(product: Product): void {
    this.productDataService.addProduct(product).subscribe({
      next: (products) => {
        this.products = products;
        this.productsSubject.next(this.products);
      },
      error: (err) => console.log(err)
    });
  }

  updateProduct(product: Product): void {
    this.productDataService.updateProduct(product).subscribe({
      next: (products) => {
        this.products = products;
        this.productsSubject.next(this.products);
      },
      error: (err) => console.log(err)
    });
  }

  deleteProduct(id: number): void {
    this.productDataService.deleteProduct(id).subscribe({
      next: (products) => {
        this.products = products;
        this.productsSubject.next(this.products);
      },
      error: (err) => console.log(err)
    });
  }
}
