import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/shared/model/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  constructor(cartService: CartService, private formBuilder: FormBuilder) {}
}
