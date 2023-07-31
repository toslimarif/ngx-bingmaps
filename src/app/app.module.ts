import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxBingmapsModule } from 'ngx-bingmaps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { AccordionModule } from 'primeng/accordion';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { NgOptimizedImage } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxBingmapsModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    ReactiveFormsModule,
    DropdownModule,
    NgOptimizedImage,
    FieldsetModule,
    ChipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
