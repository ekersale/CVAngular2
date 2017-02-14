import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '@angular/material';


import { Ng2BootstrapModule  } from '../../node_modules/ng2-bootstrap/'

import {routing} from './app.routes';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';
import { CareerComponent } from './career/career.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { CircularBarComponent } from './circular-bar/circular-bar.component';
import { RecaptchaNoFormsModule } from 'ng2-recaptcha/ng2-recaptcha.noforms';
import { AchievementsComponent } from './achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TranslatePipe,
    CareerComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    CircularBarComponent,
    AchievementsComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    MaterialModule.forRoot(),
    Angular2FontawesomeModule,
    ReactiveFormsModule,
    RecaptchaNoFormsModule.forRoot()
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
