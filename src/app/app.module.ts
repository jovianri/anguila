import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ViewmodeloComponent } from './views/viewmodelo/viewmodelo.component';
import { EjpropertybindingComponent } from './bindings/ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './bindings/ejeventbinding/ejeventbinding.component';
import { Ej2awaybindingComponent } from './bindings/ej2awaybinding/ej2awaybinding.component';
import { EjdirectivangifComponent } from './directivas/ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangforComponent } from './directivas/ejdirectivangfor/ejdirectivangfor.component';
import { ArrayobjetosComponent } from './directivas/arrayobjetos/arrayobjetos.component';
import { EjdirectivangswitchComponent } from './directivas/ejdirectivangswitch/ejdirectivangswitch.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './routing/inicio/inicio.component';

import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './routing/header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'directivas1', component: EjdirectivangifComponent },
  { path: 'directivas2', component: EjdirectivangforComponent },
  { path: 'directivas3', component: ArrayobjetosComponent },
  { path: 'directivas4', component: EjdirectivangswitchComponent },
  { path: 'modelos', component: ViewmodeloComponent },
  { path: 'binding1', component: EjpropertybindingComponent },
  { path: 'binding2', component: EjeventbindingComponent },
  { path: 'binding3', component: Ej2awaybindingComponent },
  { path: 'addprovee', component: AddproveeComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ViewmodeloComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2awaybindingComponent,
    EjdirectivangifComponent,
    EjdirectivangforComponent,
    ArrayobjetosComponent,
    EjdirectivangswitchComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
