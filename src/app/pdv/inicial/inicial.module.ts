import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { InicioComponent, InicialComponent } from './components';



@NgModule({
  declarations: [
    InicioComponent,
    InicialComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class InicialModule { }
