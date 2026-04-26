import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ADICIONE ESTA LINHA
import { RouterModule } from '@angular/router'; // Provavelmente você já tem essa

@Component({
  selector: 'app-header',
  standalone: true, // Se o seu componente for standalone
  imports: [CommonModule, RouterModule], // <-- ADICIONE O CommonModule AQUI
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isMenuOpen = false;

  toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
  // Log para você testar no console do navegador se o clique está registrando
  console.log('Menu status:', this.isMenuOpen); 
}
}