import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mocks/mock-heroes';
import { NgFor, NgIf } from '@angular/common';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, UpperCasePipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  // hero: string = 'Windstorm';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  heroes = HEROES;
}
