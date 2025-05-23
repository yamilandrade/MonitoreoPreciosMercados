import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mercados',
        loadComponent: () => import('./mercados/mercados.component')
          .then((c) => c.MercadosComponent)
      },
      {
        path: 'productos',
        loadComponent: () => import('./producto/producto.component')
          .then((c) => c.ProductoComponent)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
