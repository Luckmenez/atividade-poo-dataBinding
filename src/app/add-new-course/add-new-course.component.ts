import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent  {

  @Output () newCourse = new EventEmitter();

  createCourse(courseName, duration){
    const course = {courseName, duration};
    this.newCourse.emit(course);
  }

}
