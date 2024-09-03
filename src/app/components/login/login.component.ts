import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  trackName: string = 'PHP';

  @Output() myEvent = new EventEmitter();

  sendData() {
    this.myEvent.emit(this.trackName);
  }
}
