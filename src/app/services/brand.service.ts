import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44371/api/'

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    let newPath = this.apiUrl + "brands/getall"
    return this.httpClient.get<BrandResponseModel>(newPath)    
  }
}
