import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navComponent="Home";
  @Output() navEvent=new EventEmitter();
  changeComponent(newComponent:string){
    this.navComponent=newComponent;
    this.navEvent.emit(newComponent)
  }
}
