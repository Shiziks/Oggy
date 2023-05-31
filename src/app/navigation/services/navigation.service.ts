import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INavigation } from '../interfaces/i-navigation';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private url:string="../../assets/data/menu.json";
  
  constructor(private http:HttpClient) { }

  getMenuData():Observable<INavigation[]>{
    return this.http.get<INavigation[]>(this.url);
  }


}
