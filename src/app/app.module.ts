import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { AppRoutingModule } from './app.routing-module';

import { AppComponent } from './app.component';
import { ModuleLoaderComponent } from './module-loader/module-loader.component';


// const routerOptions: ExtraOptions = {
//     anchorScrolling: "enabled",
//     scrollPositionRestoration: 'enabled'
// }

@NgModule({
    imports: [
      AppRoutingModule,
      BrowserModule, FormsModule, ReactiveFormsModule
    ],
    declarations: [ AppComponent, ModuleLoaderComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
