import { Ingredient } from "./ingredient.model";

export interface Recipe {
    titre:string;
    temps_preparation:string;
    temps_cuisson:string;
    nombre_personnes:string;
    ingredients:Ingredient[];
    instructions:string[];
}
