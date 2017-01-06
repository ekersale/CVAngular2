import {Component, OnInit} from '@angular/core';
import { TranslateService } from './translate';

require('./particule');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public supportedLanguages : any [];

  constructor(private _translate: TranslateService) {
    this.supportedLanguages = this._translate.availableLangage;
    console.log(this.supportedLanguages);
  }

  ngOnInit() {
      this.selectLang('en');
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    this._translate.use(lang);
  }
}
