import { Component, OnInit, Input, HostListener } from '@angular/core';
import { IsControlInformationVisible } from '../app.constants';
import { ITeam } from '../app.component';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {
  @Input() points: Array<ITeam>;

  isControlInformationVisible = IsControlInformationVisible;
  isKeyPressed = false;
  currentPosition = null;

  constructor() { }

  ngOnInit() {}

  @HostListener('window:keydown', ['$event'])
  hotkeys(event: KeyboardEvent){
    this.isKeyPressed = true;

    if (this.currentPosition === null) {
      this.currentPosition = 0;
      return;
    }

    const up = 38;
    const down = 40;
    const enter = 13;

    switch(event.keyCode) {
      case up:
        if (this.currentPosition !== 0) {
          this.currentPosition--;
        }
        break;

      case down:
        if (this.currentPosition !== this.points.length - 1) {
          this.currentPosition++;
        }
        break;

      case enter:
        if (event.shiftKey && this.points[this.currentPosition].point > 0) {
          this.points[this.currentPosition].point--;
        } else if (!event.shiftKey) {
          this.points[this.currentPosition].point++;
        }
        break;

      default: break;
    }
  }

}
