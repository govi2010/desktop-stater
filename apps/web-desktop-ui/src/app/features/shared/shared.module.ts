import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@desktop-stater/web';

@NgModule({
  imports: [UIModule],
  exports: [UIModule]
})
export class SharedModule {}
