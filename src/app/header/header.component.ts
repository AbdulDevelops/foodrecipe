import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from './../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  isAuthenticated = false;
  private userSub: Subscription|any

  constructor(private dataStoregeService: DataStorageService, private authService: AuthService, private route: Router) {}

  onStoreRecipes(){
this.dataStoregeService.StoreRecipes()
  }
  onFetchData(){
    this.dataStoregeService.fetchRecipe().subscribe({
      next: recipes => {
        console.log('Fetched recipes:', recipes);
      },
      error: error => {
        console.error('Error fetching recipes:', error.message, error);
      },
      complete: () => {
        console.log('Fetch completed');
      }
    });
  }
  ngOnInit(): void {
    this.authService.user.subscribe(user =>{
      this.isAuthenticated = !!user
    /*   if (user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      } */
      
    })
  }

  ngOnDestroy(): void {
    if(this.userSub)
    this.userSub.unsubscribe()
  }

  onlogOut(){
    this.authService.logout();
    this.route.navigate(['/auth'])
  }
}
