import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InicialComponent, InicioComponent, PedidoEdicaoComponent, SelecionarPedidoComponent, ListaProdutosComponent } from ".";



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
            },
            {
                path: '',
                component: ListaProdutosComponent
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


@NgModule({
    imports: [
        RouterModule.forChild(InicialRoutes),
        RouterModule.forChild(PedidoEdicaoRoutes),
        RouterModule.forChild(SelecionarPedidoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InicialRoutingModule {
    
}