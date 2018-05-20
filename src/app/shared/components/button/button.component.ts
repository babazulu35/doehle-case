import { Component, OnInit, HostBinding, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @HostBinding('class.c-button') true;
  @HostBinding('class.c-button--primary') isPrimary: boolean;
  @HostBinding('class.c-button--secondary') isSecondary: boolean;
  @HostBinding('class.c-button--disabled') @Input() isDisabled: boolean;

  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  @HostListener('click', ['$event']) clickHandler(event) {
    if (!this.isDisabled) {
      this.clickEvent.emit(event);
    }
  }

  @Input()
  set theme(value: string) {
    this.buttonTheme = value;
    this.isPrimary = this.buttonTheme === 'primary';
    this.isSecondary = this.buttonTheme === 'secondary';

  }

  // tslint:disable-next-line:member-ordering
  @Input() type = 'button';
  // tslint:disable-next-line:member-ordering
  @Input() label: string;

  // tslint:disable-next-line:member-ordering
  buttonTheme: string;

  constructor() { }

  ngOnInit() {
  }

}
