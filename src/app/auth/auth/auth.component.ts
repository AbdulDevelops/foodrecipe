import {  NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  username:string|any
  password:string|any
  isLoginMode: true|any
isAuthenticate = false

Login: any;
Sign: any;
constructor(private dataStorage: DataStorageService){}

  onLogin():boolean{
    if(this.username == this.username && this.password ==this.password){
this.isAuthenticate = true

    }

return true;

  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode
  this.isAuthenticate=false

  }
  onSubmitForm(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.dataStorage
form.reset()

  }
}
