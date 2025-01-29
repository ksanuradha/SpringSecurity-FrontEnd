import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Signup } from 'src/app/dto/signup';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup: Signup = {
    username: '',
    userFirstName: '',
    userLastName: '',
    userPassword: '',
    userRole: 'user'
  };
  
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  public register() {
    this.userService.registrNewUser(this.signup).subscribe(
      response => {
        this.toastr.success("User registered successfully", 'success');
        this.router.navigate(['login']);
      },
      error => {
        this.toastr.success("Error registered user", 'error');
        this.router.navigate(['']);
      }
    );
  }

}
