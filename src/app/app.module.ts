import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { PizzaComponent } from './pizza/pizza.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
