import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipeDetailesComponent } from './my-recipe-detailes.component';

describe('MyRecipeDetailesComponent', () => {
  let component: MyRecipeDetailesComponent;
  let fixture: ComponentFixture<MyRecipeDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecipeDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecipeDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
