import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemList } from '../models/item-list.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  GetItems(): Observable<ItemList[]>{
    return this.http.get<ItemList[]>("http://localhost:3000/itemList");
  }
}
