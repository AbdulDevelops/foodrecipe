import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";

@Injectable({
    providedIn: 'root'
})

export class DataStorageService {

    constructor( private http: HttpClient){

    }

    StoreRecipes(){
        this.http.put('https://crud-angular-af8d6-default-rtdb.europe-west1.firebasedatabase.app/recipes', Recipe).subscribe(res=>{
            console.log(res)
        })
    }

}