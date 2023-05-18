import { Component, OnDestroy, OnInit } from '@angular/core';
import { Options } from 'ngx-slider-v2';
import { Subscription } from 'rxjs';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-panel-wrapper',
  templateUrl: './panel-wrapper.component.html',
  styleUrls: ['./panel-wrapper.component.scss']
})
export class PanelWrapperComponent implements OnInit, OnDestroy{

  pumpData!: number;
  pumpSub!: Subscription;
  isManual: boolean = true;
  options: Options = {
    floor: 0,
    ceil: 100,
  };

  constructor(public controlService: ControlService) {  }

  ngOnInit(): void {
    this.pumpSub = this.controlService.pumpLevel$.subscribe(pumpLevel => {
      this.pumpData = pumpLevel;
    });
  }

  logChange(event: any){
    this.controlService.changePumpLevel(event);
  }

  manualMode(){
    this.isManual = !this.isManual;
    if(this.isManual){
      this.controlService.changePumpLevel(0);
    }
    this.options.disabled = this.isManual;
  }

  ngOnDestroy(): void {
    this.pumpSub.unsubscribe();
  }
}
