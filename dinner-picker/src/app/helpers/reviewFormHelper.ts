import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'app-review-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
<form #reviewForm="ngForm" (ngSubmit)="onSubmit(reviewForm)" class="float-in mt-4"
    style="max-width: 800px; width: 100%; animation-duration:1.0s;">

    <!-- Code input -->
    <div class="mb-3">
        <label for="reviewCode" class="form-label">Code</label>
        <input type="text" id="reviewCode" name="code" class="form-control" ngModel placeholder="Enter code" />
    </div>

    <!-- Text area -->
    <div class="mb-3">
        <label for="reviewText" class="form-label">Your Review</label>
        <textarea id="reviewText" name="text" rows="4" class="form-control" ngModel
            placeholder="Write your review here..."></textarea>
    </div>

    <!-- File upload -->
    <div class="mb-3">
        <label class="form-label">Media (Image or Video)</label>
        <input type="file" id="mediaUpload" name="media" hidden (change)="onFileSelected($event)" />
        <label for="mediaUpload" class="custom-file-upload">Upload Media</label>
        <div class="file-name" *ngIf="selectedFileName">{{ selectedFileName }}</div>
    </div>

    <!-- Rating -->
    <div class="mb-3">
        <label for="rating" class="form-label">Rating</label>
        <select name="rating" id="rating" class="form-select" ngModel>
            <option value="" disabled selected>Select a rating</option>
            <option *ngFor="let r of [1,2,3,4,5]" [value]="r">{{ r }} Star{{ r > 1 ? 's' : '' }}</option>
        </select>
    </div>

    <!-- Submit -->
    <div class="mb-3">
        <button type="submit" class="standard-button">Submit Review</button>
    </div>
</form>
    `,
    styles: [`
        form {
    background-color: #15162c;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    padding: 1.5rem;
    max-width: 800px;
    color: #d4d4d4;
    box-shadow: 0 0 30px 0 rgb(225, 0, 255, 0.7);
    font-family: 'Orbitron', sans-serif;
}

.mb-3 {
    margin-bottom: 1rem !important;
    display: flex;
    flex-direction: column;
}

input[type="text"],
textarea,
select {
    background-color: #15162c;
    color: #d4d4d4;
    border: 1px solid #007bff;
    /* neon blue border */
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    box-shadow: 0 0 30px 0 rgb(0, 38, 255, 0.6);
    /* neon blue glow */
    transition: border-color 0.3s ease;
    resize: vertical;
}

input[type="text"]:focus,
textarea:focus,
select:focus {
    border-color: #ff00ea;
    outline: none;
    box-shadow: 0 0 40px 0 rgb(225, 0, 255);
}

.form-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}


input::placeholder,
textarea::placeholder {
  color: #fcfcfc;
  opacity: 1; /* Ensure it's fully visible */
}

.custom-file-upload {
  display: inline-block;
  background-color: #15162c;
  padding: 0.5rem 1rem;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(20, 38, 255, 0.6);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  margin-bottom: 0.75rem;
}

.custom-file-upload:hover {
  background-color: #ff00ea;
  color: #15162c;
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.8);
}

/* File name display */
.file-name {
  color: #00ffff;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

@media (max-width: 576px) {
    form {
        padding: 1rem;
    }
}
        `]
})
export class ReviewFormHelperComponent {
    constructor() { }

    onSubmit(form: any): void {
        console.log('Form submitted:', form.value);
    }

    selectedFileName: string | null = null;

    onFileSelected(event: any): void {
        const file = event.target.files?.[0];
        this.selectedFileName = file ? file.name : null;
    }
}

