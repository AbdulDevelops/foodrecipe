import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
//import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  shoppingListItems = new EventEmitter<Ingredient[]>();


  constructor() { }

  ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('tomatoes', 10)
  ]

  getShoppingCrendential(){
    return this.ingredients.slice();
  }

  addShoppingCrendential(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.shoppingListItems.emit(this.ingredients.slice())
  }
}
