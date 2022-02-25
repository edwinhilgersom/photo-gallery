import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public items: any[];

  constructor(
    private imageService: ImageService
  ) {
    this.getImages();
  }

  public getImages(): void {
    this.imageService.getImages().subscribe((response) => {
      console.log(response);
      this.items = response || [];
    });
  }
}
