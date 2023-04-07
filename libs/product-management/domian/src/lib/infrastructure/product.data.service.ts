import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private products: Product[] = [
    {
      "ProductName": "Product 1",
      "ProductDescription": "Description of Product 1",
      "ID": 123,
      "QTY": 10,
      "Status": "In Stock"
    },
    {
      "ProductName": "Product 2",
      "ProductDescription": "Description of Product 2",
      "ID": 456,
      "QTY": 5,
      "Status": "Out of Stock"
    },
    {
      "ProductName": "Product 3",
      "ProductDescription": "Description of Product 3",
      "ID": 789,
      "QTY": 2,
      "Status": "In Stock"
    }
  ];

  loadProduct(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): Observable<Product[]> {
    this.products.push(product);
    return of(this.products);
  }

  updateProduct(product: Product): Observable<Product[]> {
    const index = this.products.findIndex(p => p.ID === product.ID);
    if (index !== -1) {
      this.products[index] = product;
    }
    return of(this.products);
  }

  deleteProduct(id: number): Observable<Product[]> {
    this.products = this.products.filter(p => p.ID !== id);
    return of(this.products);
  }
}


