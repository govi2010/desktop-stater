import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@desktop-stater/web';

@Component({
  selector: 'desktop-stater-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
