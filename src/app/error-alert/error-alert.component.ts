import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent {
  @Input() message: string |any;
  @Output() close = new EventEmitter<void>()

  onClosing(){
    this.close.emit()
  }

}

