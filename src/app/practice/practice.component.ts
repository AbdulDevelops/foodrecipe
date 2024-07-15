import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  tryArray:[]|any= ['Apple', 'Orange', 'Banana', 'Mango']
  nameVeg:[]|any=[{name:'Carrot'}, {email:'Pease@web.com'}, {phone: '017642047721'}]

}
