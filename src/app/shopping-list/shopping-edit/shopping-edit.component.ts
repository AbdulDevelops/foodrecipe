import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  constructor(private shoppingService: ShoppingService){}

  @ViewChild('nameInput') nameInputRef : ElementRef|any;
  @ViewChild('amountInput') amountInputRef: ElementRef|any;

//@Output() addOfIngredient=  new EventEmitter<Ingredient>();
ngOnInit(): void {
  this.shoppingService.getShoppingCrendential();
}

  addIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.addShoppingCrendential(newIngredient)
  }
}
