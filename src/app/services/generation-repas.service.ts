import { Injectable } from '@angular/core';
import * as ingredient from '../../assets/data/ingredient.json';
import { Meal } from '../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class GenerationRepasService {

  

  constructor() { }

  generateMeal() : Meal {
    const protein = this.getRandomItem(ingredient.Proteines);
    const legume = this.getRandomItem(ingredient.Legumes);
    const feculent = this.getRandomItem(ingredient.Feculents);
    const autre = this.getRandomItem(ingredient.Autres);

    return {
      protein : protein,
      legume : legume,
      feculent : feculent,
      autre : autre
    }
  }

  getRandomItem(array : string[]){
      return array[Math.floor(Math.random()*array.length)];
  }
}