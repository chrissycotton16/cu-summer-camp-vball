import { Component } from '@angular/core';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppLoginDialogComponent } from './app-login/app-login-dialog/app-login-dialog.component';


@Component({
  selector: 'app-root',
  template:'Message: {{message}} <app-app-login-dialog (messageEvent)="receiveMessage($event)"></app-app-login-dialog>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cu-summer-camp'; 


  // IsLoggedIn: boolean;
  // //setter for Admin
  // public set SetIsLoggedIn(v : boolean) {
  //   this.IsLoggedIn = v;
  // }  
  // //getter for Admin
  // public get GetIsLoggedIn() : boolean {
  //   return this.IsLoggedIn;
  // }
  constructor(){

  }

  message:string;
  receiveMessage($event){
    this.message=$event;
    console.log("HELLLOOO");
    console.log(this.message);
  }
}
