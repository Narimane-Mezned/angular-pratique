// ce fichier est la classe du composant App
import { Component, signal } from '@angular/core';
import { First } from './first/first'; // pour utiliser le composant First
import { Hello } from './hello/hello'; // pour utiliser le composant Hello
import { Nom } from './nom/nom'; // pour utiliser le composant Nom

@Component({
  selector: 'app-root',
  imports: [First, Hello, Nom], // sans cette ligne , les composants First et Hello ne peuvent pas être utilisés dans le template de App , cette ligne définit ke contexte de compilation du template de App (càd la liste de ce que le template a le droit d'utiliser )
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-pratique');
  // celle ci est une propriété title créée par le CLI
}
