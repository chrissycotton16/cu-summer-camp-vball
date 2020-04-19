import { Component, OnInit } from '@angular/core';
import data from '../data.json';
import { AppContactDialogComponent } from './app-contact-dialog/app-contact-dialog.component.js';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData{
  number: string;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-app-contacts',
  templateUrl: './app-contacts.component.html',
  styleUrls: ['./app-contacts.component.css']
})
export class AppContactsComponent {

  Users: any = data;

  number: string;
  name: string;
  phone: string;

  addString: string;
  constructor(public dialog: MatDialog) {}

    openDialog1(): void{
      const dialogRef1 = this.dialog.open(AppContactDialogComponent, {
        width: '300px',
        data: {number: this.number, name: this.name, phone: this.phone}
      });
  
      dialogRef1.afterClosed().subscribe(result => {
        this.addString = ",{ 'number': " + this.number + ", 'name': '" + this.name + "', 'phone': '" + this.phone + "' }";
        this.addString = result;
      });
    
      console.log(this.addString);
  }
  
}
