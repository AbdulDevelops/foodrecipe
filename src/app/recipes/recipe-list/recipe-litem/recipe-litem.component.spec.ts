import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLitemComponent } from './recipe-litem.component';

describe('RecipeLitemComponent', () => {
  let component: RecipeLitemComponent;
  let fixture: ComponentFixture<RecipeLitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeLitemComponent]
    });
    fixture = TestBed.createComponent(RecipeLitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
