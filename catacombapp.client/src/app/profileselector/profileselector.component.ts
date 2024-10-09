import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profileselector',
  templateUrl: './profileselector.component.html',
  styleUrls: ['./profileselector.component.css']
})
export class ProfileselectorComponent {
  currentId: number = 1;
  returnId: string = '';

  imageOutput: Array<{ id: number, src: string }> = [
    { id: 1, src: '/assets/Profiles/gus_lg.png' },
    { id: 2, src: '/assets/Profiles/horse_lg.png' },
    { id: 3, src: '/assets/Profiles/papa_lg.png' },
    { id: 4, src: '/assets/Profiles/troll_lg.png' }
  ];

  @Output() returnIdChange: EventEmitter<string> = new EventEmitter<string>();

  forwardId() {
    if (this.currentId < 4) {
      this.currentId++;
    } else {
      this.currentId = 1;
    }
    this.returnId = JSON.stringify(this.currentId);
    this.returnIdChange.emit(this.returnId);
  }

  backId() {
    if (this.currentId > 1) {
      this.currentId--;
    } else {
      this.currentId = 4;
    }
    this.returnId = JSON.stringify(this.currentId);
    this.returnIdChange.emit(this.returnId);
  }

  setId(int: number) {
    this.currentId = int;
    this.returnId = JSON.stringify(this.currentId);
    this.returnIdChange.emit(this.returnId);
  }
}
