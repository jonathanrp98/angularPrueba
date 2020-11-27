import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AreaTrabajoComponent} from 'src/app/componentes/area-trabajo/area-trabajo.component';
import {NavbarComponent} from 'src/app/componentes/navbar/navbar.component';
import {CrearLibroComponent} from 'src/app/componentes/crear-libro/crear-libro.component';
import {EditarLibroComponent} from 'src/app/componentes/editar-libro/editar-libro.component';
import {SidebarComponent} from 'src/app/componentes/sidebar/sidebar.component';

const routes: Routes = [

  { path: '', redirectTo: 'areaTrabajo/crearLibro', pathMatch: 'full' },
  {
    path: 'areaTrabajo',
    component: AreaTrabajoComponent,
    children: [
        { path: 'crearLibro', component: CrearLibroComponent },
        { path: 'editarlibro', component: EditarLibroComponent }
      ]
  },
  // { path: 'app-area-trabajo', component: AreaTrabajoComponent},
  // { path: 'navbar', component: NavbarComponent },
  // { path: 'crearLibro', component: CrearLibroComponent },
  // { path: 'editarlibro', component: EditarLibroComponent },
  // { path: 'sidebar', component: SidebarComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
