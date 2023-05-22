import { Component, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements AfterViewInit, OnDestroy {

  @Input()
  title!: string;
  @ViewChild('progressBar')
  private progressBarRef!: ElementRef;
  progressBar!: Chart<"doughnut", number[], string>;
  pumpData!: number;
  pumpSub!: Subscription;

  constructor(public controlService: ControlService){
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.progressBar = new Chart(this.progressBarRef.nativeElement, {
      type: "doughnut",
      data: {
        labels: ['pump progress'],
        datasets: [{
          label: 'pump',
          data: [] = [],
          backgroundColor: [
            '#8cd790',
            'grey'
          ],
          borderColor: 'none',
          borderWidth: 0,
          hoverOffset: 4,
          
        }]
      },
      options: {
        circumference: 270,
        rotation: 225,
        cutout: '75%',
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    this.pumpSub = this.controlService.pumpLevel$.subscribe(pumpData => {
      this.pumpData = pumpData;
      this.progressBar.data.datasets[0].data = [this.pumpData, 100 - this.pumpData
      ];
      this.progressBar.update();
    });
  }

  ngOnDestroy(): void {
    this.pumpSub.unsubscribe();
  }
}
