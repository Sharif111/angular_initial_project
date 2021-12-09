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
    age:'26'
  }
  arr=['Dhaka','Bogura','Rangpur']
  getfun(name:string)
  {
    alert(name)
  }
  myName="Khokon"
  myEvent(evt:string)
  {
    console.warn(evt)
  }
  currentVal="";
  getVal(val:string)
  {
    console.warn(val)
    this.currentVal=val
  }

}
