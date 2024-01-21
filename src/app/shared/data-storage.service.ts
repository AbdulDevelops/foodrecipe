import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";
import {  map, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataStorageService {

    constructor( private http: HttpClient, private recipeService: RecipeService){
    }

    StoreRecipes(){

      const recipes = this.recipeService.getRecipes()

        this.http.put('https://angular-http-example-db8a6-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(res=>{
            console.log(res)
        })
    }
    fetchRecipe(){
      return this.http.get<Recipe[]>('https://angular-http-example-db8a6-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
       .pipe(map(recipes =>{
        return recipes.map(recipe =>{
          return{...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        })



      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes)

      })
      )
  }

}
