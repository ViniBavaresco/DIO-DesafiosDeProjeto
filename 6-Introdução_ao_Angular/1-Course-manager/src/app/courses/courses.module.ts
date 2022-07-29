import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { PipeModule } from "../shared/pipe/pipe.module";
import { RouterModule } from "@angular/router";
import { CoursesComponent } from "./courses.component";
import { StarComponent } from "../shared/star/star.component";
import {FormsModule} from "@angular/forms";
import { CoursesFormComponent } from './form/courses-form/courses-form.component';

@NgModule({
  declarations: [CoursesComponent,StarComponent, CoursesFormComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    PipeModule,
    RouterModule,
    FormsModule
  ]
})
export class CoursesModule { }
