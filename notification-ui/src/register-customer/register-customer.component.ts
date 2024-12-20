import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { catchError, finalize, of } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register-customer',
  imports: [FormsModule],
  templateUrl: './register-customer.component.html',
  standalone: true,
  styleUrl: './register-customer.component.css'
})
export class RegisterCustomerComponent {
  name = '';
  email = '';

  isLoading = false;
  errorMessage = '';

  constructor(private customerService: CustomerService) {}

  registerCustomer() {
    const customer = { name: this.name, email: this.email };

    this.isLoading = true; // Show loading spinner or disable the form

    this.customerService.registerCustomer(customer)
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          this.errorMessage = 'Failed to register customer.';
          return of(null); // Return a safe fallback value
        }),
        finalize(() => {
          this.isLoading = false; // Hide loading spinner or enable the form
        })
      )
      .subscribe(response => {
        if (response) {
          console.log('Customer registered:', response);
        }
      });
  }
}
