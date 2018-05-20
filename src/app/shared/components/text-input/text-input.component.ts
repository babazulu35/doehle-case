import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() icon:string;
  @Input() type:string;
  @Input() placeholder:string;
  @Input() errorMessage:string;


  constructor() { }

  ngOnInit() {

  }

}
