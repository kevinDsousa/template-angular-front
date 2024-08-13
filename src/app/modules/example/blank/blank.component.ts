import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMessageService } from '@app/core/service/custom-message.service';
import { BaseModule } from '@app/shared/base/base.module';
import { PrimengModule } from '@app/shared/primeng/primeng.module';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [CommonModule, BaseModule, PrimengModule],
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
})
export class BlankComponent implements OnInit {
  constructor(private customMessageService: CustomMessageService) {}

  ngOnInit(): void {
    this.customMessageService.showSuccess('Componente blank iniciado!');
  }
}
