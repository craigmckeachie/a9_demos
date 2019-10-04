import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../shared/counter.actions';

@Component({
  selector: 'app-my-counter',
  template: `
    <button (click)="increment()">Increment</button>

    <div>Current Count: {{ count$ | async }}</div>

    <button (click)="decrement()">Decrement</button>

    <button (click)="reset()">Reset Counter</button>
  `,
  styles: []
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
