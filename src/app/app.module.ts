import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
//import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [/*{provide: LOCALE_ID, useValue: "es"}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
