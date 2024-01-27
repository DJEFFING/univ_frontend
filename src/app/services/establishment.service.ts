import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Establishment } from '../models/establishment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  private readonly url = "http://localhost:9001/establishment/"
  constructor(private http: HttpClient) { }

  public getAll():Observable<Establishment[]>{
    
    return this.http.get<Establishment[]>(this.url).pipe(
      tap(establishments => console.log("establishment", establishments))
    );
  }

}
