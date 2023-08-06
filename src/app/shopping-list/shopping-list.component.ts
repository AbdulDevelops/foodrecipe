import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {


  ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('tomatoes', 10)
  ]
  /* class Ingredient {
    constructor(public name: string, public quantity: number) {}
  }

  // Create instances of the Ingredient class
  const apples = new Ingredient('Apples', 5);
  const tomatoes = new Ingredient('Tomatoes', 10);

  // Create an array of Ingredient instances
  const ingredients: Ingredient[] = [apples, tomatoes]; */


  constructor(){

  }

  ngOnInit(){}

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
