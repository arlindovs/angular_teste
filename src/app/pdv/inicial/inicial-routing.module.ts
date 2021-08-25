import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InicialComponent, InicioComponent, PedidoEdicaoComponent, SelecionarPedidoComponent, BuscarProdutoComponent } from ".";

export const InicialRoutes: Routes = [
    {
        path: 'inicial',
        component: InicialComponent,
        children: [
            {
                path: '',
                component: InicioComponent
            }
        ]
    }
];

export const PedidoEdicaoRoutes: Routes = [
    {
        path: 'pedidoedicao',
        component: InicialComponent,
        children: [
            {
                path: '',
                component: PedidoEdicaoComponent
            }
        ]
    }
];

export const SelecionarPedidoRoutes: Routes = [
    {
        path: 'selecionarpedido',
        component: InicialComponent,
        children: [
            {
                path: '',
                component: SelecionarPedidoComponent
            }
        ]
    }
];

export const SelecionarProdutoRoutes: Routes = [
    {
        path: 'selecionarproduto',
        component: InicialComponent,
        children: [
            {
                path: '',
                component: BuscarProdutoComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(InicialRoutes),
        RouterModule.forChild(PedidoEdicaoRoutes),
        RouterModule.forChild(SelecionarPedidoRoutes),
        RouterModule.forChild(SelecionarProdutoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InicialRoutingModule {
    
}