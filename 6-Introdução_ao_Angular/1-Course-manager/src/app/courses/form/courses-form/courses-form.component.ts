import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CourseService} from "../../courses.service";
import {Course} from "../../course";

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent implements OnInit {
  course: Course = new Course();
  edit:boolean = false;
  constructor(private _route:ActivatedRoute,
              private coursesService:CourseService,
              private _router:Router
  ) {

  }
  ngOnInit(): void {
    let id = +this._route.snapshot.params['id'];
    if(!isNaN(id)) {
      this.edit = true;
      this.coursesService
        .listById(id)
        .subscribe((course:Course) => {
          this.course = course;
      });
    }
  }
  save(): void {
    this.coursesService
      .save(this.course)
      .subscribe(
        (course:Course) => {
          if(!this.edit) {
            alert('Adicionado com sucesso');
          } else {
            alert('Editado com sucesso');
          }
          this._router.navigateByUrl('courses',{skipLocationChange:true})
            .then(()=> {
              this._router.navigate(['courses',course.id])
            });
        } ,
        err => {
          alert('Ops , ocorreu um erro.');
        }
      )
  }

}
