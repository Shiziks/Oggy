import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPortfolio } from '../interfaces/i-portfolio';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private url:string="../../assets/data/portfolioitems.json";

  constructor(private http:HttpClient) { 
    
  }

  getItems():Observable<IPortfolio[]>{
    return this.http.get<IPortfolio[]>(this.url);
  }

  
}
