import { Component, OnInit, OnDestroy } from "@angular/core"

import { Subscription } from "rxjs"

import { Product } from "../product"
import { ProductService } from "../product.service"

@Component({
	selector: "pm-product-list",
	templateUrl: "./product-list-alt.component.html"
})
export class ProductListAltComponent implements OnInit, OnDestroy {
	pageTitle = "Products"
	errorMessage = ""
	selectedProductId = 0

	products: Product[] = []
	sub!: Subscription

	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.sub = this.productService.getProducts().subscribe({
			next: products => this.products = products,
			error: err => this.errorMessage = err
		})
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe()
	}

	onSelected(productId: number): void {
		console.log("Not yet implemented")
	}
}
