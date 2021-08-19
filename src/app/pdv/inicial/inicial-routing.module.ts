import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InicialComponent, InicioComponent } from ".";

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

@NgModule({
    imports: [
        RouterModule.forChild(InicialRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InicialRoutingModule {
    
}