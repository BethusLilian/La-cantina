import { Component } from '@angular/core';
import { GenerationRepasService } from '../../services/generation-repas.service';
import { Meal } from '../../models/meal.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

  generatedMeal : Meal | undefined = undefined
  generatedMeals : Meal[]  = []
  mealsNumber = 1

  constructor(private generationRepasService: GenerationRepasService){}

  generateMeal() : void{    
    this.generatedMeal = this.generationRepasService.generateOneMeal()
  }

  generateMeals(){    
    if(this.mealsNumber < 1)
      console.log('Erreur : Nombre de repas négatif.')
    else
      this.generatedMeals = this.generationRepasService.generateManyMeal(this.mealsNumber)   
  }

  checkMealsNumber(){
    if(this.mealsNumber < 1){
      this.mealsNumber = 1
    }
  }
}
