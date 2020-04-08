import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@desktop-stater/utils';
import { ElectronService } from './services';

@NgModule({
  providers: [ElectronService]
})
export class DesktopStaterElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: DesktopStaterElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'DesktopStaterElectronCoreModule');
  }
}
