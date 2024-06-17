import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  username: string | any;
  password: string | any;
  isLoginMode: true | any;
  errorMessage: string | any;
  loader: any = false;
  error: string |any;
  email: string | any;
  observeObj: Observable<AuthResponseData> | any;

  constructor(private authService: AuthService, private route: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmitForm(form: NgForm) {
    if (!form.valid) {
      return;
    }
    
    const email = form.value.email;
    const password = form.value.password;
    this.loader = true;
    
    if (this.isLoginMode) {
      this.authService.loginUser(email, password).subscribe({
        next: (response:any) =>{
          console.log('Login successful', response),
           this.loader = false,
          this.route.navigate(['/recipes'])
         }, error: (e)=> {
          this.errorMessage = e.error?.message || 'An unknown error occurred!';
          this.loader = false;
        }
    });
    } else {
      this.authService.signup(email, password).subscribe({
        next: (resData:any) => {
          console.log('Signup Successful',resData);
          this.loader = false;
          form.reset();
        },
        error: (e) => {
          this.errorMessage = e.error?.message || 'ERROR: Email already exists';
          this.loader = false;
        }
    });
    }
    
  }
  onClose(){
    this.errorMessage =null
  }
}
