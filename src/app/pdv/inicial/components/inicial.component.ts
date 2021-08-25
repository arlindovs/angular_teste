import { Component, OnInit } from "@angular/core";

@Component({
    template:
    `
    <h2 fxLayoutAlign="center">Tela Inicial
    <button mat-icon-button color="primary" routerLink="/inicial">
        <mat-icon>home</mat-icon>
      </button>
    </h2>
    <router-outlet></router-outlet>
    `
})
export class InicialComponent {

}