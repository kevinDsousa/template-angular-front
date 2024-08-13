import { AppComponent } from '@app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { PrimeNGTranslationService } from '@app/prime-ng-translation.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from '@app/core/interceptor/loading.interceptor';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from '@app/app-routes.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from '@app/core/interceptor/error.interceptor';
import { AutenticacaoInterceptor } from '@app/core/interceptor/autenticacao.interceptor';
import { AutenticacaoService } from '@app/core/service/autenticacao.service';
import { provideNgxMask } from 'ngx-mask';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(BrowserAnimationsModule),
    provideNgxMask(),
    PrimeNGTranslationService,
    MessageService,
    ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      deps: [AutenticacaoService],
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideRouter(appRoutes),
  ],
});
