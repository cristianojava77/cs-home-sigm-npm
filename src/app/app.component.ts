import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SIGM v0.1 alpha';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'pt-BR']);
    translate.setDefaultLang('en-US');
  }

}
