import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { authService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService:authService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated().then(
        (authentication:boolean)=>
        {
            if (authentication) {
                return true;
                
            }
            else 
            {
                this.router.navigate(['/']);
            }
        }
    );
  }
}
