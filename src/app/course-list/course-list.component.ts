import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  @Input() course;

//   course = [
//     {
//       courseName: 'Angular essencial',
//       duration:  20
//     },
//     {
//       courseName: 'Princípios do ReactJS',
//       duration: 30
//     },
//     {
//       courseName:  'Vuejs do 0 ao domínio',
//       duration:  40
//     },
//     {
//       courseName: 'Tudo sobre React Native',
//       duration:  50
//     }
// ];


}
