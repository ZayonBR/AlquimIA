import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-automacao',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './automacao.html',
  styleUrl: './automacao.css' // Se não tiver esse arquivo CSS, pode apagar esta linha
})
export class Automacao { }