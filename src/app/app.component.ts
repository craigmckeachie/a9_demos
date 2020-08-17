import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ` ready `,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const observable$ = of<number>(1, 2, 3);

    // JUST NEXT
    // observable$.subscribe((value: number): void => {
    //   console.log(value);
    // });

    // NEXT + ERROR
    // observable$.subscribe(
    //   (value: number): void => {
    //     console.log(value);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    // NEXT + ERROR + COMPLETE
    // observable$.subscribe(
    //   (value: number): void => {
    //     console.log(value);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('completed');
    //   }
    // );

    // CAN'T DECLARE NUll without creating an observer
    // observable$.subscribe(
    //   (value: number) => {
    //     console.log(value);
    //   },
    //   null,
    //   () => {
    //     console.log('completed');
    //   }
    // );

    // OK, because creating observer object
    observable$.subscribe({
      next: (value: number) => {
        console.log(value);
      },
      error: null,
      complete: () => {
        console.log('completed');
      },
    });
  }
}
