import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponentComponent } from './character-component.component';

describe('CharacterComponentComponent', () => {
  let component: CharacterComponentComponent;
  let fixture: ComponentFixture<CharacterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
