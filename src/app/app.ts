import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './pages/header/header'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Header], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Verifica se está no navegador antes de tentar rolar a página
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    });
  }
}