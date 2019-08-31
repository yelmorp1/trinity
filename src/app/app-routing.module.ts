import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductoIndustrialComponent } from './pages/producto-industrial/producto-industrial.component'

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'produccionAgricola',
    component: ProductoComponent
  },
  {
    path: 'produccionIndustrial',
    component: ProductoIndustrialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
