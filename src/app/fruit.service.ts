import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  constructor() {}

  list(): Observable<string[]> {
    return of(['Apple', 'Orange', 'Plum']);
  }
}
