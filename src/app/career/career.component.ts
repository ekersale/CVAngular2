import {Component, OnInit, style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateY(100%)'}))
      ])
    ])
  ]

})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
