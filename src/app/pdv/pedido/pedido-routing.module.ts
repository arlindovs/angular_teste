import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PedidoEdicaoComponent, ListaProdutosComponent } from "..";

export const PedidoRoutes: Routes = [
    {
        path: 'Lista',
        component: ListaProdutosComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(PedidoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PedidoRoutingModule {
    
}