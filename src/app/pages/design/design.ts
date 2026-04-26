// design.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 1. Importe aqui

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule, RouterModule], // 2. Adicione aqui
  templateUrl: './design.html',
  styleUrl: './design.css'
})
export class Design { }