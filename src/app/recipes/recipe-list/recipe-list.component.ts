import { Component, OnInit,  OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[]|any;
  activeIndex = -1;
  subscription:Subscription|any

  constructor(private recipeService:RecipeService, private route:Router, private router:ActivatedRoute){}

  ngOnInit(){
    this.subscription =this.recipeService.recipesChanged.subscribe(
      (recipe:Recipe[])=>{
      this.recipes =recipe
      })
    this.recipes=this.recipeService.getRecipes();
  }
   // Initialize the active index as -1 to start with no active selection

   onAddingNewRecipe(){
    this.route.navigate(['new'], {relativeTo: this.router})
/* this.recipeService.addIngredientToShoppingList(this.recipes);
console.log(this.recipeService.addIngredientToShoppingList(this.recipes)) */
   }
   ngOnDestroy(){
this.subscription.unsubscribe()
   }

}
/* @Output() recipeWasSelected = new EventEmitter<Recipe>();

recipes: Recipe[] = [
  new Recipe('A test recipe', 'runing a test on Recipe',
  'https://www.sheknows.com/wp-content/uploads/2018/08/ti8wzfbbvdspxo8dg1ci.jpeg?w=1920'),
  new Recipe('A test recipe', 'runing a test on Recipe',
  'https://www.sheknows.com/wp-content/uploads/2018/08/ti8wzfbbvdspxo8dg1ci.jpeg?w=1920'),

]

constructor(){}

ngOnInit(){

}
onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe);

}
 */
