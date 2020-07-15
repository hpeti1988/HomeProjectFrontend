import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeuploadComponent } from './recipeupload.component';

describe('RecipeuploadComponent', () => {
  let component: RecipeuploadComponent;
  let fixture: ComponentFixture<RecipeuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
