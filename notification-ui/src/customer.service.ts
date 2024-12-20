import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  registerCustomer(customer: any): Observable<any> {
    return this.http.post(this.apiUrl, customer);
  }
}
