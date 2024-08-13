import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMessageService } from '@app/core/service/custom-message.service';
import { BaseModule } from '@app/shared/base/base.module';
import { PrimengModule } from '@app/shared/primeng/primeng.module';
import { HttpClient } from '@angular/common/http';
import { BlankService } from '@app/core/service/blank.service';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, BaseModule, PrimengModule],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  constructor(
    private customMessageService: CustomMessageService
  ) {}

  ngOnInit(): void {
    this.customMessageService.showSuccess('Componente Example iniciado!');

  }
}
