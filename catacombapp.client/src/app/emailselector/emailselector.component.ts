import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-emailselector',
  templateUrl: './emailselector.component.html',
  styleUrls: ['./emailselector.component.css']
})
export class EmailselectorComponent {
  @Input() currentEmail: string = ''; 
  @Output() currentEmailChange: EventEmitter<string> = new EventEmitter<string>();

  setEmail(emailString: string) {
    this.currentEmail = emailString;
    this.currentEmailChange.emit(this.currentEmail);
  }

  onEmailChange() {
    this.currentEmailChange.emit(this.currentEmail);
  }
}
