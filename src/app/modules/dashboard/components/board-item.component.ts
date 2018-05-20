import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
   
  @Input() dashboardList;

  constructor() { }

  ngOnInit() {
  }

}
