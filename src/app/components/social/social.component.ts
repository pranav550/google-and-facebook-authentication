import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from "@angular/router";
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  // private user: SocialUser;
  // private loggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkUserLogin()
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
  }

  checkUserLogin(){
    try {
      this.authService.authState.subscribe((user) => {
        console.log(user)
        if (user) {
          localStorage.setItem('UserToken', JSON.stringify(user.authToken));
          if (JSON.parse(localStorage.getItem('UserToken'))) {
            this.router.navigate(['socialDetails'])
          }
        }
        else {
          localStorage.setItem('UserToken', null);
          JSON.parse(localStorage.getItem('UserToken'));
        }
      });
    }
    catch (excep) { }
  }

}
