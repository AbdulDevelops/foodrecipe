import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

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
}
