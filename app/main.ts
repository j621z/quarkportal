import { bootstrap }    from '@angular/platform-browser-dynamic';
import { FORM_PROVIDERS } from '@angular/common';

// Our main component
import { AppComponent } from './app.component';

//bootstrap(AppComponent);
bootstrap(AppComponent, [
  FORM_PROVIDERS
]);
