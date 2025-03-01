import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {}

  public login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe((response: any) => {
      this.userAuthService.setRoles(response.user.role);
      this.userAuthService.setToken(response.jwtToken);
      console.log(response);
      const role = response.user.role[0].roleName;
      if(role === 'Admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    }, error => {
        console.log(error);
    });
  }

}
