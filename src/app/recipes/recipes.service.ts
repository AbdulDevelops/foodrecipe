import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';


@Injectable({
  providedIn: 'root'
})
export class RecipesService implements OnInit{

recipeWasSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe('Burger Recipe',
    'Super delcious Burger',
    'https://www.thecookierookie.com/wp-content/uploads/2023/06/crockpot-chicken-alfredo-sandwiches-recipe-3.jpg',
    [
      new Ingredient('Meat', 2),
      new Ingredient('Fries', 20)
  ]),

    new Recipe('Bread Recipe',
    'A matchless taste',
    'https://www.foodandwine.com/thmb/fALzoR6zWFVhtcV3PRoMv2uqmF4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000-0984c1b513ae4af396aee039afa5e38c.jpg',
    [
      new Ingredient('Bread', 10),
      new Ingredient('Toast', 2)

    ]
      ),

  ]
  constructor(private shoppingService: ShoppingService) { }


ngOnInit(): void {
  //this.recipes=this.recipeWasSelected
}
  getRecipeSelection(){
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes.slice()[index];
  }

  addIngredientToShoppingList(ingredients:Ingredient[]){
this.shoppingService.addIngredients(ingredients);
  }


}
