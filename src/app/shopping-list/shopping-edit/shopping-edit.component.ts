import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{

  subscription:Subscription|any
   editMode = false
editedItemIndex :number|any
editedIngredient:any
 @ViewChild('formValues') shoppingForm: NgForm|any

  constructor(private shoppingService: ShoppingService, private route:ActivatedRoute){}


/* 
  @ViewChild('nameInput') nameInputRef : ElementRef|any;
  @ViewChild('amountInput') amountInputRef: ElementRef|any;
 */
//@Output() addOfIngredient=  new EventEmitter<Ingredient>();

ngOnInit(): void {
  this.subscription= this.shoppingService.shoppingListUpdate.subscribe((index:number)=>{
    this.editedItemIndex=index
    this.editMode = true
    this.editedIngredient= this.shoppingService.getIngredient(index)
  this.shoppingForm.setValue({
    'name': this.editedIngredient.name,
    'amount': this.editedIngredient.amount
  })
  })
  
  //const itemId = this.route.snapshot.paramMap.get('id')
}

onFormSubmition(form:NgForm){
  const value = form.value
    /* const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value; */
    const newIngredient = new Ingredient(value.name ,value.amount);
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient)
    }
    else{
      this.shoppingService.addShoppingCrendential(newIngredient)

    }
  }

  ngOnDestroy(){
this.subscription.unsubscribe()
  }
}
