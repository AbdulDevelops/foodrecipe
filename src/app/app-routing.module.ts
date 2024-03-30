import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

 import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { DisplayComponent } from './display/display.component';

import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit.component';
import { RecipesResolverService } from './recipes/recipes.resolver.service';
import { AuthComponent } from './auth/auth/auth.component';

const appRoutes: Routes = [
  //{path: '',  redirectTo:'/display',  pathMatch:'full' },
  {path: '',  component: DisplayComponent },
  { path: 'display', component: DisplayComponent },

  { path: 'recipes', component: RecipesComponent, children: [
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
    {path: ':id', component: RecipeDetailComponent, },

  ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  {path : 'auth', component: AuthComponent
    /* path: 'recipes', Component, RecipeListComponent,
    path: 'shopping', Component, ShoppingListComponent
  ] */}

  //{ path: '**', component: PageNotFoundComponent }, Wildcard Route
];


 @NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class appRoutingModule{

}
