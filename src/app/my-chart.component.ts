import { Component, OnInit } from '@angular/core';
import {
  Border,
  SeriesTooltip,
  SeriesLabels,
  CategoryAxis,
  CategoryAxisLabels,
  AxisLabelVisualArgs
} from '@progress/kendo-angular-charts/dist/es/common/property-types';
import { ChartComponent } from '@progress/kendo-angular-charts/dist/es/chart.component';
import { Group } from '@progress/kendo-drawing/dist/es/drawing';

@Component({
  selector: 'app-my-chart',
  template: `
    <kendo-chart [categoryAxis]="categoryAxis">    <!--<kendo-chart [categoryAxis]="{ labels: { template: labelTemplate } }">-->
        <kendo-chart-title text="Top Products"></kendo-chart-title>
        <kendo-chart-legend position="bottom" orientation="horizontal"></kendo-chart-legend>
        <!--<kendo-chart-tooltip [shared]="true" [visible]="true">
            <ng-template kendoChartSharedTooltipTemplate let-category="category">
               {{ category }} 
            </ng-template>
        </kendo-chart-tooltip>-->
        <kendo-chart-series >
          <kendo-chart-series-item 
            [data]="data" 
            type="column" 
            [field]="'amount'" 
            [categoryField]="'description'"
            [tooltip]="tooltip" 
            [border]="border"
            [labels]="seriesLabels"
            [color]="seriesColor()"
          ></kendo-chart-series-item>

          <kendo-chart-series-item [data]="data" type="column" [field]="'qty'" >
            <kendo-chart-series-item-tooltip [visible]="true">
              <ng-template let-category="category" let-value="value">
                <div *ngIf="category.length > 25">{{ category }}<br/></div>
                {{ value }}
              </ng-template>
            </kendo-chart-series-item-tooltip>
          </kendo-chart-series-item>
             
        </kendo-chart-series>
    </kendo-chart>
  `,
  styles: []
})
export class MyChartComponent implements OnInit {

  private data: any[] = [
    {description: 'Bicicletta da passeggio modello Graziella super Bella', amount: 125, qty: 80},
    {description: 'zucchero', amount: 75, qty: 70},
    {description: 'gatorade', amount: 50, qty: 95},
    {description: 'assistenza', amount: 25, qty: 50},
    {description: 'caramelle', amount: 10, qty: 35}
  ];

  private tooltip: SeriesTooltip = { format: "{0}", visible: true };
  private border: Border = { width: 4, color: "#000"  };
  private seriesLabels: SeriesLabels = { font: "Times New Roman", visible: true };
  private categoryAxis: CategoryAxis = { labels: { content: this.labelTemplate } };
  // private categoryAxis: CategoryAxis = { labels: { rotation: "auto", content: this.labelTemplate } };
  // private categoryAxis: CategoryAxis = { labels: { visual: this.visual} };

private visible(data)  {
  return true;
}
  constructor() { }

  ngOnInit() {
  }

  labelTemplate(e: any) {
    if (e.value.length > 25) {
      return e.value.slice(0, 25) + '...';
    } else {
      return e.value;
    }
  }

  visual(e: AxisLabelVisualArgs) {
    const elem = e.createVisual();
    return elem;
  }

  seriesColor() {
    return '#0b8c00';
  }

}
