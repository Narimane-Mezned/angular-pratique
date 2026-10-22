// ce fichier represente la classe du composant First

import { Component } from '@angular/core'; //pour utiliser le décorateur Component

@Component({
  selector: 'app-first', // le nom de la balise HTML de ce composant qui sera utilisée pour l'afficher
  imports: [], // les autres composants ou modules à importer pour ce composant
  templateUrl: './first.html', // le chemin vers le fichier HTML (le template)
  styleUrl: './first.css', // le style de ce composant est dans le fichier first.css
})
export class First {} // la classe est exportée pour que d'autres fichiers puissent l'utiliser
