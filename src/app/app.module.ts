import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RvaDevLibModule } from 'rva-dev-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RvaDevLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
