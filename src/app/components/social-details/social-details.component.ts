import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {Router} from "@angular/router";
 
@Component({
  selector: 'app-social-details',
  templateUrl: './social-details.component.html',
  styleUrls: ['./social-details.component.css']
})
export class SocialDetailsComponent implements OnInit {
  public user: SocialUser;
  public loggedIn: boolean;
  constructor(
    private authService: AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    
    this.userDetails()
  }

  userDetails(){
    try{
    this.authService.authState.subscribe((user) => {
      if(user){
        this.user = user;
        this.loggedIn = (user != null);
      }
      else{
        this.loggedIn = (user = null);
        this.router.navigate(['social'])
      }
    });
  }
  catch(excep){}
  }

  public signOut(): void {
    console.log("click")
    this.authService.signOut();
    localStorage.removeItem('UserToken')
    this.router.navigate(['social'])
    
  }

}
