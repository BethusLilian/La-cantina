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
    console.log(this.generatedMeal);
  }

  generateMeals(){
    console.log(this.mealsNumber);
    
    this.generatedMeals = this.generationRepasService.generateManyMeal(this.mealsNumber)
    console.log(this.generatedMeals);
    
  }
}
