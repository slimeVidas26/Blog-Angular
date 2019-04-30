import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public hideme = false;//hide the addForm tab in the top menu

  constructor() { }

  ngOnInit() {
  }

}
