import { Routes } from '@angular/router';
import { DinnerMenuComponent } from './dinner-menu/dinner-menu.component';
import { Spinner } from './spinner/spinner';

export const routes: Routes = [
    { path: 'dinner-menu-component', component: DinnerMenuComponent },
    { path: 'spinner', component: Spinner}
];
