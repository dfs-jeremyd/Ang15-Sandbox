import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PumpInterface } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  pumpLevel$ = new BehaviorSubject(60);
  // currentPumpLevel$ = this.pumpLevel$.asObservable();
  pumpLevel1$ = new BehaviorSubject(35);

  constructor() { }

  changePumpLevel(input: PumpInterface){
    switch (input.pumpId) {
      case 1:
        this.pumpLevel$.next(input.event);
        break;
      case 2:
        this.pumpLevel1$.next(input.event);
        break;
    }
  }
}
