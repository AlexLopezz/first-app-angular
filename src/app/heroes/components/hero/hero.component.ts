import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  private DEFAULT_NAME_VALUE:string = 'peter parker';
  private DEFAULT_AGE_VALUE:number = 20;

  public name:string = this.DEFAULT_NAME_VALUE;
  public age:number  = this.DEFAULT_AGE_VALUE;

  get capitalizedName() {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `name: ${this.name} - age: ${this.age}`;
  }

  changeName():void {
    this.name = 'Tony Stark';
  }
  changeAge():void {
    this.age = 50;
  }
  reset():void {
    this.name = this.DEFAULT_NAME_VALUE;
    this.age  = this.DEFAULT_AGE_VALUE;
  }
}
