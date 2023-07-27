import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxBingmapsModule } from 'ngx-bingmaps';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxBingmapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
