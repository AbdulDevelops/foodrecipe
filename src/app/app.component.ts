import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'foodrecipe';
 //feature:boolean|any;
 loadedFeature ='recipe'

  onSelectingComponent(featureLoaded: string){
  this.loadedFeature=featureLoaded;

  }
}
