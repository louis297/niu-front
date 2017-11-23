import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { GallaryComponent, GallaryDetailComponent } from './gallary.component';

export const ROUTES: Routes = [
  {
    path: 'gallary',
    component: GallaryComponent
  },
  {
    path: 'gallary/:name',
    component: GallaryDetailComponent
  }
];


@NgModule({
  declarations: [
    GallaryComponent,
    GallaryDetailComponent,
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    RouterModule
  ],
  providers: [],
  // bootstrap: [GallaryComponent]
})
export class GallaryModule { }
