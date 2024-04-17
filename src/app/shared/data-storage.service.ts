import { AuthService } from './../auth/auth.service';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";
import { exhaustMap, map, take, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authservice: AuthService) {
  }

  StoreRecipes() {

    const recipes = this.recipeService.getRecipes()

    this.http.put('https://angular-http-example-db8a6-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(res => {
      console.log(res)
    })
  }
  fetchRecipe() {

        return this.http.get<Recipe[]>('https://angular-http-example-db8a6-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
      .pipe(map(recipes => {
      return recipes.map((recipe:any) => {
        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
      })



    }),
      //trigger a side effect to update a state and managing a data flow
      tap(recipes => {
        this.recipeService.setRecipes(recipes)

      })
      )
  }

}
