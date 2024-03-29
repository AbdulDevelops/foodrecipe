import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe|any;
  @Input() index: number|any;
//parent to child communication
  //@Output() recipeSelected= new EventEmitter<void>();



/*   onSelected(){
this.recipeService.recipeWasSelected.emit(this.recipe);
  } */
}
