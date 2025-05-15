import { Component } from '@angular/core';
import { ChartType, ChartData } from 'chart.js';
import { selectStatusDistribution, selectTrendPrices } from '../../../store/product.store';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-chart',
  standalone: true,
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css'],
  imports: [CommonModule, NgChartsModule],
})
export class ProductChartComponent {
  pieChartType: ChartType = 'pie';
  lineChartType: ChartType = 'line';

  get statusChart(): ChartData<'pie'> {
    const data = selectStatusDistribution();
    return {
      labels: ['In Stock', 'Out of Stock', 'Pending'],
      datasets: [
        {
          data,
          label: 'Status Distribution',
          backgroundColor: ['#ff0000', '#00ff00', '#0000ff'],
        },
      ],
    };
  }

  get trendChart(): ChartData<'line'> {
    const { labels, data } = selectTrendPrices();
    return {
      labels,
      datasets: [
        {
          data,
          label: 'Trends Over Time',
          borderColor: '#00ff00',
          fill: false,
        },
      ],
    };
  }
}
