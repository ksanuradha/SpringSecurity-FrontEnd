import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  @ViewChild('rightDrawer') rightDrawer!: MatSidenav;
  constructor(
    private menueService: MenuService, 
    private userAuthService: UserAuthService, 
    private router: Router,
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  toggleMenue() {
    //this.drawer.toggle();
    this.menueService.toogle();
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logOut() {
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }
}
