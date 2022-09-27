import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AccountantModule } from './accountant/accountant.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({  //Decorador especial 
  declarations: [   //Aca deben estar declarados todos los componentes que se quieran usar o si no ANGULAR no sera capaz de reconocerlos.
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AccountantModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
