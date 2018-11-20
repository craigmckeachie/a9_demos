import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/photos').pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('An error occured loading the projects.');
      })
    );
  }
}
