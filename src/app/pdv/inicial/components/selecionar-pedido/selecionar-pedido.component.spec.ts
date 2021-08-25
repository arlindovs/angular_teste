import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarPedidoComponent } from './selecionar-pedido.component';

describe('SelecionarPedidoComponent', () => {
  let component: SelecionarPedidoComponent;
  let fixture: ComponentFixture<SelecionarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
