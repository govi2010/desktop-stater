import { NgModule } from '@angular/core';
import { DesktopStaterElectronCoreModule } from '@desktop-stater/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, DesktopStaterElectronCoreModule],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
