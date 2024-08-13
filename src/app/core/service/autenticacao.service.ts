import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AutenticacaoService {
  private nomeToken = environment.nomeToken;
  private _helperJwt: any;
  get helperJwt(): any {
    this._helperJwt = this._helperJwt
      ? this._helperJwt
      : new JwtHelperService({
          tokenGetter: localStorage.getItem(this.nomeToken),
        });
    return this._helperJwt;
  }

  private url = environment.urlApi;

  loggedIn = new BehaviorSubject<boolean>(this.isTokenValido());

  constructor(private httpClient: HttpClient, private router: Router) {}

  public login(usuario: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(),
    };
    httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Basic YW5ndWxhcjphZG1pbg==');
    const bodyRequest = `username=${usuario.documento.toLowerCase()}&password=${usuario.senha}&grant_type=password`;
    return this.httpClient.post<any>(`${this.url}oauth/token`, bodyRequest, httpOptions);
  }

  public setToken(token: string): void {
    localStorage.setItem(this.nomeToken, token);
  }

  public get token(): string {
    if (localStorage.getItem(this.nomeToken)) {
      return localStorage.getItem(this.nomeToken);
    }
    return null;
  }

  get isLoggedIn$(): any {
    return this.loggedIn.asObservable();
  }

  public isTokenValido() {
    try {
      const token = this.token;
      const tokenExpirado = this.helperJwt.isTokenExpired(token);
      if (!token || token == 'null' || tokenExpirado) return false;
      return true;
    } catch (error) {
      this.logout(true);
      return false;
    }
  }



  public logout(isAdmin: boolean): void {
    localStorage.removeItem(this.nomeToken);
    this.loggedIn.next(false);
  }
}
