import { ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { RecipeService } from './recipes.service';


 interface Resolve {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[]
}

@Injectable({
  providedIn: 'root'
})
//Resolve genereic type and its implementation Resolve<Type>
// Resolve is used to check if a specific data is there before routing
export class RecipesResolverService implements Resolve {

  constructor(private dataStorageService: DataStorageService, private recipeServie: RecipeService) { }

  resolve(){
    const recipes = this.recipeServie.getRecipes()
    if(recipes.length === 0){

      return this.dataStorageService.fetchRecipe()
    }
    else{
      return recipes
    }
  }
}
