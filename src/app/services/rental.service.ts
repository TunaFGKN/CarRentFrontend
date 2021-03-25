import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44371/api/"

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
    let newPath = this.apiUrl + "rentals/getall"
    return this.httpClient.get<RentalResponseModel>(newPath)
  }
}
