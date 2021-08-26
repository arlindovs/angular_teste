import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-pedido-edicao',
  templateUrl: './pedido-edicao.component.html',
  styleUrls: ['./pedido-edicao.component.css']
})
export class PedidoEdicaoComponent implements OnInit {

  control = new FormControl();
  clientes: string[] = ['Arlindo Silva', 'Thalles Henrrique', 'Michele Cabral', 'Igor Gumarães', 'Thiago Algusto', 'Diane Freitas'];
  filteredClinetes!: Observable<string[]>;

  ngOnInit() {
    this.filteredClinetes = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.clientes.filter(cliente => this._normalizeValue(cliente).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
