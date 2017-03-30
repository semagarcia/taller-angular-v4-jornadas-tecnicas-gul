import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { CharacterComponent } from './character/character.component';

import { CharacterService, SeriesService } from './core';
import { FilterByYearPipe } from './core/filter-by-year.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeriesComponent,
    CharacterComponent,
    FilterByYearPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CharacterService, 
    SeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
