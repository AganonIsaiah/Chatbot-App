import { Component } from '@angular/core';
import { CanvasJSAngularStockChartsModule } from '@canvasjs/angular-stockcharts';
import { sampleData } from '../../models/data';

interface JsonData {
  "date": string,
  "open": number,
  "high": number,
  "low": number,
  "close": number,
  "volume": number
}

@Component({
  selector: 'app-chart',
  imports: [CanvasJSAngularStockChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
    dps1: any = [];
    dps2: any = [];
 
    stockChartOptions = {
        exportEnabled: true,
        theme: "light2",
        title: {
            text: "Portfolio"
        },
        charts: [{
            axisY: {
                title: "Price",
                prefix: "$",
                tickLength: 0
            },
            data: [{
                type: "candlestick",
                name: "Price (in USD)",
                yValueFormatString: "$#,###.##",
                dataPoints: this.dps1
            }]
        }],
        navigator: {
            data: [{
                dataPoints: this.dps2
            }],
            slider: {
                minimum: new Date(2018, 2, 1),
                maximum: new Date(2018, 9, 31)
            }
        }
    }
    jsonData: JsonData[] = sampleData
 
    ngOnInit() {
        for (let i = 0; i < this.jsonData.length; i++) {
            this.dps1.push({ x: new Date(this.jsonData[i].date), y: [Number(this.jsonData[i].open), Number(this.jsonData[i].high), Number(this.jsonData[i].low), Number(this.jsonData[i].close)] });
            this.dps2.push({ x: new Date(this.jsonData[i].date), y: Number(this.jsonData[i].close) });
        }
    }
}
