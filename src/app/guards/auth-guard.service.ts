import { Injectable } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private userService: UserService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = this.userService.isLoggedIn();
    console.log('AuthGuard - isLoggedIn:', isLoggedIn);

    if (!this.userService.isLoggedIn()) {
      console.log('AuthGuard - Redirecting to /home');
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
