import { Component, OnInit } from '@angular/core';
import { readFile } from 'fs';
import { csv } from 'csv-parser';

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
//  let reader = new FileReader;
//  let content = reader.readAsText("../assets/dumbyData.xlsx");
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
 
fs.createReadStream('src\assets\dumbyData.csv'))
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
  
}