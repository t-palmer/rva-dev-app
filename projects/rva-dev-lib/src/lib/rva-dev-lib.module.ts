import { NgModule } from '@angular/core';
import { RvaDevLibComponent } from './rva-dev-lib.component';
import { RichmondComponent } from './richmond/richmond.component';

@NgModule({
  imports: [
  ],
  declarations: [
    RvaDevLibComponent,
    RichmondComponent
  ],
  exports: [
    RvaDevLibComponent,
    RichmondComponent
  ]
})
export class RvaDevLibModule { }
