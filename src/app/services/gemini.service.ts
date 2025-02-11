import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Meal } from '../models/meal.model';
import { Recipe } from '../models/recipe.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  constructor() { }

  async generateRecipe(meal : Meal) : Promise<Recipe> {
    const genAI = new GoogleGenerativeAI(environment.geminiApiKey);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `"Recette avec les ingrédients suivants : ${meal.protein}, ${meal.legume}, ${meal.feculent}, ${meal.autre} (facultatif). Au format JSON, 
    temps_preparation et temps_cuisson sans mot minutes: 
    {
        "titre":  "",
        "temps_preparation": "",
        "temps_cuisson": "",
        "nombre_personnes": "",
        "ingredient" : [
            {
                "nom" : "",
                "quantite" :""
            }
        ],
        "instruction" : [
            "",
            ""
        ]
    }"

    `;

    
    const result = await model.generateContent(prompt);
    return this.formatJson(result.response.text())
  }

  cleanJSON(jsonString :string ) {
    return jsonString.replace(/```json|```/g, "").trim();
  }

  formatJson(jsonString :string ){
    const cleanedString = this.cleanJSON(jsonString)
    return JSON.parse(cleanedString);
  }

}


