import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <img [src]="image.path" [alt]="image.name" [title]="image.name">
  `,
  styles: []
})
export class AppComponent {
  image = {
    path: '../assets/angular_solidBlack.png',
    name: 'Angular Logo'
  };
}
