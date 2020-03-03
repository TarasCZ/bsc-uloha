import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'bsc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  languages = ['cz', 'en'];
  currentLanguage = 'cz';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.currentLanguage);
  }

  onLanguageSelect({ value }: MatSelectChange) {
    this.currentLanguage = value;
    this.translate.use(value);
  }
}
