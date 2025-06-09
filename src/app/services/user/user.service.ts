import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/user/auth/AuthResponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  signupUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`,
      requestDatas
    );
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas);
  }

  isLoggedIn(): boolean {
    // Verificar se o usuário possui um token ou um cookie na aplicação
    const JWT_TOKEN = this.cookie.get('USER_INFO');
    console.log('JWT_TOKEN:', JWT_TOKEN);
    return JWT_TOKEN ? true : false;
  }
}
