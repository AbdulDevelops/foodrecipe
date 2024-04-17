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

  constructor(private dataStoregeService: DataStorageService, private authService: AuthService) {}

  onStoreRecipes(){
this.dataStoregeService.StoreRecipes()
  }
  onFetschData(){
    this.dataStoregeService.fetchRecipe().subscribe()

  }
  ngOnInit(): void {
    this.authService.user.subscribe(user =>{
      this.isAuthenticated = !!user
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}
