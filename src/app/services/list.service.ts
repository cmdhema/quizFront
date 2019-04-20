import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { List } from '../models/List'

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: Http) { }

  private serverApi= 'http://localhost:3000';

  public addList(list: List) {
    let URI = `${this.serverApi}/`;
    let headers = new Headers;
    let body = JSON.stringify({datetime: list.datetime, prizeKind: list.prizeKind, amount: list.amount});
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .map(res => res.json());
  }

  public getAllLists():Observable<List[]> {

    let URI = `${this.serverApi}/quizlist/`;
    return this.http.get(URI)
        .map(res => res.json())
        .map(res => <List[]>res.lists);
  }

  // public deleteList(listId : string) {
  //   let URI = `${this.serverApi}/bucketlist/${listId}`;
  //     let headers = new Headers;
  //     headers.append('Content-Type', 'application/json');
  //     return this.http.delete(URI, {headers})
  //     .map(res => res.json());
  // }
}
