import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'venda-cursos';
  course = [
    {
      courseName: 'Angular essencial',
      duration:  20
    },
    {
      courseName: 'Princípios do ReactJS',
      duration: 30
    },
    {
      courseName:  'Vuejs do 0 ao domínio',
      duration:  40
    },
    {
      courseName: 'Tudo sobre React Native',
      duration:  50
    }
];
  onNewCourse(newCourse){
    console.log(newCourse);
    this.course = [newCourse, ...this.course];
  }
}
