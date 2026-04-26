import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Sites } from './pages/sites/sites';
import { Automacao } from './pages/automacao/automacao';
import { Design } from './pages/design/design';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'sites', component: Sites },
  { path: 'automacao', component: Automacao },
  { path: 'design', component: Design },
  { path: 'contato', component: Contato }, // Adicione esta linha
];
