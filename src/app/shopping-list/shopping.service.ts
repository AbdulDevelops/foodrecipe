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

 private ingredients: Ingredient[]|any= [
    new Ingredient('Apples', 5),
    new Ingredient('tomatoes', 10)
  ]

  getShoppingCrendential(){
    return this.ingredients.slice();
  }
getIngredient(index:number){
  return this.ingredients[index]
}
  addShoppingCrendential(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.shoppingListItems.next(this.ingredients.slice())
  }

  addIngredients(ingredients:Ingredient[]){
    //for(let ingredient of ingredients){
      //this.addShoppingCrendential(ingredient);
    this.ingredients.push(...ingredients);
    this.shoppingListItems.next(this.ingredients.slice())
    }

  updateIngredient(index:number, newUpdtIngredient:Ingredient){
    this.ingredients[index]= newUpdtIngredient;
    this.shoppingListItems.next(this.ingredients.slice())
  }
  onDelete(index:number){
    this.ingredients.splice(index,1)
    this.shoppingListItems.next(this.ingredients.slice())
  }
}
