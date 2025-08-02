import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dinner-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dinner-menu.component.html',
  styleUrls: ['./dinner-menu.component.css']
})
export class DinnerMenuComponent {
  constructor(private router: Router) {
  }

  openSpinner(): void {{
    this.router.navigate(['/recipe-selector-component']);
  }}
}
