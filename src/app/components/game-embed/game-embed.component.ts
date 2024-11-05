import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
interface Game {
  title: string;
  embed: string;
  image: string;
  tags: string;
  description: string;
}
@Component({
  selector: 'app-game-embed',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, CommonModule],
  templateUrl: './game-embed.component.html',
  styleUrl: './game-embed.component.css',
})
export class GameEmbedComponent {
  title!: string;
  embed!: string;
  image!: string;
  tags!: string;
  description!: string;
  gamesList!: Game[];

  stikmanDestruction = true;
  getOnTop = true;
  stickGuysDefense = true;

  games = {
    stikmanDestruction: true,
    getOnTop: true,
    stickGuysDefense: true,
    crazyStickManPhysics: true,
  };

  constructor() {}

  ngOnInit() {
    this.selectGame('stikmanDestruction', 'Stick Man Destruction');
  }

  selectGame(game: keyof typeof this.games, title: string) {
    Object.keys(this.games).forEach((key) => {
      this.games[key as keyof typeof this.games] = true;
    });

    this.games[game] = false;
    this.title = title;
  }
}
