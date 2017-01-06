import {Component, Input, ViewChild, ElementRef, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Rx'

@Component({
  selector: 'circularbar',
  templateUrl: './circular-bar.component.html',
  styleUrls: ['circular-bar.component.scss']
})
export class CircularBarComponent {
  private _value : number = 0;
  private _barvalue : number = 272;
  private _counter : number=  0;
  private timer = Observable.interval(0);
  private barColor = "#F17153";

  constructor(private zone:NgZone) {}

  @ViewChild('bar') el:ElementRef;

  @Input()
  set value(value: number) {
    this._value = value;
    this._counter = ((100 - this._value) / 100) * 285;


    if (this._value < 0) { this._value = 0;}
    if (this._value > 100) { this._value = 100;}

    let subscribtion = this.timer.subscribe(() => {
      let calc = 100 - (this._barvalue/272 * 100);
      if (calc < 30)
        this.barColor = "red";
      if (calc >= 30 && calc < 60)
        this.barColor = "orange";
      if (calc >= 60)
        this.barColor = "green";
      if (this._barvalue > this._counter)
        this._barvalue--;
      else
        subscribtion.unsubscribe();
    })
  }

  @Input() skill: string;
  @Input() level: string;
}
