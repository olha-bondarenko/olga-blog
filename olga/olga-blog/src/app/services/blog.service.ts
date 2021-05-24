import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private httpClient: HttpClient){}
  url = 'http://localhost:3000/data';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  // tslint:disable-next-line:typedef
  fetchViaHttp() {
    throw new Error('Method not implemented.');
  }

  getPostsList(): Observable<any>{
    return this.httpClient.get<any[]>(this.url);
  }
}
