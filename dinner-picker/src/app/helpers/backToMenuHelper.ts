import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-back-to-menu',
    standalone: true,
    imports: [CommonModule],
    template: `<div>
    <button class="breadcrumb-button" (click)="backToMenu()">Back to menu</button>
  </div>`,
})
export class BackToMenuHelperComponent {
    constructor(private router: Router) { }

    backToMenu(): void {
        this.router.navigate(['/dinner-menu']);
    }
}
