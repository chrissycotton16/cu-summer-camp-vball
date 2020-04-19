import { Component, OnInit, Inject, NgModule, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



export interface DialogData {
  user: string;
  password: string;
}

@Component({
  selector: 'app-app-login-dialog',
  templateUrl: './app-login-dialog.component.html',
  styleUrls: ['./app-login-dialog.component.css']
})
export class AppLoginDialogComponent implements OnInit {
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

  message:string = "hi world";

  @Output() messageEvent = new EventEmitter<string>();

  onOkClick(){
    console.log("this is a test in OkClick method");

    this.messageEvent.emit(this.message);
  }

  constructor(
    public dialogRef: MatDialogRef<AppLoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


  // onOkClick(){
  //   this.dialogRef.close();
    
  //   message: string = "sup";

  //   @Output 



    //AppComponent.call(@SetIsLoggedIn =true);
    //appcomponent setisloggedin = log
    //insert HTML buttons on contact list SOMEHOW
  //}

}
