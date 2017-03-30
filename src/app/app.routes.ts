import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { CharacterComponent } from './character/character.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'series', component: SeriesComponent },
    { path: 'characters', component: CharacterComponent },
    { path: '**', redirectTo: '/home' }
];