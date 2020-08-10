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
      transition('* <=> *', [
        // css styles at start of transition
        style({ opacity: 0 }),
        // animation and styles at end of transition
        animate('1s', style({ opacity: 1 })),
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
