import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipesService } from './recipes.service';
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { ActivatedRoute,Params } from "@angular/router";
import { ElementRef } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
       selector:  'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {
id:number|any;
editMode:string|any
 recipeForm:NgForm|any
/* @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;
@ViewChild('descInput') descInputRef!: ElementRef<HTMLInputElement>;
@ViewChild('imageInput') imageInputRef!: ElementRef<HTMLInputElement>; */

constructor(private route: ActivatedRoute, private recipeService:RecipesService){

}
    ngOnInit(): void {
         this.route.params.subscribe((params:Params)=>{
            this.id = +params['id']
        }),
         this.route.params.subscribe((params:Params)=>{
            this.editMode = params['id'] !=null;
            console.log(this.editMode)
        })
    }
    private initForm(){
        let recipeName = '';
        let recipeImgaesPath ='';
        let recipeDescription = '';

        if (this.editMode){
    const recipe = this.recipeService.getRecipe(this.id)
    recipeName = recipe.name,
    recipeImgaesPath =recipe.imagePath,
    recipeDescription = recipe.description
        }
  this.recipeForm = new FormGroup({
    'name' :  new  FormControl(recipeName),
    'imagePath': new FormControl(recipeImgaesPath),
    'descrption': new FormControl(recipeDescription)
  })

    }
    onAddRecipes(form:NgForm){
        
        /* const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value; */
        const newRecipe = new Recipe(form.value.name , form.value.desc, form.value.imagePath, form.value.Ingredient[0]);
        
        this.recipeService.addRecipeIngredient(this.editMode)
       
        console.log(newRecipe)
    
          this.editMode = false
    
        this.recipeForm.reset()
      }
       /*    const enteredName = this.recipeForm.value;
          const enteredDesc = this.recipeForm.value;
          const enteredImage = this.recipeForm.value;
          const newIngre = this.recipeForm.value;
      const recipeObj = new Recipe(enteredName,enteredDesc, enteredImage, newIngre)
          console.log('Recipe Name:', enteredName);
          console.log('Recipe Description:', enteredDesc);
          console.log('Image Path:', enteredImage);
       */
    }

