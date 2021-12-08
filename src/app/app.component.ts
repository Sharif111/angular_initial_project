import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Angular';
  name='Shariful Islam'
  getName()
  {
    return this.name
  }
  obj=
  {
    name:'sharif',
    age:'25'
  }
  arr=['peter','sunny','helen']

}
