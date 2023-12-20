import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';
import {  Injectable } from '@angular/core';
//import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  shoppingListItems = new Subject<Ingredient[]>();
  shoppingListUpdate =  new Subject<number>()

  constructor() { }

 private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('tomatoes', 10)
  ]

  getShoppingCrendential(){
    return this.ingredients.slice();
  }

  addShoppingCrendential(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.shoppingListItems.next(this.ingredients.slice())
  }

  addIngredients(ingredients:Ingredient[]){
    for(let ingredient of ingredients){
      this.addShoppingCrendential(ingredient);
    //this.ingredients.push(...ingredients);

    }
    this.shoppingListItems.next(this.ingredients.slice())
  }
}
