import { Component } from '@angular/core';
import { ControlService } from './services/control.service';
import { Observable } from 'rxjs';
import {PumpInterface} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang15-practice';
  pumpData$!: Observable<number>;
  pumpData1$!: Observable<number>;

  constructor(private controlService: ControlService){
    this.pumpData$ = this.controlService.pumpLevel$;
    this.pumpData1$ = this.controlService.pumpLevel1$;
  }

  logChange(event: PumpInterface): void {
    this.controlService.changePumpLevel(event);
  }
}
