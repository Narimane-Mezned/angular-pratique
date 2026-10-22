import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<p class="hello">Bonjour depuis un composant créé à la main !</p>', //au lieu de templateURL , le HTML est écrit directement ici
  styles: ['.hello { color: teal; font-weight: bold; }'], // au lieu de styleURL , le CSS est écrit directement ici
})
export class Hello {}
