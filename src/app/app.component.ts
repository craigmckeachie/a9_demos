import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        HTTP
      </h1>
      <div *ngFor="let photo of photos">
      <img [src]="photo.thumbnailUrl" alt="">
      {{photo.title}}
      </div>

  `,
  styles: []
})
export class AppComponent implements OnInit {
  photos: any[];
  ngOnInit(): void {
    this.photoService.getAll().subscribe(data => (this.photos = data));
  }
  constructor(private photoService: PhotoService) {}
}
