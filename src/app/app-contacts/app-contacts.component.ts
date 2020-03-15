import { Component, OnInit } from '@angular/core';


export interface dumbyData {
  name: string;
  number: number;
  phone: string;
} 

const ELEMENT_DATA: dumbyData[] =[];
@Component({
  selector: 'app-app-contacts',
  templateUrl: './app-contacts.component.html',
  styleUrls: ['./app-contacts.component.css']
})
export class AppContactsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'number', 'phone'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

function getData(){


}