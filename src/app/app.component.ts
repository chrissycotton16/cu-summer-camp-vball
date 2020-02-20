import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cu-summer-camp';
  items:Array<any>=[];
  constructor(){
    this.items=[
      {name: 'assets/images/aichinger.jpg'},
      {name: 'assets/images/cotton_pittman_hug.jpg'},
      {name: 'assets/images/cotton_robertson.jpg'},
      {name: 'assets/images/teamPic.jpg'},
      {name: 'assets/images/pittman_holden.jpg'},
      {name: 'assets/images/holden_serve.jpg'}
    ];

  }
}
