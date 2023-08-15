import { Component, OnInit, } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[]|any;

  constructor(private recipeService:RecipesService){}

  ngOnInit(){
    this.recipes=this.recipeService.getRecipeSelection();
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
