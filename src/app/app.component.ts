import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from "./components/accueil/accueil.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'La Cantina';
}
