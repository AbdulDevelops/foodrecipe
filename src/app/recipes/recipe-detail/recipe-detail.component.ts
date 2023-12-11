import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

recipe:Recipe|any ;

id:number|any;

constructor( private recipeService:RecipesService, private route:ActivatedRoute){

}
ngOnInit(): void {
  this.route.params.subscribe((params:Params) => {
    this.id = +params['id'];
    this.recipe =this.recipeService.getRecipe(this.id)
})

}
 onAddToShoppingList(){
 this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
}
}
