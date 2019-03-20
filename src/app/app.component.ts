import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observer, interval } from 'rxjs';

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
    const subscription = observable$.subscribe(observer);
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}
