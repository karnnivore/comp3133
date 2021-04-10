import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../model/mission';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://api.spacexdata.com/v3/launches';

  constructor(private httpclient: HttpClient) { }

  getData(): Observable<any> {
    let data =  this.httpclient.get<Mission>(this.url)
    console.log(data);
    return data
  }

  getMission(id: number): Observable<any> {
    const url = `mission-details/${id}`
    return this.httpclient.get<Mission>(url)
  }
}
