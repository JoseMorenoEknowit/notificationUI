import { Routes } from '@angular/router';
import { RegisterCustomerComponent } from '../register-customer/register-customer.component';

export const routes: Routes = [
    { path: '', redirectTo: 'register-customer', pathMatch: 'full' }, // Default route
    { path: 'register-customer', component: RegisterCustomerComponent },
];

