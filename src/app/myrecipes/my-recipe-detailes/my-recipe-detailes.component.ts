import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-my-recipe-detailes',
  templateUrl: './my-recipe-detailes.component.html',
  styleUrls: ['./my-recipe-detailes.component.css']
})
export class MyRecipeDetailesComponent implements OnInit {

  recipe: Recipe = new Recipe();
  ingredient: Ingredient = new Ingredient();
  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    let id: any = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.recipeService.getRecipe(id).subscribe((res) => this.recipe = res)
    console.log(this.ingredient);
  }

  delete() {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.recipeService.deleteRecipe(id).subscribe();
    this.router.navigateByUrl("/myRecipes");
    location.reload;
  }

  onSubmit() {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.recipeService.updateRecipe(id, this.recipe).subscribe();
    this.router.navigateByUrl("/myRecipes"); 
  }

  deleteIngredient(i) {
    let id = this.recipe.ingredients[i].id;
    console.log(id);
    this.recipe.ingredients.splice(i, 1);
    console.log(this.recipe.ingredients);
    this.recipeService.deleteIngredient(id).subscribe();

  }

  addIngredient() {
    this.recipe.ingredients.push(this.ingredient);
    this.ingredient = new Ingredient();
    console.log(this.ingredient)
    console.log(this.recipe)
  }
}
