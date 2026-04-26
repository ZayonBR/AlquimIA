import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-sites',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './sites.html',
  styleUrl: './sites.css'
})
export class Sites { }