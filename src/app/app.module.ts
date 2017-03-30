import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SeriesComponentComponent } from './series-component/series-component.component';
import { CharacterComponentComponent } from './character-component/character-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponentComponent,
    CharacterComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
