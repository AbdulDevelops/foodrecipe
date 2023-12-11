import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

 import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { DisplayComponent } from './display/display.component';

import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const appRoutes: Routes = [
  //{path: '',  redirectTo:'/display',  pathMatch:'full' },
  {path: '',  component: DisplayComponent },
  { path: 'display', component: DisplayComponent },

  { path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: ':id', component: RecipeDetailComponent }
  ]},
  { path: 'shopping-list', component: ShoppingListComponent },

  //{ path: '**', component: PageNotFoundComponent }, Wildcard Route
];


 @NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class appRoutingModule{

}
