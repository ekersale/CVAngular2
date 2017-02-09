/**
 * Created by ekersale on 29/11/2016.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }    from './home/home.component';
import { CareerComponent } from './career/career.component';
import {EducationComponent} from "./education/education.component";
import {SkillsComponent} from "./skills/skills.component";
import {ContactComponent} from "./contact/contact.component";
import { AchievementsComponent } from './achievements/achievements.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'me',
    pathMatch: 'full'
  },
  {
    path: 'me',
    component: HomeComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'achievements',
    component: AchievementsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
