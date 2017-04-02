import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { SeriesComponent } from './series/series.component';

import { SearchFilterPipe } from './core/search-filter.pipe';
import { FilmFilterPipe } from './core/film-filter.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        CharacterComponent,
        SeriesComponent,
        SearchFilterPipe,
        FilmFilterPipe
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
