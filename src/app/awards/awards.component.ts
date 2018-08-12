import { Component, OnInit, Input, HostListener } from '@angular/core';
import { IsControlInformationVisible, JingleRequired } from '../app.constants';
import { IAward } from '../app.component';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  @Input() awards: Array<IAward>;
  private audio = new Audio();

  isControlInformationVisible = IsControlInformationVisible;
  isKeyPressed = false;
  currentPosition = null;

  constructor() { }

  ngOnInit() {
    if (JingleRequired) {
      this.audio.src = './../../assets/jingles/toggle.mp3';
      this.audio.load();
    }
  }

  @HostListener('window:keydown', ['$event'])
  hotkeys(event: KeyboardEvent){
    this.isKeyPressed = true;

    if (this.currentPosition === null) {
      this.currentPosition = 0;
      return;
    }

    const right = 39;
    const left = 37;
    const enter = 13;

    switch(event.keyCode) {
      case right:
        if (this.currentPosition !== this.awards.length - 1) {
          this.currentPosition++;
        }
        break;

      case left:
        if (this.currentPosition !== 0) {
          this.currentPosition--;
        }
        break;

      case enter:
        if (JingleRequired) {
          this.audio.play();
        }

        setTimeout(() => {
          this.awards[this.currentPosition].isOpened = !this.awards[this.currentPosition].isOpened;
        }, JingleRequired ? 500 : 0);
        break;

      default: break;
    }
  }

}
