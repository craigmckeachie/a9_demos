import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <input #myInput />
  `,
  styles: []
})
export class AppComponent implements OnInit {
  @ViewChild('myInput') input;
  ngOnInit(): void {
    console.log(this.input);
    const keyupEvents$ = fromEvent(this.input.nativeElement, 'keyup');
    keyupEvents$.subscribe((event: Event) =>
      console.log((event.target as HTMLInputElement).value)
    );
  }
}
