import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError, tap, throwError } from "rxjs";
import { User } from "./auth/user.model";

export interface AuthResponseData {
    idToken: string;
    kind:string,
    email :string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered:string,
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
  errorMessage: string|any;
   user = new Subject<User>()

    constructor(private http:HttpClient){

    }
signup(email:string, password: string ){
   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlcef81MdKNXmGQEWeXJ4lfwf2K1Chuuw',
    {
 email:email,
 password:password,
 returnSecureToken:true
    }
    ).pipe(
      catchError(errorRes =>{
        let errorMessage = 'An unknown error occured!'
        if (!errorRes.error || !errorRes.error.error){
        return throwError(()=> errorMessage)
        };
        switch (errorRes.error.error.message){
          case 'EMAIL_EXISTS':
            this.errorMessage = 'this email exists already'
          }
            return throwError(()=> errorMessage)
        }),
        tap(resData =>{
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
      })
    )
    }

 loginUser(email: string, password: string) {
  const loginData = { email, password, returnSecureToken:true};

    const response = this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlcef81MdKNXmGQEWeXJ4lfwf2K1Chuuw', loginData)

    return response; // Assuming the backend returns a token upon successful login

}

private handleAuthentication(email: string, userId: string, token:string, expiresIn: number ){
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000 )
  const user = new User( email, userId,  token, expirationDate)
  this.user.next(user)
}

}
function resData(value: unknown): void {
  throw new Error("Function not implemented.");
}

