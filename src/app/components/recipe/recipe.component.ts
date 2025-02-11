import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  @Input() recipe : Recipe | undefined = undefined
  isCopied = false;

  copyRecipe(){
    if(this.recipe !== undefined){
      const noteRecipe = this.recipeToNote(this.recipe)
      navigator.clipboard.writeText(noteRecipe)
      .then(()=> this.isCopied = true)
      .catch(e => console.error(e));
      
    }
    
  }

  recipeToNote(recipe: Recipe): string {
    let note = `📌 Recette : ${recipe.titre}\n\n`;
    note += `⏳ Temps de préparation : ${recipe.temps_preparation} min.\n`;
    note += `🔥 Temps de cuisson : ${recipe.temps_cuisson} min.\n`;
    note += `🍽️ Pour ${recipe.nombre_personnes} personnes\n\n`;
    
    note += `🛒 Ingrédients :\n`;
    recipe.ingredients.forEach((ing, index) => {
      note += `  ${index + 1}. ${ing.quantite} de ${ing.nom}\n`;
    });
  
    note += `\n🔪 Instructions :\n`;
    recipe.instructions.forEach((step, index) => {
      note += `  ${index + 1}. ${step}\n`;
    });
  
    return note;
  }
}
