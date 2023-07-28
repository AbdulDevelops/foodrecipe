import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() featureAdding = new EventEmitter<string>();


  constructor() {}

  onSelect(feature:string) {
    this.featureAdding.emit(feature);

  }

}
