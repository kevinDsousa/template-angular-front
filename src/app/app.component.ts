import { Component, OnInit } from '@angular/core';
import { PrimeNGTranslationService } from './prime-ng-translation.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './shared/components/header/header.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { CustomMessageService } from './core/service/custom-message.service';
import { PrimengModule } from './shared/primeng/primeng.module';
import { BlankService } from './core/service/blank.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    HeaderComponent,
    ConfirmDialogModule,
    HttpClientModule,
    NgxSpinnerModule,
    PrimengModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cearapar-participacao-societaria-front';

  constructor(
    private translationService: PrimeNGTranslationService,
    private customMessageService: CustomMessageService,
    private messageService: MessageService,
    private blankService: BlankService
  ) {}

  ngOnInit(): void {
    this.customMessageService.messages.subscribe((res) => {
      this.messageService.add(res);
    });
    this.translationService.setPortugueseTranslation();

    this.blankService.buscar().subscribe();
  }
}
