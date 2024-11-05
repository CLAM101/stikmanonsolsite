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
  };

  constructor() {}

  ngOnInit() {
    this.createGameList();
    this.selectGame('stikmanDestruction');
  }

  createGameList() {
    this.gamesList = [
      {
        title: 'Stickman Destruction',
        embed:
          'https://www.onlinegames.io/games/2021/unity3/stickman-destruction/index.html',
        image:
          'https://www.onlinegames.io/media/posts/233/responsive/Stickman-Destruction-xs.jpg',
        tags: '1-player,2d,crash,crazy,destroy,fun,funny,mobile,physics,simulator,stickman',
        description:
          'How many parts can you divide a virtual character into?  Stickman Destruction is an action-oriented stickman ragdoll game in which you tear the virtual character apart a million times.  The whole point of this game is to break the Stickman’s bones as much as possible by hitting him from right to left!  Use your creativity and strategically calculate how you can get the most points.',
      },
      {
        title: 'Get On Top',
        embed:
          'https://www.onlinegames.io/games/2024/code/6/get-on-top/index.html',
        image:
          'https://www.onlinegames.io/media/posts/697/responsive/Get-on-Top-xs.jpg',
        tags: '2-player,2d,action,arcade,battle,combat,crazy,fun,html5,physics,stickman',
        description:
          "Remember those days when you and your brother used to wrestle for hours until one of you cried and complained to Mom?  It was a real duel, wasn't it?  You would flip over together like a human ball, with arms and legs flying in the air.  So, we've brought sibling wrestling to the virtual realm.",
      },
      {
        title: 'Stick Guys Defense',
        embed:
          'https://www.onlinegames.io/games/2022/unity3/stick-guys-defense/index.html',
        image:
          'https://www.onlinegames.io/media/posts/476/responsive/Stick-Guys-Defense-xs.jpg',
        tags: '1-player,3d,action,armor,battle,crazy,defense,mouse,simulator,stickman,strategy,tower-defense,unity,war',
        description:
          'Protecting your towers is your most significant duty.  Stick Guys Defense is a 3D tower defense game where you need to defend your castle with your stickman soldiers.  There will be a non-stop invasion.  Evil creatures are here to attack you by gathering everything they have.',
      },
      {
        title: 'Crazy Stickman Physics',
        embed:
          'https://www.onlinegames.io/games/2023/construct/185/crazy-stickman-physics/index.html',
        image:
          'https://www.onlinegames.io/media/posts/715/responsive/Crazy-Stickman-Physics-xs.jpg',
        tags: '1-player,2d,crash,crazy,destroy,html5,mobile,mouse,physics,stickman',
        description:
          "Find the perfect position and make your stickman jump!  Crazy Stickman Physics is a 2D stickman game where your utmost challenge is to break as many bones as you can.  Earn coins as you break your stickman's bones. \nUse your money to unlock new settings and purchase vehicles and outfits for your ragdoll.",
      },
    ];
  }

  selectGame(game: keyof typeof this.games) {
    this.games[game] = false;
  }
}
