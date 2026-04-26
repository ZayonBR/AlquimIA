import { ApplicationConfig } from '@angular/core';
// Importe o withInMemoryScrolling
import { provideRouter, withInMemoryScrolling } from '@angular/router'; 

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // Esta é a configuração mágica do Angular:
      withInMemoryScrolling({
        anchorScrolling: 'enabled', // Ativa o scroll para IDs (como #servicos)
        scrollPositionRestoration: 'enabled' // Faz voltar pro topo automaticamente se não tiver ID
      })
    ), 
    provideClientHydration(withEventReplay())
  ]
};