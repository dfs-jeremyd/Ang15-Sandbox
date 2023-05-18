import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  pumpLevel$ = new BehaviorSubject(60);
  currentPumpLevel$ = this.pumpLevel$.asObservable();

  constructor() { }

  changePumpLevel(input: number){
    this.pumpLevel$.next(input);
  }
}
