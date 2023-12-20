import { Component, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnDestroy {


  ingredients: Ingredient[]|any;
  ngSubscription : Subscription|any;

  /* class Ingredient {
    constructor(public name: string, public quantity: number) {}
  }

  // Create instances of the Ingredient class
  const apples = new Ingredient('Apples', 5);
  const tomatoes = new Ingredient('Tomatoes', 10);

  // Create an array of Ingredient instances
  const ingredients: Ingredient[] = [apples, tomatoes]; */


  constructor(private shoppingService: ShoppingService){

  }

  ngOnInit(){
    this.ingredients= this.shoppingService.getShoppingCrendential()
    this.ngSubscription= this.shoppingService.shoppingListItems.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
    })
  }

 /*  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.shoppingListItems.subscribe((ingredient:Ingredient)=>{
      this.ingredients=ingredient;
    })
  } */
  ngOnDestroy(){
this.ngSubscription.unsubscribe();
  }

  oneEdit(index:number){
    this.shoppingService.shoppingListUpdate.next(index)
  }
}
