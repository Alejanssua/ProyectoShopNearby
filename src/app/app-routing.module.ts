import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropietarioListComponent } from './components/propietario-list/propietario-list.component';
import { PropietarioCardComponent } from './components/propietario-card/propietario-card.component';
import { PropietarioFormComponent } from './components/propietario-form/propietario-form.component';
import { TiendaListComponent } from './components/tienda-list/tienda-list.component';
import { TiendaCardComponent } from './components/tienda-card/tienda-card.component';
import { TiendaFormComponent } from './components/tienda-form/tienda-form.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'propietario/form', component: PropietarioFormComponent},
  {path: 'propietario/form/:id', component: PropietarioFormComponent},
  {path: 'propietario/list', component: PropietarioListComponent},
  {path: 'propietario/card/:id', component: PropietarioCardComponent},
  {path: 'tienda/form', component: TiendaFormComponent},
  {path: 'tienda/form/:id', component: TiendaFormComponent},
  {path: 'tienda/list', component: TiendaListComponent},
  {path: 'tienda/card/:id', component: TiendaCardComponent},
  {path: 'inicio', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
