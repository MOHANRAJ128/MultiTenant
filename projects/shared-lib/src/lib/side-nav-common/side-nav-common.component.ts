import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'lib-sidebar-common',
  templateUrl: './side-nav-common.component.html',
  styleUrl: './side-nav-common.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class SideNavCommonComponent {

  @ViewChild("sidenav") sidenav!: MatSidenav;

  opened = true; // or false, depending on your initial state

  toggleSidenav() {
    // console.log(this.opened);
    this.opened = !this.opened;
    console.log(this.opened);
    // this.sidenav.toggle();
    // console.log(this.opened);
    // console.log(this.sidenav);
  }
}
