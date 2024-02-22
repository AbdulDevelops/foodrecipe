import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface AuthResponseData {
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


    constructor(private http:HttpClient){

    }
signup(email:string, password: string ){
   return this.http.post<AuthResponseData>('https://securetoken.googleapis.com/v1/token?key=[API_KEY]',
    {
 email:email,
 password:password,
 returnSecureToken:true
    })
}
} 