import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { HomeComponent } from 'app/home/home.component';
import { NotfoundComponent } from 'app/notfound/notfound.component';
import { VistaPrincipalComponent } from 'app/vista-principal/vista-principal.component';
import { ProductosComponent } from 'app/productos/productos.component';
import { VerComponent } from 'app/ver/ver.component';

// Se definen las rutas del proyecto
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'vista-principal', component: VistaPrincipalComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ver', component: VerComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
