import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{  counter }}</h3>

    <button (click)="incrementCounter()">+1</button>
    <button (click)="decrementCounter()">-1</button>
    <button (click)="resetCounter()">Reset</button>
  `
})
export class CounterComponent {
  private COUNTER_DEFAULT_VALUE:number = 10;

  public title:string = 'Hello World';
  public counter:number = this.COUNTER_DEFAULT_VALUE;

  public incrementCounter = (): void => {
    this.counter += 1;
  };

  public decrementCounter = (): void => {
    this.counter -= 1;
  };

  public resetCounter = ():void => {
    this.counter = this.COUNTER_DEFAULT_VALUE;
  }

  /*
  public increaseBy = (n:number):void => {
    this.counter +=n;
  }

  public decreaseBy = (n:number):void => {
    this.counter -= n;
  }*/


}
