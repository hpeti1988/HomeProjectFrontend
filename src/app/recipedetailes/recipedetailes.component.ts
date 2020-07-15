import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../services/recipe.service';
import {Recipe} from '../models/recipe';

@Component({
  selector: 'app-recipedetailes',
  templateUrl: './recipedetailes.component.html',
  styleUrls: ['./recipedetailes.component.css']
})
export class RecipedetailesComponent implements OnInit {

recipe: Recipe = new Recipe();

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    let id: any = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.recipeService.getRecipe(id).subscribe((res) => this.recipe = res)
 
  }
}
