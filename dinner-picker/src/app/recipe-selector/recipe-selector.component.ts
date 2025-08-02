import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from "../review/review.component";
import { BackToMenuHelperComponent } from "../helpers/backToMenuHelper";
import { ReviewFormHelperComponent } from "../helpers/reviewFormHelper";

@Component({
  selector: 'app-recipe-selector',
  standalone: true,
  imports: [CommonModule, BackToMenuHelperComponent, ReviewFormHelperComponent],
  templateUrl: './recipe-selector.component.html',
  styleUrls: ['./recipe-selector.component.css']
})
export class RecipeSelectorComponent implements OnInit {
  showReviewButton = false;
  showReviewForm = false;

  ngOnInit(): void {
    this.revealReviewButton();
  }

  revealReviewButton(): void {
    this.showReviewButton = true;
  }
  
  openReview(): void {
    this.showReviewButton = false;
    this.showReviewForm = true
  }
}
