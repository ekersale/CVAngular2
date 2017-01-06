import {Component, OnInit, style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
