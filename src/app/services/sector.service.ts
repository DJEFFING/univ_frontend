import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Sector } from '../models/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private readonly url = "http://localhost:9001/sector/";

  constructor(private http:HttpClient) { }

  public getAll():Observable<Sector[]>{
    return this.http.get<Sector[]>(this.url).pipe(
      tap(sectors => console.log("secltor", sectors))
    )
  }
}
