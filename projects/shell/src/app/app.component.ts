import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell';
  @ViewChild('drawer') drawer!: MatSidenav;
  toggle(){
    console.log(this.drawer);
    this.drawer.toggle();
  }
}
