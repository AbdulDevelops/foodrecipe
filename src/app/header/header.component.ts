import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() featureAdding = new EventEmitter<string>();


  constructor(private dataStoregeService: DataStorageService) {}


//Pull Push

/*   onSelect(feature:string) {
    this.featureAdding.emit(feature);

  } */
  onStoreRecipes(){
this.dataStoregeService.StoreRecipes()
  }

}
