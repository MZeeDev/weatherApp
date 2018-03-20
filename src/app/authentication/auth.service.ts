
export class authService
{
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
}