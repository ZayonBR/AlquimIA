import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Certifique-se de que é RouterModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], // Aqui está o segredo
  templateUrl: './header.html',
  styleUrl: './header.css' // Corrigi de .html para .css aqui!
})
export class Header { }