import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasmasPipe } from './shared/pipes/masmas.pipe';
import { SexdescPipe } from './shared/pipes/sexdesc.pipe';
import { PropietarioCardComponent } from './components/propietario-card/propietario-card.component';
import { PropietarioFormComponent } from './components/propietario-form/propietario-form.component';
import { PropietarioListComponent } from './components/propietario-list/propietario-list.component';
import { TiendaCardComponent } from './components/tienda-card/tienda-card.component';
import { TiendaFormComponent } from './components/tienda-form/tienda-form.component';
import { TiendaListComponent } from './components/tienda-list/tienda-list.component';
import { InicioComponent } from './components/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,    
    MasmasPipe,
    SexdescPipe,   
    PropietarioCardComponent,
    PropietarioFormComponent,
    PropietarioListComponent,
    TiendaCardComponent,
    TiendaFormComponent,
    TiendaListComponent,
    InicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule   
  ],
  providers: [

    {
      provide: LOCALE_ID,
      useValue : 'es-EC'
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
