import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from "./component/not-found/not-found.component";

@NgModule({
  declarations: [NavbarComponent,NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'**',component:NotFoundComponent}
    ])
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
