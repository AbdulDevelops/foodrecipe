import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe|any;
  //@Output() recipeSelected= new EventEmitter<void>();



/*   onSelected(){
this.recipeService.recipeWasSelected.emit(this.recipe);
  } */
}
