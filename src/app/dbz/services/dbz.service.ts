import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid'


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private characters:Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 8700
    }
  ];

  save(character:Character):void{
    const newCharacter:Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void{
  //   this.characters.splice(index, 1);
  // }

  deleteById(id:string):void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

  get getCharacters():Character[] {
    return [... this.characters];
  }
}
