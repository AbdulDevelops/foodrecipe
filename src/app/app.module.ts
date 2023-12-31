import { appRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
//import  appRoutes  from './routerConfig';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipesService } from './recipes/recipes.service';
import { ShoppingService } from './shopping-list/shopping.service';
import { DisplayComponent } from './display/display.component';
import { RecipeEditComponent } from './recipes/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { DataStorageService } from './shared/data-storage.service';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  RecipeItemComponent,
  DropdownDirective,
  DisplayComponent,
  RecipeStartComponent,
  RecipeEditComponent,
  ],

  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    appRoutingModule,
  HttpClientModule

   // RouterModule.forRoot(appRoutes)


  ],
  providers: [RecipesService, ShoppingService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
