import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AutenticacaoService } from '../service/autenticacao.service';
import { CustomMessageService } from '../service/custom-message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private mensagemService: CustomMessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let mensagemErro = 'Adaptar para tratar mensagens do backend';

        this.mensagemService.showMessage('error', 'Erro', mensagemErro, 10000);
        return throwError(() => mensagemErro);
      }),
    );
  }



}
