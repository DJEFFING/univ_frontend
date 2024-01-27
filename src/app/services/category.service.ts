import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly url = 'http://localhost:9001/categories/';

  constructor(private http:HttpClient) { }

  public getAll():Observable<Category[]>{
    return this.http.get<Category[]>(this.url).pipe(
      tap(categories => console.log("categorie", categories))
    )
  }
}
