import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ngx-slider-v2';
import { Observable, Subscription } from 'rxjs';
import { PumpInterface } from 'src/app/models';

@Component({
  selector: 'app-panel-wrapper',
  templateUrl: './panel-wrapper.component.html',
  styleUrls: ['./panel-wrapper.component.scss']
})
export class PanelWrapperComponent implements OnInit, OnDestroy{

  @Input()
  pumpId!: number;
  @Input()
  pumpData$!: Observable<number>;
  pumpData!: number;
  pumpSub!: Subscription;

  @Output()
  sliderChangeEvent: EventEmitter<PumpInterface> = new EventEmitter();
  
  isManual: boolean = true;
  options: Options = {
    floor: 0,
    ceil: 100,
  };

  ngOnInit(): void {
    this.pumpSub = this.pumpData$.subscribe(pumpLevel => this.pumpData = pumpLevel);
  }

  logChange(event: number): void{
    this.sliderChangeEvent.emit({event: event, pumpId: this.pumpId});
  }

  ngOnDestroy(): void {
    this.pumpSub.unsubscribe();
  }
}
