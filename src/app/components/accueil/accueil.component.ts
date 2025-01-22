import { Component } from '@angular/core';
import { GenerationRepasService } from '../../services/generation-repas.service';
import { Meal } from '../../models/meal.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-accueil',
  imports: [JsonPipe],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

  generatedMeal : Meal | undefined = undefined

  constructor(private generationRepasService: GenerationRepasService){}

  generateMeal() : void{    
    this.generatedMeal = this.generationRepasService.generateMeal()
    console.log(this.generatedMeal);
    
  }
}
