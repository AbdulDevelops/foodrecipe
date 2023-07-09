import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('simple test recipe', 'runing a test on Recipe',
    'https://assets.bonappetit.com/photos/64934404ae1041da97d81470/4:3/w_1600%2Ch_1200%2Cc_limit/20230524-SEO-RECIPES-BON-APP24118.jpg')
  ];

  constructor(){}

  ngOnInit(){

  }

}
