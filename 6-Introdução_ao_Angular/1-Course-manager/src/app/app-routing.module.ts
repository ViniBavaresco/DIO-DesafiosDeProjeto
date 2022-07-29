import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo: 'courses',pathMatch:'full'},
  {path:'courses',loadChildren:()=> import('./courses/courses.module').then(c => c.CoursesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
