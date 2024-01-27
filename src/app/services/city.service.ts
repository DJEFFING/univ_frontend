import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private readonly url = "http://localhost:9001/cities/"

  constructor(private http:HttpClient) { }

  public getAll():Observable<City[]>{
    return this.http.get<City[]>(this.url).pipe(
      tap( cities => console.log('cities :', cities))
    )
  }


}
