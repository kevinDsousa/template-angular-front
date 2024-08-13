import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@app/shared/primeng/primeng.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  display = false;

  constructor(
  ) {}

}
