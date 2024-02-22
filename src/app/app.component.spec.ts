import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipes/recipes.service';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterModule], // Add HttpClientModule to imports
    providers: [DataStorageService, RecipeService  ],
    declarations: [AppComponent, HeaderComponent,  ]
  }));
  it('should be created', () => {
    const service: DataStorageService = TestBed.inject(DataStorageService);
    expect(service).toBeTruthy();
  });
  /* it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    expect(app).toBeTruthy();
  }); */

   it(`should have as title 'foodrecipe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.title).toEqual('foodrecipe');
  }); 

/*   it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    
    fixture.detectChanges(); 
    expect(compiled.querySelector('.content span')?.textContent).toContain('foodrecipe app is running!');
  }); */
});

