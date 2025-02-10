import { Component } from '@angular/core';
import { GenerationRepasService } from '../../services/generation-repas.service';
import { GeminiService } from '../../services/gemini.service';
import { Meal } from '../../models/meal.model';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';
import * as  testRecipe  from '../../../assets/data/recipe.json'
import { RecipeComponent } from "../recipe/recipe.component";

@Component({
  selector: 'app-accueil',
  imports: [FormsModule, RecipeComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {


  generatedMeal : Meal | undefined = undefined;
  generatedMeals : Meal[]  = [];
  mealsNumber = 1;
  currentRecipe : Recipe | undefined = undefined;

  isLoading = new Array(this.generatedMeals.length).fill(false);

  constructor(private generationRepasService: GenerationRepasService, private gemini: GeminiService){}

  generateMeal() : void{    
    this.generatedMeal = this.generationRepasService.generateOneMeal()
  }

  generateMeals(){    
    if(this.mealsNumber < 1)
      console.log('Erreur : Nombre de repas négatif.')
    else{
      this.generatedMeals = this.generationRepasService.generateManyMeal(this.mealsNumber);
      this.currentRecipe = undefined
    }
  }

  checkMealsNumber(){
    if(this.mealsNumber < 1){
      this.mealsNumber = 1
    }
  }

  generateRecipe(index : number) {
    this.isLoading[index] = true;
    this.gemini.generateRecipe(this.generatedMeals[index])
    .then((recipe : Recipe)=>{
      console.log(recipe);
      this.currentRecipe = recipe
      this.isLoading[index] = false;
    })
    .catch(e =>{
      console.log(e);
      this.isLoading[index] = false;
    });
    
  }

  isAnyLoading(): boolean {
    return this.isLoading.includes(true); 
  }
}
