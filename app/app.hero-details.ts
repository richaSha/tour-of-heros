import {Component, Input} from '@angular/core';
import {Hero} from './app.hero';
@Component({
  selector: 'hero-detail',
  template:`
  <div *ngIf(hero)>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>Name:</label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  </div>
  `
})

export class heroDeatilComponent{
  @Input() hero:Hero;
}
