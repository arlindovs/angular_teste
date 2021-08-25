import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InicioComponent, InicialComponent } from './components';
import { PedidoEdicaoComponent } from './components';
import { SelecionarPedidoComponent } from './components';
import { BuscarProdutoComponent } from './components';



@NgModule({
  declarations: [
    InicioComponent,
    InicialComponent,
    PedidoEdicaoComponent,
    SelecionarPedidoComponent,
    BuscarProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
})
export class InicialModule { }
