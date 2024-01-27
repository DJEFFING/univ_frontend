import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TrainingCenter } from '../models/trainingcenter';

@Injectable({
  providedIn: 'root'
})
export class TraningCenterService {
  private readonly url = "http://localhost:9001/TrainingCenter/";

  constructor(private http:HttpClient) {

   }
   public getAllTrainingCenter():Observable<TrainingCenter[]>{
    return this.http.get<TrainingCenter[]>(this.url).pipe(
      tap(trainingCenter=>console.log("training center", trainingCenter))
    )

   }
}
