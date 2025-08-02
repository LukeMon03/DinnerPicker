import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToMenuHelperComponent } from "../helpers/backToMenuHelper";

@Component({
  selector: 'app-gallery.component',
  standalone: true,
  imports: [CommonModule, BackToMenuHelperComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
