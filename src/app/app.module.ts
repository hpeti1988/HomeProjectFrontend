import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { RecipeuploadComponent } from './recipeupload/recipeupload.component'
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipedetailesComponent } from './recipedetailes/recipedetailes.component';
import { MyRecipeDetailesComponent } from './myrecipes/my-recipe-detailes/my-recipe-detailes.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';



const appRoutes: Routes = [
{path: 'login', component: LoginComponent}, 
{path: 'myRecipes', component: MyrecipesComponent},
{path: 'users', component: UsersComponent},
{path: 'recipeUpload', component: RecipeuploadComponent},
{path: 'recipes', component: RecipesComponent},
{path: 'recipes/:id', component: RecipedetailesComponent},
{path: 'myRecipes/:id', component: MyRecipeDetailesComponent},
{path: 'register', component: RegisterComponent},
{path: '', component: LoginComponent, pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    NavigationComponent,
    UsersComponent,
    MyrecipesComponent,
    RecipeuploadComponent,
    RecipesComponent,
    RecipedetailesComponent,
    MyRecipeDetailesComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
