import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  show = true;

  phrase: any = {
    message: 'This is a message',
    author: 'Luisdany Pernillo'
  };

  characters: string[] = ['Luke Skywalker', 'Darth Vader', 'Obi Wan', 'Darth Revan', 'Darth Sidius'];

  constructor() { }

  ngOnInit() {
  }

}
