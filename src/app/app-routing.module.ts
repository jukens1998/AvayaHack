import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { CamarasComponent } from './Components/camaras/camaras.component';
import { LlamadasComponent } from './Components/llamadas/llamadas.component';
import { AlarmasComponent } from './Components/alarmas/alarmas.component';
import { MapaComponent } from './Components/mapa/mapa.component';
import { CamarasseguridadComponent } from './Components/camarasseguridad/camarasseguridad.component';


const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'camaras', component: CamarasComponent},
  {path:'llamadas', component: LlamadasComponent},
  {path:'alarmas', component: AlarmasComponent},
  {path:'camarota', component: CamarasseguridadComponent},
  {path:'mapa', component: MapaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndexComponent,CamarasComponent,LlamadasComponent,AlarmasComponent,CamarasseguridadComponent,MapaComponent]
