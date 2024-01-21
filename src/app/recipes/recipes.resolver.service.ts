import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageService: DataStorageService) { }

  resolve( route:  ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[]{
    return this.dataStorageService.fetchRecipe()
  }
}
