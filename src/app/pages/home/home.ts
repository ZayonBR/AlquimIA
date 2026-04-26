import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- ADICIONE ESTA LINHA

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- COLOQUE AQUI DENTRO TAMBÉM
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { }