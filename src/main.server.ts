import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import {App } from './app/app'; 
import { config } from './app/app.config.server';

// A mágica acontece aqui: recebendo e repassando o "context"
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;