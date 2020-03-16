import { Component, OnInit } from '@angular/core';


export interface dumbyData {
  name: string;
  number: number;
  phone: string;
} 

const ELEMENT_DATA: dumbyData[] =[{name:'A',number:1,phone:'1234'}];

  
@Component({
  selector: 'app-app-contacts',
  templateUrl: './app-contacts.component.html',
  styleUrls: ['./app-contacts.component.css']
})
export class AppContactsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'number', 'phone'];
  dataSource = ELEMENT_DATA;
  data: Blob;

  constructor() {
    console.log("hello");

   }

  ngOnInit() {
    let data='src/assets/dumbyData.csv';
    let reader = new FileReader();
    reader.readAsText(this.data);
    reader.onload = function(){console.log(reader.result);}
    reader.onerror =function(){console.log(reader.error);}

  }

}

function getData(){
  

}