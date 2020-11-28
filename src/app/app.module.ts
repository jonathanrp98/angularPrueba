import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { AreaTrabajoComponent } from './componentes/area-trabajo/area-trabajo.component';
import { CrearLibroComponent } from './componentes/crear-libro/crear-libro.component';
import { EditarLibroComponent } from './componentes/editar-libro/editar-libro.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AreaTrabajoComponent,
    CrearLibroComponent,
    EditarLibroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
