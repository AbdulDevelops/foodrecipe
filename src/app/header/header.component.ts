import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showAbout:boolean = true; // You can change this based on some condition
  showContact:boolean = true;

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/reciepes']);
  }

  goToAbout() {
    this.router.navigate(['/shopping-list']);
  }


}
