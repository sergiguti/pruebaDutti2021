import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html'
})
export class ErrorMessagesComponent {

  @Input() control: AbstractControl;

  constructor() {
  }

}
