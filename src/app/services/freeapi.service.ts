import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Info} from '../classes/info';

@Injectable()
export class freeApiService {
  constructor(
    private httpclient: HttpClient
  ) { }



  getusers(): Observable<any> {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users');
  }

  getinfoForselectedUserbyparameter(selectedUserId:string): Observable<any>
  {
    let params1 = new HttpParams().set('userId',selectedUserId)
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts?userId=1',{params:params1});
  }

  post(opost:Info): Observable<any>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts?userId=1', {opost});

  }
}