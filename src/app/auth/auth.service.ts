import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "./auth/user.model";

export interface AuthResponseData {
  idToken: string;
  kind: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered: string,
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errorMessage: string | any;
  //user = new Subject<User>()
  user = new BehaviorSubject<User|any>(null)

  constructor(private http: HttpClient) {

  }
  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlcef81MdKNXmGQEWeXJ4lfwf2K1Chuuw',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(errorRes => {
        let errorMessage = 'An unknown error occured!'
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(() => errorMessage)
        };
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            this.errorMessage = 'this email exists already'
        }
        return throwError(() => errorMessage)
      }),
      tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
      })
    )
  }

  loginUser(email: string, password: string) {
    const loginData = { email, password, returnSecureToken: true };

    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlcef81MdKNXmGQEWeXJ4lfwf2K1Chuuw',
      loginData).pipe(
        catchError(errorRes => {
          let errorMessage = 'An unknown error occurred!';
          if (!errorRes.error || !errorRes.error.error || !errorRes.error.error.message) {
            switch (errorRes.error.error.errors.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already.';
                break;
              case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
              case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
              // Add more cases as needed based on the possible error messages from your backend
              default:
                errorMessage = 'An unknown error occurred!';
            }
          }
          return throwError(() => errorMessage);
        
        }),
        tap(resData => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
        })
      )

  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    const user = new User(email, userId, token, expirationDate)
    this.user.next(user)
  }

  logout(){
    this.user.next(null);
  }

}

