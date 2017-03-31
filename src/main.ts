import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Aplicacion leida desde el modulo raiz - Aplicattion read from root module
import { AppModule } from './app/app.module';

//Archivo para la configuracion - File for configuration
import { environment } from './environments/environment';

//Condiciones para ejecutar en modo desarrollo o produccion - Conditions to execute in development or producction mode
if (environment.production) {
  enableProdMode();
}

//Arranque a la aplicacion invocando el modulo raiz - Boot the application by invoking the root module
platformBrowserDynamic().bootstrapModule(AppModule);


import { sumar } from './util';

var suma = sumar(5,5);
let perro = "toby";
const pi = 3.14;

