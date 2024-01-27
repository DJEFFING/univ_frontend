import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { University,} from '../models/university';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private readonly url = 'http://localhost:9001/universities';
  private readonly urlFindById = 'http://localhost:9001/universities/find-';

  constructor(private http: HttpClient) {

  }

  public getUniversity():Observable<University[]> {
    return this.http.get<University[]>(this.url).pipe(
      tap(universities=> console.log('universities',universities)),
      // catchError(this.handleError)
    );
  }

  public getById(id:number):Observable<University>{
    return this.http.get<University>(this.url+`/find-${id}`).pipe(
    tap(university => console.log('university',university))
    );
  }



  private handleError(err: HttpErrorResponse){
 if(err.error instanceof ErrorEvent){
  console.error("an error occured:",err.error.message)
 }else{
  console.error(`backend return code ${err.status},`+ `body was ${err.error}`);
 }
 return throwError(
  'semothing bad happend; pleace thry again later '
 );
  }
}
