import { Routes } from '@angular/router';
import { DinnerMenuComponent } from './dinner-menu/dinner-menu.component';
import { RecipeSelectorComponent } from './recipe-selector/recipe-selector.component';

export const routes: Routes = [
    { path: 'dinner-menu-component', component: DinnerMenuComponent },
    { path: 'recipe-selector-component', component: RecipeSelectorComponent}
];
