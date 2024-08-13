import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacaoService } from "@app/core/service/autenticacao.service";
import { environment } from "../../../environments/environment";

export class AutenticacaoInterceptor implements HttpInterceptor {
  constructor(private autenticacaoService: AutenticacaoService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.inserirToken(request));
  }

  private inserirToken(request: HttpRequest<any>): HttpRequest<any> {
    const token = this.autenticacaoService.token;
    let clone = request;
    if (token && !request.headers.get('Authorization')) {
      clone = request.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
    }
    return clone;
  }
}
