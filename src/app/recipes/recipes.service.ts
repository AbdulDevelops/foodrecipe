import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipesService implements OnInit{

recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'runing a test on Recipe',
    'https://www.sheknows.com/wp-content/uploads/2018/08/ti8wzfbbvdspxo8dg1ci.jpeg?w=1920'),
    new Recipe('2nd tasty test recipe', 'runing a test on Recipe',
    'https://www.sheknows.com/wp-content/uploads/2018/08/ti8wzfbbvdspxo8dg1ci.jpeg?w=1920'),

  ]

ngOnInit(): void {
  //this.recipes=this.recipeWasSelected
}
  getRecipeSelection(){
    return this.recipes.slice();
  }


}
