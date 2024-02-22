import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  private LIST_HEROES_DEFAULT:string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
  private lastHeroDelete:(string | undefined);
  public heroNames: string[] = [... this.LIST_HEROES_DEFAULT];

  removeLastHero():void {
    this.lastHeroDelete = this.heroNames.pop();
  }

  get lastHeroDeleted():(string | undefined) {
    return this.lastHeroDelete;
  }

  get isEmpty():boolean {
    return this.heroNames.length === 0;
  }

  resetList():void {
    this.lastHeroDelete = undefined;
    this.heroNames = [... this.LIST_HEROES_DEFAULT];
  }
}
