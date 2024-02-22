import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public title:string = 'DBZ Main Page';

  constructor( private dbzService: DbzService ){ }

  get characters():Character[]{
    return this.dbzService.getCharacters;
  }

  onDeleteCharacter( id:string ):void {
    this.dbzService.deleteById(id);
  }

  onNewCharacter( character: Character ):void {
    this.dbzService.save(character);
  }
}
