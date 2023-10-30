import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartComponent} from "./modules/general/start/start.component";
import {LocalesComponent} from "./modules/general/locales/locales.component";
import {UbicacioneslocalesComponent} from "./modules/general/ubicacioneslocales/ubicacioneslocales.component";
import {CrearubicacionesComponent} from "./modules/general/crearubicaciones/crearubicaciones.component";

const routes: Routes = [
  { path: '', component: StartComponent, },
  {
    path: 'locales', component: LocalesComponent
  },
  {
    path: 'ubicaciones', component: UbicacioneslocalesComponent
  },
  {
    path: 'crear', component: CrearubicacionesComponent
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
