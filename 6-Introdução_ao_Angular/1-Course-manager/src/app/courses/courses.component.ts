import { Component, OnInit } from '@angular/core';
import {Course} from "./course";
import {CourseService} from "./courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy: string = '';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.courseService.list().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error', err)
    })
  }
  deleteById(courseId: number): void {
    if(confirm('Confirm ?')) {
      this.courseService.delete(courseId).subscribe({
        next: () => {
          console.log('Deleted with success');
          this.list();
        },
        error: err => console.log('Error', err)
      })
    }
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }

}
