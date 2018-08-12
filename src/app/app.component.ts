import { Component, OnInit, HostListener } from '@angular/core';
import { BackgroundImage, Teams, Awards } from './app.constants';
import { OnBeforeunload } from './app.guards';

export interface ITeam {
  name: string
  point: number
  color: string
}

export interface IAward {
  title: string
  imageUrl: string
  isOpened: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  backgroundImage: string = BackgroundImage;
  teams: Array<ITeam> = Teams;
  awards: Array<IAward> = Awards;

  states = {
    Awards: 'awards',
    Points: 'points'
  };

  displayMode: string;
  isControlInformationVisible = true;

  constructor() {
    this.displayMode = this.states.Awards;
  }

  ngOnInit() {
    this.awards = this.awards.sort(() => Math.random() - 0.5);
  }

  @HostListener('window:keydown', ['$event'])
  hotkeys(event: KeyboardEvent){
    const right = 68;
    const left = 65;

    switch(event.keyCode) {
      case right:
        if (this.displayMode === this.states.Awards) {
          this.displayMode = this.states.Points;
        }
        break;

      case left:
        if (this.displayMode === this.states.Points) {
          this.displayMode = this.states.Awards;
        }
        break;

      default: break;
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnload(event: Event) {
    event.returnValue = true;
  }
}
