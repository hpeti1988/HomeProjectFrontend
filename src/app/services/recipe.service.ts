import { Recipe } from 'src/app/models/recipe';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  uploadRecipe(id: number, recipe: Recipe) {
    return this.http.post(`http://localhost:8080/api/users/${id}/recipes`, recipe, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateRecipe(id: number, recipe: Recipe) {
    return this.http.put(`http://localhost:8080/api/recipes/${id}`, recipe, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getRecipes() {
    return this.http.get<any>('http://localhost:8080/api/recipes');
  }

  getRecipe(id: number) {
    return this.http.get<any>(`http://localhost:8080/api/recipes/${id}`);
  }

  getRecipesByUser(id:number) {
    return this.http.get<any>(`http://localhost:8080/api/recipes/currentuser/${id}`)
  }

  deleteRecipe(id: number) {
    return this.http.delete<any>(`http://localhost:8080/api/recipes/${id}`);
  }

  deleteIngredient(id: number) {
    return this.http.delete<any>(`http://localhost:8080/api/ingredients/${id}`);
  }

}
