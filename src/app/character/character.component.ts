import { Component, OnInit } from '@angular/core';
import { CharacterService } from './../core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Array<any>;

  constructor(private charSrv: CharacterService) { }

  ngOnInit() {
    this.charSrv.getCharacters().subscribe((res) => { this.characters = res.json(); });
  }

}
