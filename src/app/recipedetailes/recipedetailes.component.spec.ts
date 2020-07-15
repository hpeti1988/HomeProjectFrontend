import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipedetailesComponent } from './recipedetailes.component';

describe('RecipedetailesComponent', () => {
  let component: RecipedetailesComponent;
  let fixture: ComponentFixture<RecipedetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipedetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipedetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
