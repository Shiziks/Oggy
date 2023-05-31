import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IInquiry } from '../interfaces/i-inquiry';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  private url:string="../../assets/data/expertise.json";
  constructor(private http:HttpClient) { }

  getExpertises():Observable<IInquiry[]>{
    return this.http.get<IInquiry[]>(this.url);
  }
}
