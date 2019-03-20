import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <button #myButton>Click Me</button>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  @ViewChild('myButton') button;
  ngOnInit(): void {
    console.log(this.button);
    const clicks$ = fromEvent(this.button.nativeElement, 'click');
    clicks$.subscribe(event => console.log(event));
  }
}
