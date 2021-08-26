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
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PedidoEdicaoComponent } from './components';
import { SelecionarPedidoComponent } from './components';
import { ListaProdutosComponent } from '../pedido/components/pedido-edicao';



@NgModule({
  declarations: [
    PedidoEdicaoComponent,
    SelecionarPedidoComponent,
    ListaProdutosComponent
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
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
})
export class PedidoModule { }
