import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  data:any;
  constructor(public http: HttpClient) { }

  getPosts():Observable<any[]>{
    console.log(this.apiUrl)
    return this.http.get<any[]>(this.apiUrl);
  }
}
