import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GallaryComponent } from './gallary/gallary.component';

const routes: Routes = [{ 
    path: '', component: AppComponent, pathMatch: 'full'
    }];
  
  @NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}