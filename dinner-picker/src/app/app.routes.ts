import { Routes } from '@angular/router';
import { DinnerMenuComponent } from './dinner-menu/dinner-menu.component';
import { RecipeSelectorComponent } from './recipe-selector/recipe-selector.component';
import { ReviewComponent } from './review/review.component';
import { GalleryComponent } from './gallery.component/gallery.component';

export const routes: Routes = [
    { path: 'dinner-menu-component', component: DinnerMenuComponent },
    { path: 'recipe-selector-component', component: RecipeSelectorComponent},
    { path: 'review-dinner-component', component: ReviewComponent },
    { path: 'gallery-component', component: GalleryComponent },
    { path: '', redirectTo: 'dinner-menu-component', pathMatch: 'full' },
    { path: '**', redirectTo: 'dinner-menu-component' }
];
