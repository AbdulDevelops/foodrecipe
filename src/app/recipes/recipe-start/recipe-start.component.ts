import { Component, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipesService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent {

  @ViewChild('nameInput') nameInputRef : ElementRef|any;
  @ViewChild('descInput') amountInputRef: ElementRef|any;
  @ViewChild('imgPath') imgPathInputRef: ElementRef|any;
  @ViewChild('putIngredient') ingredientInputref: ElementRef|any;


constructor(private shoppingService:ShoppingService, private recipeService: RecipesService ){

}

  /* addNewRecipe(){
    
      const recName = this.nameInputRef.nativeElement.value;
      const recAmount = this.amountInputRef.nativeElement.value;
      const imgPath = this.imgPathInputRef.nativeElement.value;
      const myIngredient = this.ingredientInputref.nativeElement.value;
      const newRecipe = new Recipe(recName, recAmount, imgPath, myIngredient);
      this.recipeService.addingNewRecipe()
    } */
  }

