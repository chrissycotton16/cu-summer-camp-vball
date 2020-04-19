import { Component, OnInit, Inject, NgModule, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-app-contact-dialog',
  templateUrl: './app-contact-dialog.component.html',
  styleUrls: ['./app-contact-dialog.component.css']
})
export class AppContactDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
