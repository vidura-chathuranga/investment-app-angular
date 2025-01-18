import { Component, Input } from '@angular/core';
import type { InvestmentResult } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css',
})
export class InvestmentTableComponent {
  @Input() results?: InvestmentResult[];
}
