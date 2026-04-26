import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // IMPORTANTE

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RouterModule], // ADICIONE O ROUTERMODULE AQUI
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre { }