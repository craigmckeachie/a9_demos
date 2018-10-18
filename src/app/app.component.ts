import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <ul>
        <li routerLinkActive="active" ><a [routerLink]="['/home']">Home</a></li>
        <li routerLinkActive="active"><a [routerLink]="['/about']">About</a></li>
        <li routerLinkActive="active"><a [routerLink]="['/contact']">Contact</a></li>
      </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'playground';
}
