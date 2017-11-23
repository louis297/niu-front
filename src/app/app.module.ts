import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { GallaryModule } from './gallary/gallary.module';
import { IndexComponent } from './index/index.component';

export const ROUTES: Routes = [];




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    GallaryModule,
    AppRoutingModule,
    RouterModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
