import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observer, interval } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const observable$ = interval(1000);
    const observer: Observer<any> = {
      next: x => console.log(x),
      complete: () => console.log('completed'),
      error: e => console.log(e)
    };

    // const observableCommingOutOfThePipe$ = observable$.pipe(
    //   // tap(x => console.log(x)),
    //   // map(x => x * 10)
    //   filter(x => x % 2 === 0)
    // );
    // observableCommingOutOfThePipe$.subscribe(observer);

    interval(1000)
      .pipe(filter(x => x % 2 === 0))
      .subscribe(observer);
  }
}
