import { Injectable, NgZone } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomMessageService {
  messages = new Subject<Message>();
  constructor() {}

  showMessage(severity: string, summary: string, detail: string, life = 10000): void {
    this.messages.next({ severity, summary, detail, life });
  }

  showSuccess(detail: string) {
    this.showMessage('success', 'Sucesso', detail);
  }

  showWarning(detail: string) {
    this.showMessage('warn', 'Atenção', detail);
  }

  showError(detail: string) {
    this.showMessage('error', 'Erro', detail);
  }
}
