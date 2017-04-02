import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CharacterService } from './../core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Array<any>;
  originalCharacters: Array<any>;
  @ViewChild('input') input: ElementRef;

  constructor(private charSrv: CharacterService) { }

  ngOnInit() {
    this.charSrv.getCharacters().subscribe((res) => { 
      this.characters = res.json(); 
      let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup');
      eventObservable.subscribe();
    });
  }
  
}
