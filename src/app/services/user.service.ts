import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Signup } from '../dto/signup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = "http://localhost:8081";
  private requestHeader = new HttpHeaders(
    {
      "NO-Auth": "True"
    }
  );

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  public login(loginData: any) {
      return this.httpClient.post(this.BASE_URL + "/authenticate", loginData, {headers: this.requestHeader});
  }

  public roleEqual(allowRoles: any[]): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();
    if(userRoles != null && userRoles) {
        for(let i =0; i < userRoles.length; i++) {
          for(let j = 0; j < allowRoles.length; j++) {
              if(userRoles[j].roleName === allowRoles[j]) {
                  isMatch =  true;
              } else {
              }
          }
        }
    }
    return isMatch;
  }

  public registrNewUser(signup: Signup): Observable<Signup> {
    return this.httpClient.post<Signup>(this.BASE_URL + "/user/register-new-user", signup, {headers: this.requestHeader});
  }

}
