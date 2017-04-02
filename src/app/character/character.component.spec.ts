import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CharacterComponent } from './character.component';
import { CharacterService, SearchFilterPipe, FilmFilterPipe } from './../core';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let characterSrvSpyed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ 
        CharacterComponent, 
        SearchFilterPipe,
        FilmFilterPipe
      ],
      providers: [ CharacterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the CharacterComponent', () => {
    expect(component).toBeTruthy();
  });
});
