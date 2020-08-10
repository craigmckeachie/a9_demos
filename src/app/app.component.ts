import { Component } from '@angular/core';

import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  state,
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLinkActive="active" [routerLink]="['/home']">Home</a> |
      <a routerLinkActive="active" [routerLink]="['/about']">About</a> |
      <a routerLinkActive="active" [routerLink]="['/contact']">Contact</a>
    </nav>
    <div [@animateRoute]="getRoute(appOutlet)">
      <router-outlet #appOutlet="outlet"></router-outlet>
    </div>
  `,
  styles: [],
  animations: [
    trigger('animateRoute', [
      // route 'enter and leave (<=>)' transition
      // transition('* <=> *', [
      //   // css styles at start of transition
      //   style({ opacity: 0 }),
      //   // animation and styles at end of transition
      //   animate('1s', style({ opacity: 1 })),
      // ]),
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ]),
        query(':enter', [style({ left: '-100%' })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
          query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
        ]),
        query(':enter', animateChild()),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'playground';

  getRoute(outlet: RouterOutlet) {
    return outlet.activatedRoute;
  }
}
