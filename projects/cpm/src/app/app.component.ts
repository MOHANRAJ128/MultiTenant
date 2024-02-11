import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // opened: boolean = false; // or false, depending on your initial state


  toggleSidenav() {
    // console.log(this.opened);
    // this.opened = !this.opened;
    // console.log(this.opened);
    // this.sidenav.toggle();
    // console.log(this.opened);
    // console.log(this.sidenav);
  }
}
