import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseListComponent} from "./courses.component";
import {CoursesFormComponent} from "./form/courses-form/courses-form.component";

const routes: Routes = [
  {path:'' , component: CourseListComponent, pathMatch:'full'},
  {path:'new' , component: CoursesFormComponent, pathMatch:'full'},
  {path:':id' , component: CoursesFormComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
