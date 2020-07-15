import { UserService } from './../services/user.service';
import { Ingredient } from './../models/ingredient';
import {Recipe} from './../models/recipe';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {RecipeService} from '../services/recipe.service';
import {Router} from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-recipeupload',
  templateUrl: './recipeupload.component.html',
  styleUrls: ['./recipeupload.component.css']
})
export class RecipeuploadComponent implements OnInit {
  user: User;
  recipe: Recipe = new Recipe();
  ingredient: Ingredient = new Ingredient();

  constructor(private http: HttpClient, private recipeUpload: RecipeService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      (res) => {this.user = res;
                console.log(this.user)}
    )

    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.recipe = {
      id: 0,
      name: '',
      description: '',
      ingredients: []
    }
  }

  addIngredient() {
    this.recipe.ingredients.unshift(this.ingredient);
    this.ingredient = new Ingredient();
    console.log(this.ingredient)
    console.log(this.recipe.ingredients)
  }

  onSubmit() {
    console.log(this.ingredient);
    console.log(this.recipe);
    this.recipeUpload.uploadRecipe(this.user.id ,this.recipe)
      .subscribe((data: any) => {
          alert('Successful upload!');
 /*          this.resetForm(form); */
          this.router.navigateByUrl('/recipes');
        },
        err => alert('An error has occured!')
      );
  }
  deleteIngredient(i) {
    this.recipe.ingredients.splice(i, 1);
  }

}
