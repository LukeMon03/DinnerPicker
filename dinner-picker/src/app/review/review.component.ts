import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BackToMenuHelperComponent } from "../helpers/backToMenuHelper";
import { ReviewFormHelperComponent } from "../helpers/reviewFormHelper";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule, BackToMenuHelperComponent, ReviewFormHelperComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  onSubmit(form: any): void {
    console.log('Form submitted:', form.value);
  }

  selectedFileName: string | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files?.[0];
    this.selectedFileName = file ? file.name : null;
  }
}
