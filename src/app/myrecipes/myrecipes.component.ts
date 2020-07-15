import { User } from "./../models/user";
import { UserService } from "./../services/user.service";
import { RecipeService } from "./../services/recipe.service";
import { Component, OnInit } from "@angular/core";
import { Recipe } from "../models/recipe";


@Component({
  selector: "app-myrecipes",
  templateUrl: "./myrecipes.component.html",
  styleUrls: ["./myrecipes.component.css"]
})
export class MyrecipesComponent implements OnInit {
  recipes: Recipe;
  user: User;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(res => {
      this.user = res;
      console.log(res);
      this.recipeService.getRecipesByUser(this.user.id).subscribe(data => {
        this.recipes = data;})
    });
  }
}
