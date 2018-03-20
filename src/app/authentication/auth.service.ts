import { HttpClient } from "@angular/common/http";

export class authService
{
    constructor(public httpClient: HttpClient){}
    isLoggedIn=false;
    isAuthenticated()
    {
       const promise=new Promise(
           (resolve,reject)=>
           {
            setTimeout(() => {
                resolve(this.isLoggedIn);
            }, 800);
           }
       );
       return promise;
    }
    logIn()
    {
        this.isLoggedIn=true;
    }
    logOut()
    {
        this.isLoggedIn=false;
    }
    public loginWithCredentials(email, password){
        let body = {
            email: email,
            password: password
        }
        this.httpClient.post('', body)
    }
}