/**
 * Created by ekersale on 30/11/2016.
 */

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_FR_NAME, LANG_FR_TRANS } from './lang-fr';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
const dictionary = {
  [LANG_EN_NAME]: LANG_EN_TRANS,
  [LANG_FR_NAME]: LANG_FR_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
  { provide: TRANSLATIONS, useValue: dictionary },
];
